(function () {
  if (typeof window === "undefined") {
    return;
  }

  function boot() {
    if (window.__pojianLive2dReady || typeof window.initWidget !== "function") {
      return;
    }

    window.__pojianLive2dReady = true;
    window.initWidget({
      waifuPath: "/custom/live2d-tips.json",
      cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
      cubism2Path: "https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.0/dist/live2d.min.js",
      modelId: 1,
      drag: true,
      tools: ["hitokoto", "switch-model", "switch-texture", "photo", "info", "quit"],
      logLevel: "error"
    });
  }

  if (!document.querySelector("link[data-pojian-live2d-style]")) {
    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.0/dist/waifu.css";
    css.setAttribute("data-pojian-live2d-style", "true");
    document.head.appendChild(css);
  }

  var script = document.createElement("script");
  script.type = "module";
  script.src = "https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.0/dist/waifu-tips.js";
  script.onload = function () {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", boot, { once: true });
    } else {
      boot();
    }
  };
  document.head.appendChild(script);
})();
