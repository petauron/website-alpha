if (window.location.pathname === "/zh" || window.location.pathname.startsWith("/zh/")) {
  document.documentElement.lang = "zh";
  document.title = "页面不存在 — Petauron";
  document.querySelector('[data-not-found-locale="en"]')?.setAttribute("hidden", "");
  document.querySelector('[data-not-found-locale="zh"]')?.removeAttribute("hidden");
}
