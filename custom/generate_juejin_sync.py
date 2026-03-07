#!/usr/bin/env python3
from __future__ import annotations

import html
import re
import shutil
import subprocess
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Iterable

from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT.parent / "blog" / "juejin"
TARGET_DIR = ROOT / "insights" / "juejin"
HOME_PAGE = ROOT / "index.html"
INSIGHTS_PAGE = ROOT / "insights" / "index.html"

WRITING_SECTION_RE = re.compile(
    r'<section class="section" id="writing">.*?</section>',
    re.DOTALL,
)
METADATA_RE = re.compile(r"^\s*<!--\s*\n(.*?)\n-->\s*\n?", re.DOTALL)

FEATURED_ESSAYS = [
    {
        "badge": "⌘",
        "title": "OpenAI Codex 深入剖析",
        "copy": "从终端工作流视角理解 Codex：模型、执行、反馈闭环与产品落地方向。",
        "meta": ["Codex", "Terminal Agent"],
        "href": "/insights/openai-codex-architecture/",
    },
    {
        "badge": "◎",
        "title": "Gemini CLI 深度源码分析",
        "copy": "从配置、工具调用到结果反馈，理解 Gemini CLI 的组织方式。",
        "meta": ["Gemini CLI", "Source Reading"],
        "href": "/insights/gemini-cli-source/",
    },
    {
        "badge": "↔",
        "title": "为什么都爱用 stdio",
        "copy": "把 stdio 看成 Agent 和本地工具之间最稳定的短链路。",
        "meta": ["stdio", "Transport"],
        "href": "/insights/stdio-transport/",
    },
    {
        "badge": "⛓",
        "title": "从 MCP 到 ACP 再到 A2A",
        "copy": "一次把三类协议的边界、角色和适用场景讲清楚。",
        "meta": ["MCP / ACP / A2A", "Architecture"],
        "href": "/insights/agent-protocols/",
    },
]


@dataclass
class Article:
    source_path: Path
    title: str
    source_url: str
    article_id: str
    published_at: datetime
    synced_at: str
    keywords: list[str]
    cover_image: str
    markdown: str

    @property
    def stem(self) -> str:
        return self.source_path.stem

    @property
    def year(self) -> int:
        return self.published_at.year

    @property
    def date_label(self) -> str:
        return self.published_at.strftime("%Y.%m.%d")

    @property
    def route(self) -> str:
        return f"/insights/juejin/{self.stem}/"

    @property
    def badge(self) -> str:
        if self.keywords:
            label = self.keywords[0].strip()
            return label[:1].upper() if label else "掘"
        return "掘"


def parse_metadata_block(text: str) -> tuple[dict[str, str], str]:
    match = METADATA_RE.match(text)
    metadata: dict[str, str] = {}
    body = text
    if match:
        body = text[match.end():]
        for raw_line in match.group(1).splitlines():
            line = raw_line.strip()
            if not line or ":" not in line:
                continue
            key, value = line.split(":", 1)
            metadata[key.strip()] = value.strip()
    return metadata, body.strip()


def parse_datetime(value: str) -> datetime:
    return datetime.fromisoformat(value.replace("Z", "+00:00"))


def run_pandoc(markdown: str, target: str) -> str:
    if not shutil.which("pandoc"):
        raise RuntimeError("pandoc is required to build synced blog pages")
    result = subprocess.run(
        ["pandoc", "-f", "gfm+yaml_metadata_block", "-t", target],
        input=markdown,
        text=True,
        capture_output=True,
        check=False,
    )
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or "pandoc conversion failed")
    return result.stdout.strip()


def strip_duplicate_heading(body_html: str, title: str) -> str:
    soup = BeautifulSoup(body_html, "html.parser")
    first_heading = soup.find(["h1"])
    normalized_title = re.sub(r"\s+", "", title)
    if first_heading:
        normalized_heading = re.sub(r"\s+", "", first_heading.get_text(strip=True))
        if normalized_heading == normalized_title:
            first_heading.decompose()
    return str(soup)


def excerpt_from_html(body_html: str, *, limit: int = 120) -> str:
    text = BeautifulSoup(body_html, "html.parser").get_text(" ", strip=True)
    text = re.sub(r"\s+", " ", text)
    if len(text) <= limit:
        return text
    return text[:limit].rstrip() + "..."


def load_articles(source_dir: Path) -> list[Article]:
    articles: list[Article] = []
    for path in sorted(source_dir.glob("*.md")):
        if path.name == "README.md":
            continue
        raw_text = path.read_text(encoding="utf-8")
        metadata, markdown = parse_metadata_block(raw_text)
        keywords = [
            keyword.strip()
            for keyword in metadata.get("keywords", "").split(",")
            if keyword.strip()
        ]
        articles.append(
            Article(
                source_path=path,
                title=metadata.get("title", path.stem),
                source_url=metadata.get("source", ""),
                article_id=metadata.get("juejin_article_id", path.stem),
                published_at=parse_datetime(metadata["published_at"]),
                synced_at=metadata.get("synced_at", ""),
                keywords=keywords,
                cover_image=metadata.get("cover_image", ""),
                markdown=markdown,
            )
        )
    articles.sort(key=lambda article: article.published_at, reverse=True)
    return articles


def render_meta(values: Iterable[str]) -> str:
    spans = [f"<span>{html.escape(value)}</span>" for value in values if value]
    return "".join(spans)


def render_article_page(article: Article, body_html: str, excerpt: str) -> str:
    keywords = article.keywords[:2] or ["Juejin Sync", "Blog"]
    meta_tags = [article.date_label, *keywords]
    note = (
        f'这篇文章已从掘金同步到个人博客，原始发布地址为 '
        f'<a href="{html.escape(article.source_url)}" target="_blank" rel="noreferrer">掘金原文</a>。'
    )
    cover_meta = (
        f'<meta property="og:image" content="{html.escape(article.cover_image)}">\n'
        if article.cover_image
        else ""
    )
    return f"""<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{html.escape(article.title)} | CocoonBreak</title>
    <meta name="description" content="{html.escape(excerpt)}">
    <meta property="og:title" content="{html.escape(article.title)} | CocoonBreak">
    <meta property="og:description" content="{html.escape(excerpt)}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://blog.lijianlin.com.cn{article.route}">
    {cover_meta}    <link rel="icon" href="/img/logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/custom/site.css">
    <script defer src="/custom/site.js"></script>
    <script defer src="/custom/live2d-loader.js"></script>
  </head>
  <body>
    <div class="article-shell">
      <nav class="insight-nav">
        <a href="/">← 首页</a>
        <a href="/insights/">同步文章</a>
        <a href="{html.escape(article.source_url)}" target="_blank" rel="noreferrer">掘金原文</a>
      </nav>

      <header class="article-hero" data-reveal>
        <div class="article-meta">
          {render_meta(meta_tags)}
        </div>
        <h1>{html.escape(article.title)}</h1>
        <p class="article-intro">{html.escape(excerpt)}</p>
        <div class="article-note">{note}</div>
      </header>

      <article class="prose" data-reveal>
        {body_html}
      </article>
    </div>
  </body>
</html>
"""


def render_latest_card(article: Article, excerpt: str) -> str:
    meta = render_meta([article.date_label, *article.keywords[:2]])
    return f"""
          <article class="writing-card" data-reveal>
            <span class="icon-badge">{html.escape(article.badge)}</span>
            <h3>{html.escape(article.title)}</h3>
            <p class="writing-copy">{html.escape(excerpt)}</p>
            <div class="card-meta">{meta}</div>
            <a class="ghost-link" href="{article.route}">阅读全文</a>
          </article>"""


def render_featured_card(item: dict[str, object]) -> str:
    meta = render_meta(item["meta"])
    return f"""
          <article class="writing-card" data-reveal>
            <span class="icon-badge">{html.escape(str(item["badge"]))}</span>
            <h3>{html.escape(str(item["title"]))}</h3>
            <p class="writing-copy">{html.escape(str(item["copy"]))}</p>
            <div class="card-meta">{meta}</div>
            <a class="ghost-link" href="{html.escape(str(item["href"]))}">阅读全文</a>
          </article>"""


def render_archive_groups(articles: list[Article]) -> str:
    grouped: dict[int, list[Article]] = {}
    for article in articles:
        grouped.setdefault(article.year, []).append(article)

    blocks: list[str] = []
    for year in sorted(grouped.keys(), reverse=True):
        items = []
        for article in grouped[year]:
            keyword_text = " / ".join(article.keywords[:2]) if article.keywords else "Juejin Sync"
            items.append(
                f"""
              <li>
                <a href="{article.route}">{html.escape(article.title)}</a>
                <span class="article-link-meta">{article.date_label} · {html.escape(keyword_text)}</span>
              </li>"""
            )
        blocks.append(
            f"""
        <article class="archive-card year-card" data-reveal>
          <div class="year-card-header">
            <h3>{year}</h3>
            <span>{len(grouped[year])} 篇</span>
          </div>
          <ul class="article-link-list">
            {''.join(items)}
          </ul>
        </article>"""
        )
    return "".join(blocks)


def build_insights_page(articles: list[Article], excerpts: dict[str, str]) -> str:
    latest = articles[:8]
    latest_cards = "".join(render_latest_card(article, excerpts[article.stem]) for article in latest)
    featured_cards = "".join(render_featured_card(item) for item in FEATURED_ESSAYS)
    archive_blocks = render_archive_groups(articles)
    latest_sync = articles[0].date_label if articles else ""
    latest_years = f"{articles[-1].year} - {articles[0].year}" if articles else ""
    return f"""<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Insights | CocoonBreak</title>
    <meta name="description" content="已从掘金同步到博客的 {len(articles)} 篇文章，覆盖 AI Tooling、协议、Vue、部署与工程实践。">
    <link rel="icon" href="/img/logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/custom/site.css">
    <script defer src="/custom/site.js"></script>
    <script defer src="/custom/live2d-loader.js"></script>
  </head>
  <body>
    <header class="site-header">
      <div class="site-header-inner">
        <a class="brand-lockup" href="/">
          <span class="brand-mark"><img src="/img/logo.png" alt="CocoonBreak"></span>
          <span>
            <span class="brand-title">CocoonBreak</span>
            <span class="brand-subtitle">Insights</span>
          </span>
        </a>
        <button class="menu-button" type="button" aria-expanded="false" aria-label="切换导航" data-menu-button>☰</button>
        <nav class="nav-links" data-nav-links>
          <a href="/">首页</a>
          <a href="#latest">最新同步</a>
          <a href="#archive">全部归档</a>
          <a href="https://juejin.cn/user/3817931570691031/posts" target="_blank" rel="noreferrer">掘金</a>
        </nav>
      </div>
    </header>

    <main class="page-shell">
      <section class="hero">
        <div class="hero-grid">
          <article class="hero-copy" data-reveal>
            <div class="eyebrow">Juejin Sync · Blog Archive · Long-term Asset</div>
            <h1>掘金文章已经 <span>整批同步</span> 到博客。</h1>
            <p class="hero-lead">
              现在这部分不再只有 4 篇专题文章，而是完整接入了你在掘金发布过的 {len(articles)} 篇文章。
              从最近的 Codex、Gemini CLI、MCP / ACP / A2A，到更早期的 Vue、部署、工程实践和小程序项目，都已经变成博客站内可访问的静态页面。
            </p>
            <div class="hero-actions">
              <a class="primary-button" href="#latest">看最新同步</a>
              <a class="secondary-button" href="#archive">看全部归档</a>
              <a class="secondary-button" href="https://juejin.cn/user/3817931570691031/posts" target="_blank" rel="noreferrer">掘金原站</a>
            </div>
          </article>

          <aside class="hero-panel" data-reveal>
            <div class="hero-panel-header">
              <div>
                <h2 class="panel-title">同步概览</h2>
                <p class="panel-caption">同步后的内容在博客侧长期可访问，也更方便你继续做首页入口、专题聚合和后续 SEO。</p>
              </div>
            </div>
            <div class="mini-grid">
              <div class="mini-card">
                <strong>{len(articles)}</strong>
                <span>已同步文章</span>
              </div>
              <div class="mini-card">
                <strong>{latest_years}</strong>
                <span>覆盖年份</span>
              </div>
              <div class="mini-card">
                <strong>{latest_sync}</strong>
                <span>最近发布</span>
              </div>
              <div class="mini-card">
                <strong>4</strong>
                <span>博客专题长文</span>
              </div>
            </div>
            <div class="hero-stack">
              <div class="stack-item">
                <div><strong>最新 AI 文章</strong><span>Codex、Gemini CLI、MCP / ACP / A2A 这批近作已经全部入站。</span></div>
                <span class="card-pill">AI</span>
              </div>
              <div class="stack-item">
                <div><strong>历史工程文章</strong><span>老文章也保住了内容，可继续被检索和引用。</span></div>
                <span class="card-pill">Archive</span>
              </div>
              <div class="stack-item">
                <div><strong>同步机制可复跑</strong><span>先拉 Markdown，再生成静态页，后续更新不需要手工一篇篇搬。</span></div>
                <span class="card-pill">Pipeline</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="section" id="latest">
        <div class="section-heading" data-reveal>
          <h2>最近同步到博客的 <span>文章</span></h2>
          <p class="section-copy">先看最近的 8 篇。如果你是第一次进入这里，建议先从这一组开始。</p>
        </div>
        <div class="writing-grid">
          {latest_cards}
        </div>
      </section>

      <section class="section">
        <div class="section-heading" data-reveal>
          <h2>博客里单独整理过的 <span>专题长文</span></h2>
          <p class="section-copy">这 4 篇不是简单搬运，而是更适合个人站点阅读的整理版。</p>
        </div>
        <div class="writing-grid">
          {featured_cards}
        </div>
      </section>

      <section class="section" id="archive">
        <div class="section-heading" data-reveal>
          <h2>全部同步文章 <span>归档</span></h2>
          <p class="section-copy">按年份分组。你后面继续从掘金增量同步时，这里会一起更新。</p>
        </div>
        <div class="year-grid">
          {archive_blocks}
        </div>
      </section>
    </main>

    <footer class="page-shell site-footer">
      <div class="footer-card">
        <span>Insights by CocoonBreak.</span>
        <span>{len(articles)} 篇掘金文章已同步到博客归档。</span>
      </div>
    </footer>
  </body>
</html>
"""


def build_home_writing_section(articles: list[Article], excerpts: dict[str, str]) -> str:
    latest_cards = "".join(
        render_latest_card(article, excerpts[article.stem]) for article in articles[:6]
    )
    return f"""
      <section class="section" id="writing">
        <div class="section-heading" data-reveal>
          <h2>已同步到博客的 <span>最新文章</span></h2>
          <p class="section-copy">
            你的掘金文章现在已经有 {len(articles)} 篇进入博客站内。这里先展示最近同步的 6 篇，完整归档在 `Insights` 页面里。
          </p>
        </div>
        <div class="writing-grid">
          {latest_cards}

          <article class="writing-card" data-reveal>
            <span class="icon-badge">∞</span>
            <h3>查看全部同步文章</h3>
            <p class="writing-copy">按年份浏览全部 {len(articles)} 篇文章，包括旧的 Vue、部署、小程序和现在的 AI Tooling 专题。</p>
            <div class="card-meta"><span>Insights</span><span>{articles[0].year} / {articles[-1].year}</span></div>
            <a class="ghost-link" href="/insights/">进入归档页</a>
          </article>
        </div>
      </section>"""


def build_article_outputs(articles: list[Article]) -> dict[str, str]:
    excerpts: dict[str, str] = {}
    if TARGET_DIR.exists():
        shutil.rmtree(TARGET_DIR)
    TARGET_DIR.mkdir(parents=True, exist_ok=True)

    for article in articles:
        raw_html = run_pandoc(article.markdown, "html5")
        body_html = strip_duplicate_heading(raw_html, article.title)
        excerpt = excerpt_from_html(body_html)
        excerpts[article.stem] = excerpt

        page_dir = TARGET_DIR / article.stem
        page_dir.mkdir(parents=True, exist_ok=True)
        (page_dir / "index.html").write_text(
            render_article_page(article, body_html, excerpt),
            encoding="utf-8",
        )

    return excerpts


def update_home_page(section_html: str) -> None:
    text = HOME_PAGE.read_text(encoding="utf-8")
    updated = WRITING_SECTION_RE.sub(section_html, text, count=1)
    if updated == text:
        raise RuntimeError("failed to update home page writing section")
    HOME_PAGE.write_text(updated, encoding="utf-8")


def main() -> int:
    articles = load_articles(SOURCE_DIR)
    if not articles:
        raise RuntimeError(f"no markdown articles found in {SOURCE_DIR}")

    excerpts = build_article_outputs(articles)
    INSIGHTS_PAGE.write_text(build_insights_page(articles, excerpts), encoding="utf-8")
    update_home_page(build_home_writing_section(articles, excerpts))

    print(f"synced_articles={len(articles)}")
    print(f"generated_dir={TARGET_DIR}")
    print(f"insights_page={INSIGHTS_PAGE}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
