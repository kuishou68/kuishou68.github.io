(function () {
  var LANG_KEY = "cocoon-blog-language";
  var THEME_KEY = "cocoon-blog-theme";
  var DEFAULT_LANG = "zh";
  var DEFAULT_THEME = "dark";
  var RTL_LANGS = { ar: true };
  var SUPPORTED_LANGS = ["zh", "en", "es", "ja", "ar"];

  var state = {
    lang: DEFAULT_LANG,
    theme: DEFAULT_THEME
  };

  var baseline = {
    home: null,
    insights: null,
    article: null
  };

  var languageNames = {
    zh: "简体中文",
    en: "English",
    es: "Español",
    ja: "日本語",
    ar: "العربية"
  };

  var uiCopy = {
    zh: {
      menuAria: "切换导航",
      languageAria: "切换语言",
      themeLabel: "主题",
      dark: "深色",
      light: "浅色",
      switchToDark: "切换到深色主题",
      switchToLight: "切换到浅色主题"
    },
    en: {
      menuAria: "Toggle navigation",
      languageAria: "Switch language",
      themeLabel: "Theme",
      dark: "Dark",
      light: "Light",
      switchToDark: "Switch to dark theme",
      switchToLight: "Switch to light theme"
    },
    es: {
      menuAria: "Cambiar navegacion",
      languageAria: "Cambiar idioma",
      themeLabel: "Tema",
      dark: "Oscuro",
      light: "Claro",
      switchToDark: "Cambiar al tema oscuro",
      switchToLight: "Cambiar al tema claro"
    },
    ja: {
      menuAria: "ナビゲーションを切り替える",
      languageAria: "言語を切り替える",
      themeLabel: "テーマ",
      dark: "ダーク",
      light: "ライト",
      switchToDark: "ダークテーマに切り替える",
      switchToLight: "ライトテーマに切り替える"
    },
    ar: {
      menuAria: "تبديل التنقل",
      languageAria: "تبديل اللغة",
      themeLabel: "المظهر",
      dark: "داكن",
      light: "فاتح",
      switchToDark: "التبديل إلى المظهر الداكن",
      switchToLight: "التبديل إلى المظهر الفاتح"
    }
  };

  var homeTranslations = {
    en: {
      meta: {
        title: "CocoonBreak | AI Tooling, Product Stack, and Community",
        description: "CocoonBreak's personal blog for AI tooling, the Cocoon product stack, community channels, delivery scope, and current writing."
      },
      brandSubtitle: "AI Tooling · Cocoon Stack · Community",
      nav: ["About", "Projects", "Writing", "Community", "Archive"],
      hero: {
        eyebrow: "Cocoon Stack · OpenAI / Gemini / Claude · AWS",
        title: "Connecting <span>AI tooling</span>, products, and infrastructure into one chain that actually runs.",
        lead: "I started with Vue, uni-app, and mini programs, then moved into AI tooling, SaaS, and AWS delivery. What matters now is not whether a model can be connected, but whether models, CLIs, gateways, products, and communities can keep running together.",
        ctas: ["View GitHub", "Read latest posts", "Join Telegram"],
        badgeLabel: "profile badges"
      },
      focus: {
        title: "What I'm focused on now",
        caption: "Not isolated coding tasks, but a full loop that links model capability, CLI workflow, API gateways, product surfaces, and community channels.",
        pill: "2026 Focus",
        stats: [
          "Contribution on AionUi",
          "Cocoon products in active maintenance",
          "Current AI / CLI long-form essays",
          "Core community channels"
        ],
        stackTitles: [
          "Multi-model routing and failover",
          "Product and site delivery",
          "AWS and static publishing"
        ],
        stackBodies: [
          "Claude / Codex / Gemini / Kimi / Qwen / API key channels working together",
          "Home, API, SMS, VPN, the blog, and community entry points built as one brand set",
          "EC2, GitHub Pages, gateways, reverse proxies, and multi-site maintenance"
        ],
        stackPills: ["Routing", "Product", "Infra"]
      },
      about: {
        title: "From <span>front-end engineering</span> to AI tooling",
        copy: "My earliest public projects were centered on front-end work, Vue, uni-app, and mini programs. The current focus is model integration, CLI agents, protocol evolution, OpenAI-compatible gateways, and the products and infrastructure built around them.",
        notes: [
          "<strong>Early foundation</strong> Repositories such as neteaseMusic, Vuejs, hiolabs, and fruitsShop represent long-term work in mini programs, business delivery, and front-end practice.",
          "<strong>Shift over the last two years</strong> The work moved from page building to model workflows: CLI, protocols, gateways, builds, stability, and cross-platform auth chains.",
          "<strong>Current role</strong> More of a builder who lands AI capability inside real products than a developer who stops at demos."
        ],
        careTitle: "What I care about now",
        careItems: [
          "<strong>Whether models can connect reliably</strong> I care about auth, quota limits, 429s, failover chains, and collaboration across different CLIs, not just whether one model is available.",
          "<strong>Whether the products share one entrance</strong> A single Home portal that organizes API, SMS, VPN, community, and writing feels more like a brand than a set of scattered sites.",
          "<strong>Whether writing serves current projects</strong> Recent posts are centered on Codex, Gemini CLI, stdio, and MCP / ACP / A2A rather than disconnected knowledge fragments."
        ]
      },
      projects: {
        title: "Key <span>projects</span> I lead or contribute to",
        copy: "This set explains my current technical center of gravity best: high-star public projects, plus the product stack I keep maintaining.",
        cards: [
          {
            copy: "A public high-star project I contribute to. The work centers on model integration, setup flows, build details, stability fixes, and the collaboration experience across Codex, Gemini, Claude, and local agents.",
            meta: ["18k★+", "Contributor", "AI Tooling"],
            link: "Open project"
          },
          {
            copy: "One of the highest-star repositories in my own account, representing early mini-program product thinking, interaction design, and front-end decomposition.",
            meta: ["147★", "Mini Program", "Front-end"],
            link: "Open project"
          },
          {
            copy: "One reflects long-term front-end training; the other reflects business customization and secondary development. They are not today's center, but they still explain the path I came through.",
            meta: ["46★ / 17★", "Vue", "Business Delivery"],
            link: "Open Vuejs"
          },
          {
            copy: "The product matrix I maintain now, connecting multilingual portals, API gateways, SMS tools, VPN services, and community entry points into one chain that can be reached, operated, and extended.",
            meta: ["Home", "API", "SMS / VPN"],
            link: "See the stack"
          }
        ]
      },
      products: {
        title: "The <span>Cocoon product stack</span> in progress",
        copy: "This is the current build-out. I want these products to behave like one coordinated group under the same entry and brand, not isolated pages.",
        cards: [
          {
            copy: "A multilingual product portal that handles the brand entrance, product-card organization, and unified external presentation.",
            meta: ["Portal", "Multilingual"],
            link: "Visit site"
          },
          {
            copy: "An OpenAI-compatible API gateway for model aggregation, unified distribution, and later product capability access.",
            meta: ["Gateway", "OpenAI Compatible"],
            link: "Visit site"
          },
          {
            copy: "An SMS marketing and notification platform focused on payment flow, SMS channels, and operational back-office flow.",
            meta: ["Marketing", "Notification"],
            link: "Visit site"
          },
          {
            copy: "A set of services for global nodes and a management panel, with emphasis on delivery quality and stable availability.",
            meta: ["Panel", "Node Service"],
            link: "Visit site"
          },
          {
            copy: "A unified gateway for multi-model CLI and API channels, built to connect Claude, Codex, Gemini, Kimi, Qwen, and API-key fallbacks.",
            meta: ["Gateway", "Fallback Chain"],
            link: "Visit site"
          },
          {
            copy: "Notes around Codex, Gemini CLI, stdio, and MCP / ACP / A2A that help move from simply using tools to understanding how they work.",
            meta: ["Codex", "MCP / ACP / A2A"],
            link: "Read notes"
          }
        ]
      },
      writing: {
        title: "Latest <span>posts</span> synced into the blog",
        copy: "Your Juejin writing now has 67 posts inside the blog. This block shows the 6 most recent syncs first, while the full archive lives on the Insights page.",
        linkLabels: ["Read article", "Read article", "Read article", "Read article", "Read article", "Read article", "Open archive"],
        allCard: {
          title: "Browse all synced posts",
          copy: "Browse all 67 posts by year, from older Vue, deployment, and mini-program writing to the current AI tooling topics.",
          meta: ["Insights", "2026 / 2021"],
          link: "Open archive"
        }
      },
      community: {
        title: "My <span>community and publishing channels</span>",
        copy: "The blog is only one surface. GitHub, Juejin, CSDN, Bilibili, Telegram, and Discord are all places where I publish or operate ongoing work.",
        cards: [
          {
            title: "Telegram Group",
            copy: "Best for quick discussion, status updates, and collecting feedback loops.",
            link: "Join group"
          },
          {
            title: "Discord",
            copy: "A better fit for long-lived community collaboration and channel-based discussion.",
            link: "Join server"
          },
          {
            title: "GitHub",
            copy: "The clearest place to see repositories, PRs, current work, and what I care about now.",
            link: "Open profile"
          },
          {
            title: "Juejin",
            copy: "One of the main platforms for writing about AI agents, CLI tooling, protocols, and engineering experience.",
            link: "View posts"
          },
          {
            title: "CSDN",
            copy: "A long-term archive that still holds many older technical notes and accumulated visits.",
            link: "Open column"
          },
          {
            title: "Bilibili",
            copy: "A companion space for video posts and short updates that supplement the written platforms.",
            link: "Open channel"
          }
        ]
      },
      archive: {
        title: "Legacy blog <span>archive entrances</span>",
        copy: "The previous VuePress knowledge base was not removed. The homepage was simply rebuilt into an entrance that matches my current identity and project direction.",
        cards: [
          {
            title: "Front-end Library",
            copy: "Older entries about Axios, CSS, Canvas, JavaScript, React, Webpack, uni-app, and more.",
            link: "Open archive"
          },
          {
            title: "Interview Notes",
            copy: "Older interview topics around browsers, networking, security, Vue, React, and hand-written exercises.",
            link: "Open archive"
          },
          {
            title: "Vue Projects",
            copy: "Project records covering Ant Design, ECharts, book stores, NetEase mini apps, and HaiFeng Shop.",
            link: "Open archive"
          },
          {
            title: "Growth Journal",
            copy: "Annual summaries and progress notes from 2019 to 2021, still carrying a strong sense of that period.",
            link: "Open archive"
          },
          {
            title: "Reading Notes",
            copy: "Reading notes on JavaScript, HTTP, algorithms, networking, and architecture books.",
            link: "Open archive"
          },
          {
            title: "PHP / Python",
            copy: "Older back-end and crawler practice posts kept as the other side of my technical path.",
            link: "PHP archive"
          }
        ]
      },
      footer: [
        "© {year} CocoonBreak. Personal blog rebuilt around AI tooling, community, and the Cocoon stack.",
        "Hosted on GitHub Pages · Legacy VuePress archive preserved."
      ]
    },
    es: {
      meta: {
        title: "CocoonBreak | Herramientas de IA, productos y comunidad",
        description: "Blog personal de CocoonBreak sobre herramientas de IA, la pila de productos Cocoon, comunidad, alcance de entrega y articulos recientes."
      },
      brandSubtitle: "Herramientas IA · Pila Cocoon · Comunidad",
      nav: ["Sobre mi", "Proyectos", "Articulos", "Comunidad", "Archivo"],
      hero: {
        eyebrow: "Cocoon Stack · OpenAI / Gemini / Claude · AWS",
        title: "Conecto <span>herramientas de IA</span>, productos e infraestructura en una cadena que realmente funciona.",
        lead: "Empece con Vue, uni-app y mini programas, y despues pase a herramientas de IA, SaaS y entrega sobre AWS. Ahora me importa menos si un modelo se puede conectar y mas si modelos, CLI, gateways, productos y comunidades pueden operar juntos de forma estable.",
        ctas: ["Ver GitHub", "Leer ultimos articulos", "Unirse a Telegram"],
        badgeLabel: "insignias del perfil"
      },
      focus: {
        title: "En que estoy concentrado ahora",
        caption: "No en codigo aislado, sino en un circuito completo que une capacidad del modelo, flujo CLI, gateways API, superficies del producto y canales de comunidad.",
        pill: "Foco 2026",
        stats: [
          "Contribucion en AionUi",
          "Productos Cocoon en mantenimiento activo",
          "Ensayos actuales sobre IA y CLI",
          "Canales principales de comunidad"
        ],
        stackTitles: [
          "Enrutamiento multimodelo y failover",
          "Entrega de productos y sitios",
          "AWS y publicacion estatica"
        ],
        stackBodies: [
          "Claude / Codex / Gemini / Kimi / Qwen / canales por API key trabajando en conjunto",
          "Home, API, SMS, VPN, blog y comunidad empaquetados como una sola matriz",
          "EC2, GitHub Pages, gateways, reverse proxies y mantenimiento de varios sitios"
        ],
        stackPills: ["Routing", "Product", "Infra"]
      },
      about: {
        title: "De la <span>ingenieria front-end</span> a las herramientas de IA",
        copy: "Mis primeros proyectos publicos estaban centrados en front-end, Vue, uni-app y mini programas. Hoy el foco esta en integracion de modelos, agentes CLI, evolucion de protocolos, gateways OpenAI-compatible y los productos e infraestructura construidos alrededor de esas capacidades.",
        notes: [
          "<strong>Base temprana</strong> Repositorios como neteaseMusic, Vuejs, hiolabs y fruitsShop representan anos de trabajo en mini programas, entrega de negocio y practica front-end.",
          "<strong>Cambio en los ultimos dos anos</strong> El trabajo paso de construir pantallas a construir flujos con modelos: CLI, protocolos, gateways, builds, estabilidad y cadenas de autenticacion multiplataforma.",
          "<strong>Posicion actual</strong> Mas que alguien que hace demos, soy alguien que aterriza capacidades de IA dentro de productos reales."
        ],
        careTitle: "Que me importa ahora",
        careItems: [
          "<strong>Si los modelos se conectan de forma estable</strong> Me importan autenticacion, limites, errores 429, cadenas de fallback y coordinacion entre distintos CLI, no solo si un modelo aislado responde.",
          "<strong>Si los productos tienen una sola entrada</strong> Un portal Home que organiza API, SMS, VPN, comunidad y contenido transmite mas marca que un conjunto de sitios sueltos.",
          "<strong>Si los articulos sirven al proyecto actual</strong> Los textos recientes giran alrededor de Codex, Gemini CLI, stdio y MCP / ACP / A2A en vez de conocimientos dispersos."
        ]
      },
      projects: {
        title: "Proyectos <span>clave</span> que lidero o en los que contribuyo",
        copy: "Este grupo explica mejor mi centro tecnico actual: proyectos publicos con alto numero de stars y la matriz de productos que mantengo.",
        cards: [
          {
            copy: "Proyecto publico con muchas stars en el que contribuyo. El trabajo se centra en integracion de modelos, flujos de configuracion, detalles de build, correcciones de estabilidad y experiencia de colaboracion entre Codex, Gemini, Claude y agentes locales.",
            meta: ["18k★+", "Contributor", "AI Tooling"],
            link: "Ver proyecto"
          },
          {
            copy: "Uno de los repositorios con mas stars de mi cuenta, representando producto temprano en mini programas, experiencia de interaccion y descomposicion front-end.",
            meta: ["147★", "Mini Program", "Front-end"],
            link: "Ver proyecto"
          },
          {
            copy: "Uno refleja entrenamiento front-end de largo plazo; el otro, personalizacion de negocio y desarrollo secundario. Ya no son el centro, pero siguen explicando mi recorrido tecnico.",
            meta: ["46★ / 17★", "Vue", "Business Delivery"],
            link: "Ver Vuejs"
          },
          {
            copy: "La matriz de productos que mantengo hoy, conectando portales multilingues, gateways API, herramientas SMS, servicios VPN y entradas de comunidad en una sola cadena operable y extensible.",
            meta: ["Home", "API", "SMS / VPN"],
            link: "Ver la pila"
          }
        ]
      },
      products: {
        title: "La <span>matriz de productos Cocoon</span> en construccion",
        copy: "Este es el trabajo actual. Quiero que estos productos se comporten como un grupo coordinado bajo la misma entrada y la misma marca.",
        cards: [
          {
            copy: "Portal multilingue que organiza la entrada de marca, las tarjetas de producto y la presentacion externa unificada.",
            meta: ["Portal", "Multilingual"],
            link: "Visitar sitio"
          },
          {
            copy: "Gateway API compatible con OpenAI para agregacion de modelos, distribucion unificada y futuras capacidades de producto.",
            meta: ["Gateway", "OpenAI Compatible"],
            link: "Visitar sitio"
          },
          {
            copy: "Plataforma de marketing SMS y notificaciones enfocada en pagos, canales SMS y flujo operativo de back office.",
            meta: ["Marketing", "Notification"],
            link: "Visitar sitio"
          },
          {
            copy: "Conjunto de servicios para nodos globales y panel de administracion, con enfasis en entrega estable y disponibilidad real.",
            meta: ["Panel", "Node Service"],
            link: "Visitar sitio"
          },
          {
            copy: "Gateway unificado para CLI multimodelo y canales API, capaz de enlazar Claude, Codex, Gemini, Kimi, Qwen y fallbacks por API key.",
            meta: ["Gateway", "Fallback Chain"],
            link: "Visitar sitio"
          },
          {
            copy: "Notas sobre Codex, Gemini CLI, stdio y MCP / ACP / A2A para pasar de simplemente usar herramientas a entender su estructura.",
            meta: ["Codex", "MCP / ACP / A2A"],
            link: "Leer notas"
          }
        ]
      },
      writing: {
        title: "Ultimos <span>articulos</span> sincronizados al blog",
        copy: "Tus textos de Juejin ya suman 67 articulos dentro del blog. Aqui se muestran primero las 6 sincronizaciones mas recientes y el archivo completo vive en Insights.",
        linkLabels: ["Leer articulo", "Leer articulo", "Leer articulo", "Leer articulo", "Leer articulo", "Leer articulo", "Abrir archivo"],
        allCard: {
          title: "Ver todos los articulos sincronizados",
          copy: "Recorre las 67 publicaciones por ano, desde Vue, despliegue y mini programas hasta los temas actuales de herramientas de IA.",
          meta: ["Insights", "2026 / 2021"],
          link: "Abrir archivo"
        }
      },
      community: {
        title: "Mi <span>comunidad y canales de contenido</span>",
        copy: "El blog es solo una superficie. GitHub, Juejin, CSDN, Bilibili, Telegram y Discord son nodos donde publico o mantengo actividad constante.",
        cards: [
          {
            title: "Grupo de Telegram",
            copy: "Ideal para conversaciones rapidas, actualizaciones y recoger feedback.",
            link: "Unirse"
          },
          {
            title: "Discord",
            copy: "Mas adecuado para colaboracion de largo plazo y conversaciones por canales.",
            link: "Entrar"
          },
          {
            title: "GitHub",
            copy: "El lugar mas claro para ver repositorios, PR, proyectos activos y prioridades tecnicas.",
            link: "Abrir perfil"
          },
          {
            title: "Juejin",
            copy: "Una de mis plataformas principales para escribir sobre agentes de IA, CLI, protocolos y experiencia de ingenieria.",
            link: "Ver articulos"
          },
          {
            title: "CSDN",
            copy: "Archivo de largo plazo que conserva muchas notas tecnicas anteriores y su acumulado de visitas.",
            link: "Abrir columna"
          },
          {
            title: "Bilibili",
            copy: "Espacio complementario para videos y actualizaciones cortas que extienden el contenido escrito.",
            link: "Abrir canal"
          }
        ]
      },
      archive: {
        title: "Entradas del <span>archivo del blog anterior</span>",
        copy: "La antigua base de conocimiento en VuePress no se elimino. La portada solo fue reconstruida para encajar mejor con mi identidad y direccion actual.",
        cards: [
          {
            title: "Biblioteca Front-end",
            copy: "Entradas antiguas sobre Axios, CSS, Canvas, JavaScript, React, Webpack, uni-app y mas.",
            link: "Abrir archivo"
          },
          {
            title: "Notas de entrevistas",
            copy: "Temas viejos sobre navegador, red, seguridad, Vue, React y ejercicios escritos a mano.",
            link: "Abrir archivo"
          },
          {
            title: "Proyectos Vue",
            copy: "Registros de Ant Design, ECharts, tiendas de libros, mini apps de NetEase y HaiFeng Shop.",
            link: "Abrir archivo"
          },
          {
            title: "Diario de crecimiento",
            copy: "Resumenes anuales y notas de progreso entre 2019 y 2021, aun con una fuerte marca de esa etapa.",
            link: "Abrir archivo"
          },
          {
            title: "Notas de lectura",
            copy: "Notas sobre JavaScript, HTTP, algoritmos, redes y libros de arquitectura.",
            link: "Abrir archivo"
          },
          {
            title: "PHP / Python",
            copy: "Articulos anteriores de back-end y rastreo web conservados como el otro lado de mi camino tecnico.",
            link: "Archivo PHP"
          }
        ]
      },
      footer: [
        "© {year} CocoonBreak. Blog personal reconstruido alrededor de herramientas de IA, comunidad y la pila Cocoon.",
        "Alojado en GitHub Pages · Archivo legado de VuePress preservado."
      ]
    },
    ja: {
      meta: {
        title: "CocoonBreak | AIツーリング、プロダクト、コミュニティ",
        description: "AIツーリング、Cocoonプロダクト群、コミュニティ、担当範囲、最新記事をまとめたCocoonBreakの個人ブログ。"
      },
      brandSubtitle: "AI Tooling · Cocoon Stack · Community",
      nav: ["概要", "プロジェクト", "記事", "コミュニティ", "アーカイブ"],
      hero: {
        eyebrow: "Cocoon Stack · OpenAI / Gemini / Claude · AWS",
        title: "<span>AIツーリング</span>、プロダクト、インフラを、実際に動く一本のチェーンとしてつなぐ。",
        lead: "Vue、uni-app、ミニプログラムから始まり、今はAIツーリング、SaaS、AWSの実装に重心があります。重要なのは、モデルがつながるかどうかではなく、モデル、CLI、ゲートウェイ、プロダクト、コミュニティが一緒に安定して回り続けるかどうかです。",
        ctas: ["GitHubを見る", "最新記事を読む", "Telegramに参加"],
        badgeLabel: "プロフィールバッジ"
      },
      focus: {
        title: "今の注力ポイント",
        caption: "単発の実装ではなく、モデル能力、CLIワークフロー、APIゲートウェイ、プロダクト画面、コミュニティ導線を一つのループにまとめること。",
        pill: "2026 Focus",
        stats: [
          "AionUiへの参加",
          "継続運用中のCocoonプロダクト",
          "現在のAI / CLI長文記事",
          "主要コミュニティ導線"
        ],
        stackTitles: [
          "マルチモデル接続とフェイルオーバー",
          "プロダクトとサイトの提供",
          "AWSと静的配信"
        ],
        stackBodies: [
          "Claude / Codex / Gemini / Kimi / Qwen / API key系統を連携させる",
          "Home、API、SMS、VPN、ブログ、コミュニティ入口を一つのブランド群として組む",
          "EC2、GitHub Pages、ゲートウェイ、リバースプロキシ、複数サイトの保守"
        ],
        stackPills: ["Routing", "Product", "Infra"]
      },
      about: {
        title: "<span>フロントエンド開発</span>からAIツーリングへ",
        copy: "初期の公開プロジェクトはフロントエンド、Vue、uni-app、ミニプログラムが中心でした。今はモデル統合、CLIエージェント、プロトコル進化、OpenAI互換ゲートウェイ、その周辺のプロダクトとインフラに重点を置いています。",
        notes: [
          "<strong>初期の土台</strong> neteaseMusic、Vuejs、hiolabs、fruitsShop などは、ミニプログラム、業務導入、長期のフロントエンド訓練を示すリポジトリです。",
          "<strong>この二年の変化</strong> 画面作りからモデルワークフローへ重心が移り、CLI、プロトコル、ゲートウェイ、ビルド、安定性、複数認証チェーンを扱うようになりました。",
          "<strong>今の立ち位置</strong> デモで止まる開発者というより、AI能力を実際のプロダクトに落とし込む側に近いです。"
        ],
        careTitle: "今気にしていること",
        careItems: [
          "<strong>モデルが安定してつながるか</strong> 単一モデルの可否より、認証、上限制御、429、フォールバックチェーン、複数CLI間の協調を重視しています。",
          "<strong>プロダクトに統一入口があるか</strong> API、SMS、VPN、コミュニティ、記事を一つのHomeでまとめる方が、ばらばらのサイトよりブランドとして強いです。",
          "<strong>記事が今のプロジェクトに効くか</strong> 最近の記事は Codex、Gemini CLI、stdio、MCP / ACP / A2A を軸にしており、単なる断片知識ではありません。"
        ]
      },
      projects: {
        title: "担当・参加している <span>主要プロジェクト</span>",
        copy: "今の技術的な重心を最もよく表している組み合わせです。高スターの参加プロジェクトと、継続保守している自分のプロダクト群が並びます。",
        cards: [
          {
            copy: "公開されている高スター参加プロジェクト。モデル接続、設定フロー、ビルドの細部、安定性修正、Codex / Gemini / Claude / ローカルagentの協調体験が主な作業領域です。",
            meta: ["18k★+", "Contributor", "AI Tooling"],
            link: "プロジェクトを見る"
          },
          {
            copy: "自分のリポジトリで特にスターの多い一つで、初期のミニプログラム製品化、操作体験の磨き込み、フロントエンド分解力を代表しています。",
            meta: ["147★", "Mini Program", "Front-end"],
            link: "プロジェクトを見る"
          },
          {
            copy: "一方は長期のフロントエンド訓練、もう一方は業務改修と二次開発を示します。今の中心ではありませんが、技術の歩みを説明する重要な部分です。",
            meta: ["46★ / 17★", "Vue", "Business Delivery"],
            link: "Vuejsを見る"
          },
          {
            copy: "現在継続して保守しているプロダクト群で、多言語ポータル、APIゲートウェイ、SMS、VPN、コミュニティ入口を一つの到達可能で運用可能なチェーンにしています。",
            meta: ["Home", "API", "SMS / VPN"],
            link: "スタックを見る"
          }
        ]
      },
      products: {
        title: "構築中の <span>Cocoonプロダクト群</span>",
        copy: "ここが現在進行形の部分です。バラバラのページではなく、同じ入口とブランドの下でまとまった製品群として見せたいと考えています。",
        cards: [
          {
            copy: "ブランド入口、プロダクトカード整理、外向けの統一表示を担う多言語ポータルです。",
            meta: ["Portal", "Multilingual"],
            link: "サイトを開く"
          },
          {
            copy: "モデル集約、統一配信、後続プロダクト接続のための OpenAI-compatible API ゲートウェイです。",
            meta: ["Gateway", "OpenAI Compatible"],
            link: "サイトを開く"
          },
          {
            copy: "決済、SMSチャネル、基本的な管理フローの接続に焦点を当てたSMSマーケティング／通知プラットフォームです。",
            meta: ["Marketing", "Notification"],
            link: "サイトを開く"
          },
          {
            copy: "グローバルノードと管理パネル向けのサービス群で、提供品質と安定稼働を重視しています。",
            meta: ["Panel", "Node Service"],
            link: "サイトを開く"
          },
          {
            copy: "マルチモデルCLIとAPIチャネルを統合し、Claude、Codex、Gemini、Kimi、Qwen、API key のフォールバックをつなぐゲートウェイです。",
            meta: ["Gateway", "Fallback Chain"],
            link: "サイトを開く"
          },
          {
            copy: "Codex、Gemini CLI、stdio、MCP / ACP / A2A を巡る記事と知識整理。使うだけから原理を理解する段階へ引き上げます。",
            meta: ["Codex", "MCP / ACP / A2A"],
            link: "記事を見る"
          }
        ]
      },
      writing: {
        title: "ブログに同期された <span>最新記事</span>",
        copy: "掘金の記事はすでに67本がブログ内に入りました。ここでは最新の6本を先に見せ、全体のアーカイブは Insights にまとめています。",
        linkLabels: ["続きを読む", "続きを読む", "続きを読む", "続きを読む", "続きを読む", "続きを読む", "アーカイブへ"],
        allCard: {
          title: "同期済み記事をすべて見る",
          copy: "Vue、デプロイ、ミニプログラムの旧記事から、現在のAIツーリング記事まで、67本を年別に辿れます。",
          meta: ["Insights", "2026 / 2021"],
          link: "アーカイブへ"
        }
      },
      community: {
        title: "私の <span>コミュニティと発信拠点</span>",
        copy: "ブログだけではありません。GitHub、掘金、CSDN、Bilibili、Telegram、Discord は、継続的に発信または運営している拠点です。",
        cards: [
          {
            title: "Telegram グループ",
            copy: "素早い相談、進捗共有、フィードバック収集に向いています。",
            link: "参加する"
          },
          {
            title: "Discord",
            copy: "長期的なコミュニティ運営やチャンネル単位の議論に向いています。",
            link: "参加する"
          },
          {
            title: "GitHub",
            copy: "リポジトリ、PR、現在の関心事を最も直接的に確認できる場所です。",
            link: "プロフィールを見る"
          },
          {
            title: "掘金",
            copy: "AI Agent、CLI、プロトコル、実務経験を出している主要プラットフォームの一つです。",
            link: "記事を見る"
          },
          {
            title: "CSDN",
            copy: "初期の技術ノートや長期蓄積が残っているアーカイブ的な発信基盤です。",
            link: "コラムを見る"
          },
          {
            title: "Bilibili",
            copy: "動画と近況共有の補助的な入口で、文章系プラットフォームを補完します。",
            link: "チャンネルを見る"
          }
        ]
      },
      archive: {
        title: "旧ブログの <span>アーカイブ入口</span>",
        copy: "以前の VuePress ナレッジベースは削除していません。トップだけを、今の自分の立場とプロジェクト方向に合う入口へ作り直しました。",
        cards: [
          {
            title: "フロントエンド知識庫",
            copy: "Axios、CSS、Canvas、JavaScript、React、Webpack、uni-app などの旧コンテンツ入口です。",
            link: "アーカイブへ"
          },
          {
            title: "面接ノート",
            copy: "ブラウザ、ネットワーク、セキュリティ、Vue、React、手書き問題などの旧トピックです。",
            link: "アーカイブへ"
          },
          {
            title: "Vue 実戦",
            copy: "Ant Design、ECharts、書店、网易云ミニアプリ、海風小店などのプロジェクト記録です。",
            link: "アーカイブへ"
          },
          {
            title: "成長記録",
            copy: "2019年から2021年までの年次総括と成長日記で、その時期の空気感が強く残っています。",
            link: "アーカイブへ"
          },
          {
            title: "読書ノート",
            copy: "JavaScript、HTTP、アルゴリズム、ネットワーク、アーキテクチャ本の読書記録です。",
            link: "アーカイブへ"
          },
          {
            title: "PHP / Python",
            copy: "初期のバックエンドとクローラー関連の実践記事を、技術経路のもう一面として残しています。",
            link: "PHP アーカイブ"
          }
        ]
      },
      footer: [
        "© {year} CocoonBreak. AIツーリング、コミュニティ、Cocoonスタックを軸に再構成した個人ブログ。",
        "GitHub Pages で配信 · VuePress の旧アーカイブは維持。"
      ]
    },
    ar: {
      meta: {
        title: "CocoonBreak | ادوات الذكاء الاصطناعي والمنتجات والمجتمع",
        description: "مدونة CocoonBreak الشخصية حول ادوات الذكاء الاصطناعي ومنظومة Cocoon والمجتمع ونطاق التنفيذ والمقالات الحديثة."
      },
      brandSubtitle: "ادوات الذكاء الاصطناعي · منظومة Cocoon · المجتمع",
      nav: ["نبذة", "المشاريع", "المقالات", "المجتمع", "الارشيف"],
      hero: {
        eyebrow: "Cocoon Stack · OpenAI / Gemini / Claude · AWS",
        title: "اوصل <span>ادوات الذكاء الاصطناعي</span> والمنتجات والبنية التحتية في سلسلة واحدة تعمل فعلا.",
        lead: "بدأت مع Vue و uni-app والبرامج المصغرة، ثم انتقلت الى ادوات الذكاء الاصطناعي و SaaS والبنية على AWS. ما يهمني الآن ليس فقط هل يمكن وصل نموذج ما، بل هل تستطيع النماذج وواجهات CLI والبوابات والمنتجات والمجتمع ان تعمل معا بشكل ثابت.",
        ctas: ["عرض GitHub", "قراءة احدث المقالات", "الانضمام الى Telegram"],
        badgeLabel: "شارات الملف الشخصي"
      },
      focus: {
        title: "محور عملي الحالي",
        caption: "ليس كتابة كود معزول، بل بناء حلقة كاملة تربط قدرات النماذج وتدفق CLI وبوابات API والواجهات والروابط المجتمعية.",
        pill: "تركيز 2026",
        stats: [
          "مساهمة في AionUi",
          "منتجات Cocoon قيد الصيانة",
          "مقالات طويلة عن AI / CLI حاليا",
          "قنوات المجتمع الاساسية"
        ],
        stackTitles: [
          "توصيل متعدد النماذج مع failover",
          "تسليم المنتجات والمواقع",
          "AWS والنشر الثابت"
        ],
        stackBodies: [
          "تنسيق قنوات Claude و Codex و Gemini و Kimi و Qwen و API key معا",
          "تجميع Home و API و SMS و VPN والمدونة والمجتمع تحت علامة واحدة",
          "EC2 و GitHub Pages والبوابات والوكيل العكسي وصيانة عدة مواقع"
        ],
        stackPills: ["Routing", "Product", "Infra"]
      },
      about: {
        title: "من <span>هندسة الواجهة الامامية</span> الى ادوات الذكاء الاصطناعي",
        copy: "كانت مشاريعي العامة المبكرة تدور حول الواجهة الامامية و Vue و uni-app والبرامج المصغرة. اما الآن فتركيزي على دمج النماذج ووكلاء CLI وتطور البروتوكولات والبوابات المتوافقة مع OpenAI والمنتجات والبنية المحيطة بها.",
        notes: [
          "<strong>الاساس المبكر</strong> مستودعات مثل neteaseMusic و Vuejs و hiolabs و fruitsShop تمثل عملا طويلا في البرامج المصغرة والتسليم التجاري ومهارات الواجهة الامامية.",
          "<strong>التحول خلال العامين الاخيرين</strong> انتقل العمل من بناء الصفحات الى بناء تدفقات عمل للنماذج: CLI والبروتوكولات والبوابات والبناء والاستقرار وسلاسل المصادقة متعددة المنصات.",
          "<strong>الدور الحالي</strong> اقرب الى شخص يدمج قدرات الذكاء الاصطناعي داخل منتجات حقيقية، لا مجرد مطور يتوقف عند العروض التجريبية."
        ],
        careTitle: "ما الذي اهتم به الآن",
        careItems: [
          "<strong>هل الاتصال بالنماذج مستقر</strong> اهتم بالمصادقة والحصص وحدود 429 وسلاسل fallback والتعاون بين عدة CLI، وليس فقط بتوفر نموذج منفرد.",
          "<strong>هل للمنتجات مدخل موحد</strong> بوابة Home التي تجمع API و SMS و VPN والمجتمع والمحتوى اقوى كعلامة من مواقع متناثرة.",
          "<strong>هل تخدم المقالات المشاريع الحالية</strong> المقالات الاخيرة تتمحور حول Codex و Gemini CLI و stdio و MCP / ACP / A2A بدلا من ملاحظات معرفية متفرقة."
        ]
      },
      projects: {
        title: "اهم <span>المشاريع</span> التي اقودها او اشارك فيها",
        copy: "هذه المجموعة تشرح مركز ثقلي التقني الحالي بشكل افضل: مشاريع عامة عالية النجوم مع منظومة المنتجات التي احافظ عليها باستمرار.",
        cards: [
          {
            copy: "مشروع عام ذو نجوم كثيرة اشارك فيه. يتركز العمل على دمج النماذج وتدفقات الاعداد وتفاصيل البناء واصلاحات الاستقرار وتجربة التعاون بين Codex و Gemini و Claude والوكلاء المحليين.",
            meta: ["18k★+", "Contributor", "AI Tooling"],
            link: "عرض المشروع"
          },
          {
            copy: "احد اعلى المستودعات من حيث النجوم في حسابي، ويمثل تفكيرا مبكرا في منتجات البرامج المصغرة وصقل التجربة وقدرة تفكيك الواجهات.",
            meta: ["147★", "Mini Program", "Front-end"],
            link: "عرض المشروع"
          },
          {
            copy: "احدهما يعكس تدريبا طويلا في الواجهة الامامية، والاخر يعكس تطويرا تجاريا وتخصيصا ثانويا. لم يعودا محور اليوم، لكنهما ما زالا يشرحان المسار التقني.",
            meta: ["46★ / 17★", "Vue", "Business Delivery"],
            link: "عرض Vuejs"
          },
          {
            copy: "منظومة المنتجات التي احافظ عليها الآن، وتربط البوابات متعددة اللغات وبوابات API وادوات SMS وخدمات VPN ومداخل المجتمع في سلسلة واحدة قابلة للوصول والتشغيل والتوسع.",
            meta: ["Home", "API", "SMS / VPN"],
            link: "عرض المنظومة"
          }
        ]
      },
      products: {
        title: "منظومة <span>منتجات Cocoon</span> قيد البناء",
        copy: "هذا هو العمل الجاري الآن. اريد لهذه المنتجات ان تظهر كمجموعة منسقة تحت مدخل واحد وعلامة واحدة، لا كصفحات منفصلة.",
        cards: [
          {
            copy: "بوابة منتجات متعددة اللغات تتولى مدخل العلامة وتنظيم بطاقات المنتجات والعرض الخارجي الموحد.",
            meta: ["Portal", "Multilingual"],
            link: "زيارة الموقع"
          },
          {
            copy: "بوابة API متوافقة مع OpenAI لتجميع النماذج والتوزيع الموحد وربط القدرات المستقبلية للمنتجات.",
            meta: ["Gateway", "OpenAI Compatible"],
            link: "زيارة الموقع"
          },
          {
            copy: "منصة تسويق واشعارات عبر الرسائل القصيرة مع تركيز على الدفع وقنوات الرسائل وتدفق لوحة الادارة.",
            meta: ["Marketing", "Notification"],
            link: "زيارة الموقع"
          },
          {
            copy: "مجموعة خدمات للعقد العالمية ولوحة الادارة مع تركيز على جودة التسليم واستقرار التوفر.",
            meta: ["Panel", "Node Service"],
            link: "زيارة الموقع"
          },
          {
            copy: "بوابة موحدة لقنوات CLI و API متعددة النماذج لربط Claude و Codex و Gemini و Kimi و Qwen ومسارات API key الاحتياطية.",
            meta: ["Gateway", "Fallback Chain"],
            link: "زيارة الموقع"
          },
          {
            copy: "ملاحظات حول Codex و Gemini CLI و stdio و MCP / ACP / A2A تساعد على الانتقال من مجرد الاستخدام الى فهم البنية.",
            meta: ["Codex", "MCP / ACP / A2A"],
            link: "قراءة الملاحظات"
          }
        ]
      },
      writing: {
        title: "احدث <span>المقالات</span> المتزامنة الى المدونة",
        copy: "مقالاتك في Juejin اصبحت 67 مقالا داخل المدونة. هنا اعرض احدث 6 مقالات متزامنة، بينما يوجد الارشيف الكامل في صفحة Insights.",
        linkLabels: ["قراءة المقال", "قراءة المقال", "قراءة المقال", "قراءة المقال", "قراءة المقال", "قراءة المقال", "فتح الارشيف"],
        allCard: {
          title: "عرض كل المقالات المتزامنة",
          copy: "تصفح 67 مقالا حسب السنة، من مقالات Vue والنشر والبرامج المصغرة القديمة الى موضوعات ادوات الذكاء الاصطناعي الحالية.",
          meta: ["Insights", "2026 / 2021"],
          link: "فتح الارشيف"
        }
      },
      community: {
        title: "<span>المجتمع</span> وقنوات المحتوى الخاصة بي",
        copy: "المدونة مجرد واجهة واحدة. GitHub و Juejin و CSDN و Bilibili و Telegram و Discord كلها نقاط انشر او ادير فيها عملا مستمرا.",
        cards: [
          {
            title: "مجموعة Telegram",
            copy: "مناسبة للحوار السريع ومشاركة التحديثات وتجميع الملاحظات.",
            link: "انضم"
          },
          {
            title: "Discord",
            copy: "انسب للتعاون طويل المدى والنقاشات المنظمة حسب القنوات.",
            link: "انضم"
          },
          {
            title: "GitHub",
            copy: "اوضح مكان لرؤية المستودعات وطلبات الدمج والعمل الحالي وما يشغلني تقنيا.",
            link: "عرض الصفحة"
          },
          {
            title: "Juejin",
            copy: "احدى المنصات الرئيسية التي اكتب فيها عن وكلاء الذكاء الاصطناعي وادوات CLI والبروتوكولات والخبرة الهندسية.",
            link: "عرض المقالات"
          },
          {
            title: "CSDN",
            copy: "ارشيف طويل الامد يحتفظ بالكثير من الملاحظات التقنية القديمة وتراكم الزيارات.",
            link: "عرض العمود"
          },
          {
            title: "Bilibili",
            copy: "مساحة مكملة للفيديو والتحديثات القصيرة تدعم المنصات النصية.",
            link: "عرض القناة"
          }
        ]
      },
      archive: {
        title: "مداخل <span>الارشيف القديم</span> للمدونة",
        copy: "قاعدة المعرفة السابقة المبنية بـ VuePress لم تحذف. فقط اعيد بناء الصفحة الرئيسية كمدخل يناسب هويتي الحالية واتجاه مشاريعي.",
        cards: [
          {
            title: "مكتبة الواجهة الامامية",
            copy: "محتوى قديم حول Axios و CSS و Canvas و JavaScript و React و Webpack و uni-app وغير ذلك.",
            link: "فتح الارشيف"
          },
          {
            title: "ملاحظات المقابلات",
            copy: "موضوعات قديمة حول المتصفح والشبكات والامن و Vue و React واسئلة الكتابة اليدوية.",
            link: "فتح الارشيف"
          },
          {
            title: "مشاريع Vue",
            copy: "سجلات مشاريع تشمل Ant Design و ECharts ومتاجر الكتب وتطبيقات NetEase المصغرة و HaiFeng Shop.",
            link: "فتح الارشيف"
          },
          {
            title: "سجل النمو",
            copy: "ملخصات سنوية ومذكرات تقدم من 2019 الى 2021 وما زالت تحمل روح تلك المرحلة.",
            link: "فتح الارشيف"
          },
          {
            title: "ملاحظات القراءة",
            copy: "ملاحظات حول JavaScript و HTTP والخوارزميات والشبكات وكتب المعمارية.",
            link: "فتح الارشيف"
          },
          {
            title: "PHP / Python",
            copy: "مقالات قديمة عن الخلفية والزحف الشبكي محفوظة كوجه آخر من مساري التقني.",
            link: "ارشيف PHP"
          }
        ]
      },
      footer: [
        "© {year} CocoonBreak. مدونة شخصية اعيد بناؤها حول ادوات الذكاء الاصطناعي والمجتمع ومنظومة Cocoon.",
        "مستضافة على GitHub Pages · مع الحفاظ على ارشيف VuePress القديم."
      ]
    }
  };

  var insightsTranslations = {
    en: {
      meta: {
        title: "Insights | CocoonBreak",
        description: "67 posts synced from Juejin into the blog, covering AI tooling, protocols, Vue, deployment, and engineering practice."
      },
      brandSubtitle: "Insights",
      nav: ["Home", "Latest Sync", "Full Archive", "Juejin"],
      hero: {
        eyebrow: "Juejin Sync · Blog Archive · Long-term Asset",
        title: "Juejin writing has been <span>fully synced</span> into the blog.",
        lead: "This part is no longer limited to four long-form essays. It now includes the full set of 67 posts you published on Juejin. From recent Codex, Gemini CLI, and MCP / ACP / A2A writing to older Vue, deployment, engineering, and mini-program posts, everything is now available as static pages inside the site.",
        ctas: ["See latest syncs", "See full archive", "Open Juejin"],
        panelTitle: "Sync overview",
        panelCaption: "Once synced, the content stays reachable from the blog, and it becomes much easier to build homepage entrances, topic collections, and later SEO around it.",
        stats: ["posts synced", "years covered", "latest publish", "long-form essays"],
        stackTitles: ["Recent AI writing", "Historical engineering writing", "Repeatable pipeline"],
        stackBodies: [
          "The recent Codex, Gemini CLI, and MCP / ACP / A2A series is already fully inside the site.",
          "Older posts were preserved as well, so they can keep being searched, linked, and cited.",
          "Pull Markdown first, then generate static pages. Future updates do not require moving articles one by one."
        ],
        stackPills: ["AI", "Archive", "Pipeline"]
      },
      latest: {
        title: "Most recent <span>posts</span> synced into the blog",
        copy: "Start with the newest 8 posts. If this is your first time here, this is the best block to begin with.",
        linkLabel: "Read article"
      },
      features: {
        title: "Curated <span>long-form essays</span> inside the blog",
        copy: "These four are more than mirrored content. They are rewritten and structured to read better on the personal site.",
        linkLabel: "Read article"
      },
      archive: {
        title: "Full synced <span>archive</span>",
        copy: "Grouped by year. When you keep syncing incrementally from Juejin, this section updates together.",
        countUnit: "posts"
      },
      footer: [
        "© {year} CocoonBreak. Personal blog rebuilt around AI tooling, community, and the Cocoon stack.",
        "Hosted on GitHub Pages · Legacy VuePress archive preserved."
      ]
    },
    es: {
      meta: {
        title: "Insights | CocoonBreak",
        description: "67 articulos sincronizados desde Juejin al blog, cubriendo herramientas de IA, protocolos, Vue, despliegue y practica de ingenieria."
      },
      brandSubtitle: "Insights",
      nav: ["Inicio", "Ultima sincronizacion", "Archivo completo", "Juejin"],
      hero: {
        eyebrow: "Juejin Sync · Blog Archive · Long-term Asset",
        title: "Los articulos de Juejin ya estan <span>sincronizados por completo</span> al blog.",
        lead: "Esta seccion ya no tiene solo cuatro articulos largos. Ahora integra las 67 publicaciones que escribiste en Juejin. Desde las recientes sobre Codex, Gemini CLI y MCP / ACP / A2A hasta textos mas antiguos sobre Vue, despliegue, ingenieria y mini programas, todo ya esta disponible como paginas estaticas dentro del sitio.",
        ctas: ["Ver lo mas reciente", "Ver todo el archivo", "Abrir Juejin"],
        panelTitle: "Resumen de la sincronizacion",
        panelCaption: "Una vez sincronizado, el contenido queda accesible desde el blog y se vuelve mucho mas facil construir entradas de portada, agrupaciones tematicas y SEO posterior.",
        stats: ["articulos sincronizados", "anos cubiertos", "ultima publicacion", "articulos largos"],
        stackTitles: ["Articulos recientes de IA", "Articulos historicos de ingenieria", "Pipeline repetible"],
        stackBodies: [
          "La serie reciente sobre Codex, Gemini CLI y MCP / ACP / A2A ya esta completa dentro del sitio.",
          "Los articulos antiguos tambien quedaron preservados para poder seguir buscandose, citarse y enlazarse.",
          "Primero se trae el Markdown y despues se generan paginas estaticas. Las siguientes actualizaciones no requieren mover textos uno por uno."
        ],
        stackPills: ["AI", "Archive", "Pipeline"]
      },
      latest: {
        title: "Los <span>articulos</span> sincronizados mas recientes",
        copy: "Empieza por las 8 publicaciones mas nuevas. Si es tu primera visita, este es el mejor bloque para comenzar.",
        linkLabel: "Leer articulo"
      },
      features: {
        title: "<span>Articulos largos</span> curados dentro del blog",
        copy: "Estas cuatro piezas no son simple espejo. Estan reescritas y ordenadas para leerse mejor en el sitio personal.",
        linkLabel: "Leer articulo"
      },
      archive: {
        title: "Archivo <span>completo</span> sincronizado",
        copy: "Agrupado por ano. Cuando sigas sincronizando contenido incremental desde Juejin, esta seccion tambien se actualizara.",
        countUnit: "articulos"
      },
      footer: [
        "© {year} CocoonBreak. Blog personal reconstruido alrededor de herramientas de IA, comunidad y la pila Cocoon.",
        "Alojado en GitHub Pages · Archivo legado de VuePress preservado."
      ]
    },
    ja: {
      meta: {
        title: "Insights | CocoonBreak",
        description: "掘金から同期した67本の記事をまとめたアーカイブ。AIツーリング、プロトコル、Vue、デプロイ、実務知見を含みます。"
      },
      brandSubtitle: "Insights",
      nav: ["ホーム", "最新同期", "全アーカイブ", "掘金"],
      hero: {
        eyebrow: "Juejin Sync · Blog Archive · Long-term Asset",
        title: "掘金の記事群は <span>まとめて同期</span> され、ブログ内で読めるようになりました。",
        lead: "この場所は、4本の特集記事だけではなくなりました。掘金で公開してきた67本すべてが、サイト内の静的ページとして読めます。最近の Codex、Gemini CLI、MCP / ACP / A2A から、過去の Vue、デプロイ、実務、ミニプログラム記事までまとまっています。",
        ctas: ["最新同期を見る", "全アーカイブを見る", "掘金を開く"],
        panelTitle: "同期の概要",
        panelCaption: "同期後のコンテンツはブログ側で長期的に参照でき、トップ導線、特集整理、将来のSEOにも使いやすくなります。",
        stats: ["同期済み記事", "対象年", "最新公開日", "特集長文"],
        stackTitles: ["最新のAI記事", "過去の実務記事", "再実行可能なパイプライン"],
        stackBodies: [
          "最近の Codex、Gemini CLI、MCP / ACP / A2A 系記事はすでに全てサイト内へ入っています。",
          "古い記事も保持されているので、今後も検索・参照・引用できます。",
          "まず Markdown を取得し、その後静的ページを生成するので、次回以降の更新は手動移植不要です。"
        ],
        stackPills: ["AI", "Archive", "Pipeline"]
      },
      latest: {
        title: "最近同期された <span>記事</span>",
        copy: "まずは最新の8本から見るのがおすすめです。初めてここに来たなら、このブロックから始めるのが自然です。",
        linkLabel: "続きを読む"
      },
      features: {
        title: "ブログ内で整理した <span>特集長文</span>",
        copy: "この4本は単純な転載ではなく、個人サイト向けに読みやすく再構成した版です。",
        linkLabel: "続きを読む"
      },
      archive: {
        title: "同期済み記事の <span>全アーカイブ</span>",
        copy: "年ごとに整理しています。今後も掘金から増分同期を続けると、ここも一緒に更新されます。",
        countUnit: "本"
      },
      footer: [
        "© {year} CocoonBreak. AIツーリング、コミュニティ、Cocoonスタックを軸に再構成した個人ブログ。",
        "GitHub Pages で配信 · VuePress の旧アーカイブは維持。"
      ]
    },
    ar: {
      meta: {
        title: "Insights | CocoonBreak",
        description: "67 مقالا تمت مزامنتها من Juejin الى المدونة، وتشمل ادوات الذكاء الاصطناعي والبروتوكولات و Vue والنشر والممارسة الهندسية."
      },
      brandSubtitle: "Insights",
      nav: ["الرئيسية", "احدث مزامنة", "كل الارشيف", "Juejin"],
      hero: {
        eyebrow: "Juejin Sync · Blog Archive · Long-term Asset",
        title: "تمت <span>مزامنة</span> مقالات Juejin بالكامل داخل المدونة.",
        lead: "هذا القسم لم يعد يضم فقط اربع مقالات طويلة. بل اصبح يحتوي على كامل مقالاتك الـ67 المنشورة على Juejin. من المقالات الحديثة عن Codex و Gemini CLI و MCP / ACP / A2A الى المقالات الاقدم عن Vue والنشر والممارسة الهندسية والبرامج المصغرة، كلها متاحة الآن كصفحات ثابتة داخل الموقع.",
        ctas: ["عرض الاحدث", "عرض كل الارشيف", "فتح Juejin"],
        panelTitle: "نظرة عامة على المزامنة",
        panelCaption: "بعد المزامنة يصبح المحتوى متاحا دائما من داخل المدونة، كما يسهل بناء مداخل للواجهة الرئيسية وتجميعات موضوعية وتحسين SEO لاحقا.",
        stats: ["مقالا متزامنا", "السنوات المغطاة", "احدث نشر", "مقالات طويلة"],
        stackTitles: ["احدث مقالات الذكاء الاصطناعي", "المقالات الهندسية القديمة", "خط مزامنة قابل للتكرار"],
        stackBodies: [
          "السلسلة الحديثة عن Codex و Gemini CLI و MCP / ACP / A2A اصبحت كلها داخل الموقع.",
          "كما تم الحفاظ على المقالات القديمة بحيث تبقى قابلة للبحث والربط والاقتباس.",
          "يتم جلب Markdown اولا ثم توليد الصفحات الثابتة، لذلك لا تحتاج التحديثات القادمة الى نقل يدوي لكل مقال."
        ],
        stackPills: ["AI", "Archive", "Pipeline"]
      },
      latest: {
        title: "احدث <span>المقالات</span> المتزامنة الى المدونة",
        copy: "ابدأ باحدث 8 مقالات. اذا كانت هذه اول زيارة لك، فهذا هو القسم الافضل للانطلاق.",
        linkLabel: "قراءة المقال"
      },
      features: {
        title: "<span>مقالات طويلة</span> منسقة داخل المدونة",
        copy: "هذه القطع الاربع ليست نقلا بسيطا، بل اعيدت صياغتها وتنظيمها لتناسب القراءة داخل الموقع الشخصي.",
        linkLabel: "قراءة المقال"
      },
      archive: {
        title: "الارشيف <span>الكامل</span> المتزامن",
        copy: "مرتب حسب السنة. وعندما تستمر في المزامنة التزايدية من Juejin سيتحدث هذا القسم ايضا.",
        countUnit: "مقالا"
      },
      footer: [
        "© {year} CocoonBreak. مدونة شخصية اعيد بناؤها حول ادوات الذكاء الاصطناعي والمجتمع ومنظومة Cocoon.",
        "مستضافة على GitHub Pages · مع الحفاظ على ارشيف VuePress القديم."
      ]
    }
  };

  var articleTranslations = {
    en: {
      shared: {
        nav: ["← Home", "Essay list", "Original on Juejin"]
      },
      pages: {
        "/insights/openai-codex-architecture/": {
          meta: {
            title: "OpenAI Codex Deep Dive | CocoonBreak",
            description: "Understanding OpenAI Codex from the terminal workflow angle: model, execution, feedback loop, and product implications."
          },
          heroTitle: "A deep dive into OpenAI <span>Codex</span>: why the next generation of coding agents feels more like a terminal teammate",
          intro: "This essay does not treat Codex as a stronger chat window. It puts Codex back into a real workflow and asks why it moves closer to the terminal, the repository, command execution, error feedback, and patch results, and why that changes how we understand AI coding assistants.",
          note: "This version is based on my recent Juejin article about Codex, but rewritten to fit continuous reading on the personal blog."
        },
        "/insights/gemini-cli-source/": {
          meta: {
            title: "Gemini CLI Source Reading | CocoonBreak",
            description: "Breaking down Gemini CLI from configuration, tool calls, command execution, and the feedback loop."
          },
          heroTitle: "<span>Gemini CLI</span> source reading: is it just a command-line tool, or already a local agent framework?",
          intro: "When people say Gemini CLI is convenient, they are often describing the result. If you take it apart, what you find is a very standard agent loop: load configuration, assemble context, dispatch tools, execute commands, feed results back, and let the model decide what happens next.",
          note: "This essay is rewritten from my recent Juejin post, with a stronger engineering angle for the blog."
        },
        "/insights/stdio-transport/": {
          meta: {
            title: "Why Everyone Uses stdio | CocoonBreak",
            description: "Why Claude, Gemini, and Codex all lean toward stdio from the angle of local execution, permission boundaries, and feedback loops."
          },
          heroTitle: "Why do <span>Claude / Gemini / Codex</span> all keep leaning on stdio?",
          intro: "If you have been working with AI CLIs recently, one pattern keeps repeating: many tools and model agents still prefer stdio for communication. It looks simple, but that simplicity is exactly what makes it such a strong first-class transport for local agents.",
          note: "This version expands my recent Juejin post with more perspective from engineering delivery and toolchain design."
        },
        "/insights/agent-protocols/": {
          meta: {
            title: "From MCP to ACP to A2A | CocoonBreak",
            description: "Placing MCP, ACP, and A2A on the same map to separate tool protocols, client protocols, and multi-agent collaboration."
          },
          heroTitle: "The evolution of AI agent protocols: from <span>MCP</span> to ACP, then to A2A",
          intro: "More and more AI agent protocols are appearing, and they are often discussed as if they were competing at the same layer. The useful question is not which one is more advanced, but which collaboration problem each protocol is actually trying to solve.",
          note: "This blog version merges and restructures my recent Juejin writing about MCP, ACP, and A2A so their boundaries and relationships become easier to read in one place."
        }
      }
    },
    es: {
      shared: {
        nav: ["← Inicio", "Lista de ensayos", "Original en Juejin"]
      },
      pages: {
        "/insights/openai-codex-architecture/": {
          meta: {
            title: "Analisis de OpenAI Codex | CocoonBreak",
            description: "Entender OpenAI Codex desde el flujo de trabajo en terminal: modelo, ejecucion, bucle de feedback e implicaciones de producto."
          },
          heroTitle: "Analisis profundo de OpenAI <span>Codex</span>: por que la nueva generacion de agentes de codigo se parece cada vez mas a un companero dentro de la terminal",
          intro: "Este texto no trata a Codex como una simple ventana de chat mas potente. Lo devuelve al flujo de trabajo real para observar por que se acerca al terminal, al repositorio, a la ejecucion de comandos, al feedback de errores y a los resultados de los parches.",
          note: "Esta version parte de mi articulo reciente en Juejin sobre Codex, pero reescrito para una lectura continua dentro del blog personal."
        },
        "/insights/gemini-cli-source/": {
          meta: {
            title: "Lectura del codigo de Gemini CLI | CocoonBreak",
            description: "Analizando Gemini CLI desde configuracion, llamadas de herramientas, ejecucion de comandos y bucles de feedback."
          },
          heroTitle: "Lectura profunda del codigo de <span>Gemini CLI</span>: herramienta de linea de comandos o ya un framework local de agentes",
          intro: "Cuando decimos que Gemini CLI es muy util, normalmente describimos un resultado. Si lo desmontas, descubres un bucle de agente bastante claro: cargar configuracion, ensamblar contexto, despachar herramientas, ejecutar comandos y devolver resultados al modelo.",
          note: "Esta pieza reescribe mi articulo reciente de Juejin con una perspectiva mas de ingenieria para el blog."
        },
        "/insights/stdio-transport/": {
          meta: {
            title: "Por que todos usan stdio | CocoonBreak",
            description: "Por que Claude, Gemini y Codex prefieren stdio desde la ejecucion local, los limites de permisos y el feedback."
          },
          heroTitle: "Por que <span>Claude / Gemini / Codex</span> siguen prefiriendo stdio?",
          intro: "Si has estado trabajando con distintos CLI de IA, hay un patron que se repite: muchas herramientas y agentes siguen usando stdio para comunicarse. Parece simple, pero precisamente esa simplicidad lo vuelve una opcion muy fuerte para agentes locales.",
          note: "Esta version amplia mi articulo reciente de Juejin con mas perspectiva sobre entrega de ingenieria y diseno de toolchains."
        },
        "/insights/agent-protocols/": {
          meta: {
            title: "De MCP a ACP y A2A | CocoonBreak",
            description: "Colocando MCP, ACP y A2A en un mismo mapa para separar protocolos de herramientas, de cliente y de colaboracion entre agentes."
          },
          heroTitle: "La evolucion de los protocolos de agentes de IA: de <span>MCP</span> a ACP y luego A2A",
          intro: "Cada vez aparecen mas protocolos relacionados con agentes de IA y muchas veces se discuten como si compitieran en el mismo nivel. La pregunta util no es cual es mas avanzado, sino que problema de colaboracion resuelve cada uno.",
          note: "Esta version del blog fusiona y reestructura mis articulos recientes de Juejin sobre MCP, ACP y A2A para que sus limites y relaciones queden claros en una sola lectura."
        }
      }
    },
    ja: {
      shared: {
        nav: ["← ホーム", "特集一覧", "掘金の原文"]
      },
      pages: {
        "/insights/openai-codex-architecture/": {
          meta: {
            title: "OpenAI Codex 深掘り | CocoonBreak",
            description: "ターミナルワークフローの視点から OpenAI Codex を理解する。モデル、実行、フィードバックループ、プロダクトへの含意。"
          },
          heroTitle: "OpenAI <span>Codex</span> を深掘りする: 次世代のコーディングエージェントがなぜ端末の相棒に近づいているのか",
          intro: "この文章は Codex を強いチャット窓として扱いません。実際のワークフローに戻して、なぜターミナル、リポジトリ、コマンド実行、エラーフィードバック、パッチ結果に近づくのか、その意味を見ます。",
          note: "最近の掘金記事をベースにしつつ、個人ブログで連続して読める形に再構成した版です。"
        },
        "/insights/gemini-cli-source/": {
          meta: {
            title: "Gemini CLI ソース読解 | CocoonBreak",
            description: "設定、ツール呼び出し、コマンド実行、フィードバックループから Gemini CLI を読み解く。"
          },
          heroTitle: "<span>Gemini CLI</span> ソース読解: これは単なるコマンドラインツールなのか、それともすでにローカルAgentフレームワークなのか",
          intro: "Gemini CLI が便利だと言うとき、多くの場合は結果を説明しています。分解してみると、設定の読み込み、文脈の組み立て、ツール呼び出し、コマンド実行、結果の再投入という、典型的な Agent ループが見えてきます。",
          note: "掘金で公開した最近の記事を、ブログ向けによりエンジニアリング視点で書き直したものです。"
        },
        "/insights/stdio-transport/": {
          meta: {
            title: "なぜ皆 stdio を使うのか | CocoonBreak",
            description: "Claude、Gemini、Codex が stdio を好む理由を、ローカル実行、権限境界、フィードバックループから整理する。"
          },
          heroTitle: "なぜ <span>Claude / Gemini / Codex</span> は stdio を好むのか",
          intro: "最近いろいろな AI CLI を触っていると、同じ傾向が何度も出てきます。多くのツールやエージェントは通信に stdio を使いたがります。素朴に見えますが、その素朴さこそがローカル Agent に向いている理由です。",
          note: "最近の掘金記事をベースに、実装現場とツールチェーン設計の観点を補った版です。"
        },
        "/insights/agent-protocols/": {
          meta: {
            title: "MCP から ACP、そして A2A へ | CocoonBreak",
            description: "MCP、ACP、A2A を同じ地図の上に置き、ツール用プロトコル、クライアント用プロトコル、複数Agent協調を切り分ける。"
          },
          heroTitle: "AI Agent プロトコルの進化: <span>MCP</span> から ACP、そして A2A へ",
          intro: "AI Agent 関連プロトコルは増え続けており、同じ層で競合しているように語られがちです。本当に重要なのは、どれが優れているかではなく、それぞれがどの協調問題を解いているかです。",
          note: "掘金で書いた MCP、ACP、A2A 関連の記事を統合し、境界と関係が一度で追えるように再構成したブログ版です。"
        }
      }
    },
    ar: {
      shared: {
        nav: ["← الرئيسية", "قائمة المقالات", "الاصل على Juejin"]
      },
      pages: {
        "/insights/openai-codex-architecture/": {
          meta: {
            title: "تحليل OpenAI Codex | CocoonBreak",
            description: "فهم OpenAI Codex من زاوية تدفق العمل في الطرفية: النموذج والتنفيذ وحلقة التغذية الراجعة وابعاد المنتج."
          },
          heroTitle: "تحليل معمق لـ OpenAI <span>Codex</span>: لماذا يبدو الجيل الجديد من وكلاء البرمجة اقرب الى زميل داخل الطرفية",
          intro: "هذه المقالة لا تتعامل مع Codex كنافذة دردشة اقوى، بل تعيده الى سير العمل الحقيقي لفهم سبب اقترابه من الطرفية والمستودع وتنفيذ الاوامر وتعليقات الاخطاء ونتائج التصحيحات.",
          note: "هذه النسخة مبنية على مقالتي الحديثة في Juejin عن Codex، ولكن اعيدت صياغتها لتناسب القراءة المتصلة داخل المدونة الشخصية."
        },
        "/insights/gemini-cli-source/": {
          meta: {
            title: "قراءة مصدر Gemini CLI | CocoonBreak",
            description: "تفكيك Gemini CLI من زاوية الاعداد واستدعاء الادوات وتنفيذ الاوامر وحلقة التغذية الراجعة."
          },
          heroTitle: "قراءة معمقة لمصدر <span>Gemini CLI</span>: هل هو مجرد اداة سطر اوامر ام اطار محلي للوكلاء بالفعل",
          intro: "عندما نقول ان Gemini CLI مفيد جدا فنحن نصف النتيجة غالبا. لكن عند تفكيكه يظهر بوضوح انه ينظم حلقة Agent قياسية: تحميل الاعداد وتجميع السياق واستدعاء الادوات وتنفيذ الاوامر ثم اعادة النتائج الى النموذج.",
          note: "هذه المقالة تعيد كتابة مقالتي الحديثة في Juejin من زاوية هندسية اقوى لتناسب المدونة."
        },
        "/insights/stdio-transport/": {
          meta: {
            title: "لماذا يستخدم الجميع stdio | CocoonBreak",
            description: "لماذا تميل Claude و Gemini و Codex الى stdio من زاوية التنفيذ المحلي وحدود الصلاحيات وحلقات التغذية الراجعة."
          },
          heroTitle: "لماذا يستمر <span>Claude / Gemini / Codex</span> في تفضيل stdio",
          intro: "اذا كنت تعمل مؤخرا مع عدة واجهات CLI للذكاء الاصطناعي فستلاحظ نمطا متكررا: كثير من الادوات والوكلاء يفضلون stdio للتواصل. يبدو بسيطا، لكن هذه البساطة هي بالذات ما يجعله مناسبا جدا للوكلاء المحليين.",
          note: "هذه النسخة توسع مقالتي الحديثة في Juejin بمزيد من منظور التنفيذ الهندسي وتصميم سلاسل الادوات."
        },
        "/insights/agent-protocols/": {
          meta: {
            title: "من MCP الى ACP ثم A2A | CocoonBreak",
            description: "وضع MCP و ACP و A2A على خريطة واحدة لتمييز بروتوكولات الادوات وبروتوكولات العميل وتعاون الوكلاء."
          },
          heroTitle: "تطور بروتوكولات وكلاء الذكاء الاصطناعي: من <span>MCP</span> الى ACP ثم A2A",
          intro: "تزداد البروتوكولات المتعلقة بوكلاء الذكاء الاصطناعي باستمرار، وغالبا ما يناقشها الناس كما لو كانت تتنافس في الطبقة نفسها. السؤال المفيد ليس ايها اكثر تقدما، بل ما مشكلة التعاون التي يحلها كل بروتوكول.",
          note: "نسخة المدونة هذه تدمج وتعيد تنظيم كتاباتي الحديثة في Juejin حول MCP و ACP و A2A بحيث تصبح الحدود والعلاقات اوضح في قراءة واحدة."
        }
      }
    }
  };

  function getStoredValue(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function setStoredValue(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage failures and keep the page usable.
    }
  }

  function getPageType() {
    if (document.body && document.body.dataset.page) {
      return document.body.dataset.page;
    }
    if (document.querySelector(".article-shell")) {
      return "article";
    }
    return "";
  }

  function getText(selector, root) {
    var node = (root || document).querySelector(selector);
    return node ? node.textContent.trim() : "";
  }

  function getHTML(selector, root) {
    var node = (root || document).querySelector(selector);
    return node ? node.innerHTML.trim() : "";
  }

  function getAttribute(selector, name, root) {
    var node = (root || document).querySelector(selector);
    return node ? node.getAttribute(name) || "" : "";
  }

  function setText(selector, value, root) {
    var node = (root || document).querySelector(selector);
    if (node && typeof value === "string") {
      node.textContent = value;
    }
  }

  function setHTML(selector, value, root) {
    var node = (root || document).querySelector(selector);
    if (node && typeof value === "string") {
      node.innerHTML = value;
    }
  }

  function setAttribute(selector, name, value, root) {
    var node = (root || document).querySelector(selector);
    if (node && typeof value === "string") {
      node.setAttribute(name, value);
    }
  }

  function setNodeText(node, value) {
    if (node && typeof value === "string") {
      node.textContent = value;
    }
  }

  function setNodeHTML(node, value) {
    if (node && typeof value === "string") {
      node.innerHTML = value;
    }
  }

  function setAllText(selector, values, root) {
    if (!Array.isArray(values)) {
      return;
    }
    var nodes = (root || document).querySelectorAll(selector);
    values.forEach(function (value, index) {
      if (nodes[index] && typeof value === "string") {
        nodes[index].textContent = value;
      }
    });
  }

  function setAllHTML(selector, values, root) {
    if (!Array.isArray(values)) {
      return;
    }
    var nodes = (root || document).querySelectorAll(selector);
    values.forEach(function (value, index) {
      if (nodes[index] && typeof value === "string") {
        nodes[index].innerHTML = value;
      }
    });
  }

  function getMetaDescription() {
    var meta = document.querySelector('meta[name="description"]');
    return meta ? meta.getAttribute("content") || "" : "";
  }

  function setMetaDescription(value) {
    var meta = document.querySelector('meta[name="description"]');
    if (meta && typeof value === "string") {
      meta.setAttribute("content", value);
    }
  }

  function getNormalizedPath() {
    var path = window.location.pathname || "/";
    return path.endsWith("/") ? path : path + "/";
  }

  function formatPostCount(count, lang) {
    if (lang === "ja") {
      return count + "本";
    }
    if (lang === "ar") {
      return count + " مقالا";
    }
    if (lang === "es") {
      return count + " articulos";
    }
    if (lang === "en") {
      return count + " posts";
    }
    return count + " 篇";
  }

  function collectHomeBaseline() {
    if (baseline.home) {
      return baseline.home;
    }

    var projectCards = document.querySelectorAll("#projects .project-card");
    var productCards = document.querySelectorAll("#products .product-card");
    var communityCards = document.querySelectorAll("#community .community-card");
    var archiveCards = document.querySelectorAll("#archive .archive-card");
    var writingCards = document.querySelectorAll("#writing .writing-card");
    var footerNodes = document.querySelectorAll(".footer-card span");

    baseline.home = {
      meta: {
        title: document.title,
        description: getMetaDescription()
      },
      brandSubtitle: getText(".brand-subtitle"),
      nav: Array.prototype.map.call(document.querySelectorAll(".nav-links a"), function (node) {
        return node.textContent.trim();
      }),
      hero: {
        eyebrow: getText(".hero-copy .eyebrow"),
        title: getHTML(".hero-copy h1"),
        lead: getText(".hero-copy .hero-lead"),
        ctas: Array.prototype.map.call(document.querySelectorAll(".hero-actions a"), function (node) {
          return node.textContent.trim();
        }),
        badgeLabel: getAttribute(".badge-cloud", "aria-label")
      },
      focus: {
        title: getText(".hero-panel .panel-title"),
        caption: getText(".hero-panel .panel-caption"),
        pill: getText(".hero-panel .stack-pill"),
        stats: Array.prototype.map.call(document.querySelectorAll(".hero-panel .mini-card span"), function (node) {
          return node.textContent.trim();
        }),
        stackTitles: Array.prototype.map.call(document.querySelectorAll(".hero-stack .stack-item strong"), function (node) {
          return node.textContent.trim();
        }),
        stackBodies: Array.prototype.map.call(document.querySelectorAll(".hero-stack .stack-item div span"), function (node) {
          return node.textContent.trim();
        }),
        stackPills: Array.prototype.map.call(document.querySelectorAll(".hero-stack .card-pill"), function (node) {
          return node.textContent.trim();
        })
      },
      about: {
        title: getHTML("#about .section-card:first-child .section-heading h2"),
        copy: getText("#about .section-card:first-child .section-copy"),
        notes: Array.prototype.map.call(document.querySelectorAll("#about .section-card:first-child .note-list li"), function (node) {
          return node.innerHTML.trim();
        }),
        careTitle: getText("#about .section-card:nth-child(2) .section-heading h2"),
        careItems: Array.prototype.map.call(document.querySelectorAll("#about .section-card:nth-child(2) .timeline-list li"), function (node) {
          return node.innerHTML.trim();
        })
      },
      projects: {
        title: getHTML("#projects .section-heading h2"),
        copy: getText("#projects .section-copy"),
        cards: Array.prototype.map.call(projectCards, function (card) {
          return {
            copy: getText("p", card),
            meta: Array.prototype.map.call(card.querySelectorAll(".card-meta span"), function (node) {
              return node.textContent.trim();
            }),
            link: getText(".ghost-link", card)
          };
        })
      },
      products: {
        title: getHTML("#products .section-heading h2"),
        copy: getText("#products .section-copy"),
        cards: Array.prototype.map.call(productCards, function (card) {
          return {
            copy: getText("p", card),
            meta: Array.prototype.map.call(card.querySelectorAll(".card-meta span"), function (node) {
              return node.textContent.trim();
            }),
            link: getText(".ghost-link", card)
          };
        })
      },
      writing: {
        title: getHTML("#writing .section-heading h2"),
        copy: getText("#writing .section-copy"),
        linkLabels: Array.prototype.map.call(document.querySelectorAll("#writing .writing-card .ghost-link"), function (node) {
          return node.textContent.trim();
        }),
        allCard: writingCards.length
          ? {
              title: getText("h3", writingCards[writingCards.length - 1]),
              copy: getText("p", writingCards[writingCards.length - 1]),
              meta: Array.prototype.map.call(writingCards[writingCards.length - 1].querySelectorAll(".card-meta span"), function (node) {
                return node.textContent.trim();
              }),
              link: getText(".ghost-link", writingCards[writingCards.length - 1])
            }
          : null
      },
      community: {
        title: getHTML("#community .section-heading h2"),
        copy: getText("#community .section-copy"),
        cards: Array.prototype.map.call(communityCards, function (card) {
          return {
            title: getText("h3", card),
            copy: getText("p", card),
            link: getText(".ghost-link", card)
          };
        })
      },
      archive: {
        title: getHTML("#archive .section-heading h2"),
        copy: getText("#archive .section-copy"),
        cards: Array.prototype.map.call(archiveCards, function (card) {
          return {
            title: getText("h3", card),
            copy: getText("p", card),
            link: getText(".ghost-link", card)
          };
        })
      },
      footer: Array.prototype.map.call(footerNodes, function (node) {
        return node.textContent.trim();
      })
    };

    return baseline.home;
  }

  function collectInsightsBaseline() {
    if (baseline.insights) {
      return baseline.insights;
    }

    var sections = document.querySelectorAll("main .section");
    var footerNodes = document.querySelectorAll(".footer-card span");

    baseline.insights = {
      meta: {
        title: document.title,
        description: getMetaDescription()
      },
      brandSubtitle: getText(".brand-subtitle"),
      nav: Array.prototype.map.call(document.querySelectorAll(".nav-links a"), function (node) {
        return node.textContent.trim();
      }),
      hero: {
        eyebrow: getText(".hero-copy .eyebrow"),
        title: getHTML(".hero-copy h1"),
        lead: getText(".hero-copy .hero-lead"),
        ctas: Array.prototype.map.call(document.querySelectorAll(".hero-actions a"), function (node) {
          return node.textContent.trim();
        }),
        panelTitle: getText(".hero-panel .panel-title"),
        panelCaption: getText(".hero-panel .panel-caption"),
        stats: Array.prototype.map.call(document.querySelectorAll(".hero-panel .mini-card span"), function (node) {
          return node.textContent.trim();
        }),
        stackTitles: Array.prototype.map.call(document.querySelectorAll(".hero-stack .stack-item strong"), function (node) {
          return node.textContent.trim();
        }),
        stackBodies: Array.prototype.map.call(document.querySelectorAll(".hero-stack .stack-item div span"), function (node) {
          return node.textContent.trim();
        }),
        stackPills: Array.prototype.map.call(document.querySelectorAll(".hero-stack .card-pill"), function (node) {
          return node.textContent.trim();
        })
      },
      latest: {
        title: getHTML("#latest .section-heading h2"),
        copy: getText("#latest .section-copy"),
        linkLabels: Array.prototype.map.call(document.querySelectorAll("#latest .writing-card .ghost-link"), function (node) {
          return node.textContent.trim();
        })
      },
      features: sections[1]
        ? {
            title: getHTML(".section-heading h2", sections[1]),
            copy: getText(".section-copy", sections[1]),
            linkLabels: Array.prototype.map.call(sections[1].querySelectorAll(".writing-card .ghost-link"), function (node) {
              return node.textContent.trim();
            })
          }
        : null,
      archive: {
        title: getHTML("#archive .section-heading h2"),
        copy: getText("#archive .section-copy"),
        counts: Array.prototype.map.call(document.querySelectorAll("#archive .year-card-header span"), function (node) {
          var numeric = parseInt(node.textContent, 10);
          return isNaN(numeric) ? 0 : numeric;
        })
      },
      footer: Array.prototype.map.call(footerNodes, function (node) {
        return node.textContent.trim();
      })
    };

    return baseline.insights;
  }

  function collectArticleBaseline() {
    if (baseline.article) {
      return baseline.article;
    }

    baseline.article = {
      nav: Array.prototype.map.call(document.querySelectorAll(".insight-nav a"), function (node) {
        return node.textContent.trim();
      }),
      meta: {
        title: document.title,
        description: getMetaDescription()
      },
      heroTitle: getHTML(".article-hero h1"),
      intro: getText(".article-intro"),
      note: getText(".article-note")
    };

    return baseline.article;
  }

  function getHomeCopy(lang) {
    collectHomeBaseline();
    if (lang === "zh") {
      return baseline.home;
    }
    return homeTranslations[lang] || baseline.home;
  }

  function getInsightsCopy(lang) {
    collectInsightsBaseline();
    if (lang === "zh") {
      return baseline.insights;
    }
    return insightsTranslations[lang] || baseline.insights;
  }

  function getArticleCopy(lang) {
    var currentPath = getNormalizedPath();
    var base = collectArticleBaseline();
    if (lang === "zh") {
      return {
        shared: {
          nav: base.nav
        },
        page: {
          meta: base.meta,
          heroTitle: base.heroTitle,
          intro: base.intro,
          note: base.note
        }
      };
    }

    var langPack = articleTranslations[lang] || articleTranslations.en || {};
    return {
      shared: (langPack && langPack.shared) || { nav: base.nav },
      page: (langPack.pages && langPack.pages[currentPath]) || null
    };
  }

  function renderFooter(lines) {
    if (!Array.isArray(lines)) {
      return;
    }
    var footerNodes = document.querySelectorAll(".footer-card span");
    var year = String(new Date().getFullYear());
    lines.forEach(function (line, index) {
      if (footerNodes[index]) {
        footerNodes[index].textContent = line.replace("{year}", year);
      }
    });
  }

  function renderHome(lang) {
    var copy = getHomeCopy(lang);
    var projectCards = document.querySelectorAll("#projects .project-card");
    var productCards = document.querySelectorAll("#products .product-card");
    var communityCards = document.querySelectorAll("#community .community-card");
    var archiveCards = document.querySelectorAll("#archive .archive-card");
    var writingCards = document.querySelectorAll("#writing .writing-card");

    document.title = copy.meta.title;
    setMetaDescription(copy.meta.description);
    setText(".brand-subtitle", copy.brandSubtitle);
    setAllText(".nav-links a", copy.nav);
    setText(".hero-copy .eyebrow", copy.hero.eyebrow);
    setHTML(".hero-copy h1", copy.hero.title);
    setText(".hero-copy .hero-lead", copy.hero.lead);
    setAllText(".hero-actions a", copy.hero.ctas);
    setAttribute(".badge-cloud", "aria-label", copy.hero.badgeLabel);

    setText(".hero-panel .panel-title", copy.focus.title);
    setText(".hero-panel .panel-caption", copy.focus.caption);
    setText(".hero-panel .stack-pill", copy.focus.pill);
    setAllText(".hero-panel .mini-card span", copy.focus.stats);
    setAllText(".hero-stack .stack-item strong", copy.focus.stackTitles);
    setAllText(".hero-stack .stack-item div span", copy.focus.stackBodies);
    setAllText(".hero-stack .card-pill", copy.focus.stackPills);

    setHTML("#about .section-card:first-child .section-heading h2", copy.about.title);
    setText("#about .section-card:first-child .section-copy", copy.about.copy);
    setAllHTML("#about .section-card:first-child .note-list li", copy.about.notes);
    setText("#about .section-card:nth-child(2) .section-heading h2", copy.about.careTitle);
    setAllHTML("#about .section-card:nth-child(2) .timeline-list li", copy.about.careItems);

    setHTML("#projects .section-heading h2", copy.projects.title);
    setText("#projects .section-copy", copy.projects.copy);
    copy.projects.cards.forEach(function (card, index) {
      var root = projectCards[index];
      if (!root) {
        return;
      }
      setText("p", card.copy, root);
      setAllText(".card-meta span", card.meta, root);
      setText(".ghost-link", card.link, root);
    });

    setHTML("#products .section-heading h2", copy.products.title);
    setText("#products .section-copy", copy.products.copy);
    copy.products.cards.forEach(function (card, index) {
      var root = productCards[index];
      if (!root) {
        return;
      }
      setText("p", card.copy, root);
      setAllText(".card-meta span", card.meta, root);
      setText(".ghost-link", card.link, root);
    });

    setHTML("#writing .section-heading h2", copy.writing.title);
    setText("#writing .section-copy", copy.writing.copy);
    setAllText("#writing .writing-card .ghost-link", copy.writing.linkLabels);
    if (copy.writing.allCard && writingCards.length) {
      var lastCard = writingCards[writingCards.length - 1];
      setText("h3", copy.writing.allCard.title, lastCard);
      setText("p", copy.writing.allCard.copy, lastCard);
      setAllText(".card-meta span", copy.writing.allCard.meta, lastCard);
      setText(".ghost-link", copy.writing.allCard.link, lastCard);
    }

    setHTML("#community .section-heading h2", copy.community.title);
    setText("#community .section-copy", copy.community.copy);
    copy.community.cards.forEach(function (card, index) {
      var root = communityCards[index];
      if (!root) {
        return;
      }
      setText("h3", card.title, root);
      setText("p", card.copy, root);
      setText(".ghost-link", card.link, root);
    });

    setHTML("#archive .section-heading h2", copy.archive.title);
    setText("#archive .section-copy", copy.archive.copy);
    copy.archive.cards.forEach(function (card, index) {
      var root = archiveCards[index];
      if (!root) {
        return;
      }
      setText("h3", card.title, root);
      setText("p", card.copy, root);
      setText(".ghost-link", card.link, root);
    });

    renderFooter(copy.footer);
  }

  function renderInsights(lang) {
    var copy = getInsightsCopy(lang);
    var base = collectInsightsBaseline();
    var sections = document.querySelectorAll("main .section");
    var featureSection = sections[1] || null;

    document.title = copy.meta.title;
    setMetaDescription(copy.meta.description);
    setText(".brand-subtitle", copy.brandSubtitle);
    setAllText(".nav-links a", copy.nav);

    setText(".hero-copy .eyebrow", copy.hero.eyebrow);
    setHTML(".hero-copy h1", copy.hero.title);
    setText(".hero-copy .hero-lead", copy.hero.lead);
    setAllText(".hero-actions a", copy.hero.ctas);
    setText(".hero-panel .panel-title", copy.hero.panelTitle);
    setText(".hero-panel .panel-caption", copy.hero.panelCaption);
    setAllText(".hero-panel .mini-card span", copy.hero.stats);
    setAllText(".hero-stack .stack-item strong", copy.hero.stackTitles);
    setAllText(".hero-stack .stack-item div span", copy.hero.stackBodies);
    setAllText(".hero-stack .card-pill", copy.hero.stackPills);

    setHTML("#latest .section-heading h2", copy.latest.title);
    setText("#latest .section-copy", copy.latest.copy);
    Array.prototype.forEach.call(document.querySelectorAll("#latest .writing-card .ghost-link"), function (node) {
      node.textContent = copy.latest.linkLabel;
    });

    if (featureSection && copy.features) {
      setHTML(".section-heading h2", copy.features.title, featureSection);
      setText(".section-copy", copy.features.copy, featureSection);
      Array.prototype.forEach.call(featureSection.querySelectorAll(".writing-card .ghost-link"), function (node) {
        node.textContent = copy.features.linkLabel;
      });
    }

    setHTML("#archive .section-heading h2", copy.archive.title);
    setText("#archive .section-copy", copy.archive.copy);
    Array.prototype.forEach.call(document.querySelectorAll("#archive .year-card-header span"), function (node, index) {
      var count = base.archive.counts && typeof base.archive.counts[index] === "number"
        ? base.archive.counts[index]
        : 0;
      node.textContent = formatPostCount(count, lang);
    });

    renderFooter(copy.footer);
  }

  function renderArticle(lang) {
    var copy = getArticleCopy(lang);
    setAllText(".insight-nav a", copy.shared.nav);

    if (copy.page) {
      document.title = copy.page.meta.title;
      setMetaDescription(copy.page.meta.description);
      setHTML(".article-hero h1", copy.page.heroTitle);
      setText(".article-intro", copy.page.intro);
      setText(".article-note", copy.page.note);
    }
  }

  function setDocumentLanguage(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    document.documentElement.dir = RTL_LANGS[lang] ? "rtl" : "ltr";
  }

  function syncControlState() {
    var ui = uiCopy[state.lang] || uiCopy.zh;
    Array.prototype.forEach.call(document.querySelectorAll("[data-site-controls]"), function (container) {
      var select = container.querySelector(".site-select");
      var button = container.querySelector(".theme-toggle");
      if (select) {
        select.value = state.lang;
        select.setAttribute("aria-label", ui.languageAria);
      }
      if (button) {
        var isDark = state.theme === "dark";
        button.setAttribute("aria-label", isDark ? ui.switchToLight : ui.switchToDark);
        button.innerHTML =
          '<span class="theme-toggle__icon" aria-hidden="true">' +
          (isDark ? "☾" : "☀") +
          '</span><span class="theme-toggle__label">' +
          ui.themeLabel +
          " · " +
          (isDark ? ui.dark : ui.light) +
          "</span>";
      }
    });

    var menuButton = document.querySelector("[data-menu-button]");
    if (menuButton) {
      menuButton.setAttribute("aria-label", ui.menuAria);
    }
  }

  function mountSiteControls() {
    var containers = document.querySelectorAll("[data-site-controls]");
    if (!containers.length) {
      var insightNav = document.querySelector(".insight-nav");
      if (insightNav) {
        var inlineContainer = document.createElement("div");
        inlineContainer.className = "site-controls site-controls--inline";
        inlineContainer.setAttribute("data-site-controls", "");
        insightNav.appendChild(inlineContainer);
        containers = document.querySelectorAll("[data-site-controls]");
      }
    }

    Array.prototype.forEach.call(containers, function (container) {
      if (container.dataset.ready === "true") {
        return;
      }

      container.dataset.ready = "true";

      var select = document.createElement("select");
      select.className = "site-select";
      SUPPORTED_LANGS.forEach(function (lang) {
        var option = document.createElement("option");
        option.value = lang;
        option.textContent = languageNames[lang];
        select.appendChild(option);
      });
      select.addEventListener("change", function () {
        applyLanguage(select.value, true);
      });

      var button = document.createElement("button");
      button.className = "theme-toggle";
      button.type = "button";
      button.addEventListener("click", function () {
        applyTheme(state.theme === "dark" ? "light" : "dark", true);
      });

      container.appendChild(select);
      container.appendChild(button);
    });
  }

  function applyTheme(theme, persist) {
    state.theme = theme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = state.theme;
    if (persist) {
      setStoredValue(THEME_KEY, state.theme);
    }
    syncControlState();
  }

  function applyLanguage(lang, persist) {
    state.lang = SUPPORTED_LANGS.indexOf(lang) >= 0 ? lang : DEFAULT_LANG;
    setDocumentLanguage(state.lang);

    var pageType = getPageType();
    if (pageType === "home") {
      renderHome(state.lang);
    } else if (pageType === "insights") {
      renderInsights(state.lang);
    } else if (pageType === "article") {
      renderArticle(state.lang);
    }

    if (persist) {
      setStoredValue(LANG_KEY, state.lang);
    }

    syncControlState();
  }

  function initMenuToggle() {
    var menuButton = document.querySelector("[data-menu-button]");
    var navLinks = document.querySelector("[data-nav-links]");
    if (menuButton && navLinks) {
      menuButton.addEventListener("click", function () {
        var expanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!expanded));
        navLinks.classList.toggle("is-open");
      });
    }
  }

  function initRevealObserver() {
    var reveals = document.querySelectorAll("[data-reveal]");
    if (reveals.length && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      reveals.forEach(function (node) {
        observer.observe(node);
      });
    } else {
      reveals.forEach(function (node) {
        node.classList.add("is-visible");
      });
    }
  }

  function initYearNodes() {
    document.querySelectorAll("[data-year]").forEach(function (node) {
      node.textContent = String(new Date().getFullYear());
    });
  }

  function bootstrapState() {
    var storedLang = getStoredValue(LANG_KEY);
    var storedTheme = getStoredValue(THEME_KEY);
    state.lang = SUPPORTED_LANGS.indexOf(storedLang) >= 0 ? storedLang : DEFAULT_LANG;
    state.theme = storedTheme === "light" ? "light" : DEFAULT_THEME;
  }

  bootstrapState();
  applyTheme(state.theme, false);
  initMenuToggle();
  initRevealObserver();
  initYearNodes();
  mountSiteControls();
  applyLanguage(state.lang, false);
})();
