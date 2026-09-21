/* =====================================================================
   Đọc config.js -> dựng trang. Thường bạn KHÔNG cần sửa file này.
   ===================================================================== */
(function () {
  "use strict";

  const cfg = window.BIO_CONFIG || {};

  /* ---------- BỘ ICON (SVG path, viewBox 24x24) ---------- */
  const ICONS = {
    twitter: '<path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.9A8.2 8.2 0 0 1 2 18.4 11.6 11.6 0 0 0 8.3 20.2c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z"/>',
    x: '<path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z"/>',
    instagram: '<path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.7 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>',
    tiktok: '<path d="M16.6 2h-3.3v13.4a2.8 2.8 0 1 1-2-2.7V9.3a6.1 6.1 0 1 0 5.3 6V8.8a7.5 7.5 0 0 0 4.4 1.4V6.9a4.4 4.4 0 0 1-4.4-4.4V2z"/>',
    youtube: '<path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z"/>',
    spotify: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.6 14.4a.6.6 0 0 1-.9.2c-2.4-1.5-5.4-1.8-9-1a.6.6 0 1 1-.3-1.2c3.9-.9 7.3-.5 10 1.1.3.2.4.6.2.9zm1.2-2.7a.75.75 0 0 1-1 .3c-2.8-1.7-7-2.2-10.2-1.2a.75.75 0 1 1-.4-1.4c3.7-1.1 8.3-.6 11.5 1.3.4.2.5.7.1 1zm.1-2.8C14.6 9 9.2 8.8 6.1 9.8a.9.9 0 1 1-.5-1.7c3.6-1.1 9.5-.9 13.2 1.3a.9.9 0 0 1-.9 1.5z"/>',
    applemusic: '<path d="M9 18.5V6.2a1 1 0 0 1 .8-1l8-1.7a1 1 0 0 1 1.2 1v10.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6.5" cy="18.2" r="2.6"/><circle cx="16.5" cy="16.2" r="2.6"/>',
    bandcamp: '<path d="M2 18.5 8.4 5.5H22l-6.4 13H2z"/>',
    soundcloud: '<path d="M2 14.5v3M4.5 12.5v5M7 11v6.5M9.5 9.5v8M12 8.5v9h6.5a3.5 3.5 0 0 0 .3-7A5.5 5.5 0 0 0 12 8.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    facebook: '<path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.2C16.7 2.1 15.7 2 14.6 2 12.2 2 10.5 3.5 10.5 6.1v2.4H8v3.4h2.5V22H14v-10.1h2.6l.4-3.4H14z"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/>',
    linkedin: '<path d="M4.9 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h4v12H3V9zm6.5 0h3.8v1.7c.6-1 1.9-2 3.9-2 4 0 4.8 2.6 4.8 6V21h-4v-5.5c0-1.4 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9z"/>',
    telegram: '<path d="M21.4 3.6 2.8 10.8c-1.3.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.3-2.3 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.8c.3-1.2-.5-1.8-1.4-1.7zM8.3 13.5l9.2-5.8c.4-.3.8-.1.5.2l-7.6 6.9-.3 3.2-1.8-4.5z"/>',
    zalo: '<path d="M12 2.5C6.5 2.5 2 6.3 2 11c0 2.5 1.3 4.8 3.4 6.3L4.8 21l3.7-1.9c1.1.3 2.3.5 3.5.5 5.5 0 10-3.8 10-8.5S17.5 2.5 12 2.5zm-3.5 5.8h4.3v1.1l-2.7 3.4h2.7v1.2H8.1v-1.1l2.7-3.4H8.5V8.3zm6.7 1.5c.9 0 1.5.7 1.5 1.7s-.6 1.7-1.5 1.7-1.5-.7-1.5-1.7.6-1.7 1.5-1.7zm0 1c-.3 0-.5.3-.5.7s.2.7.5.7.5-.3.5-.7-.2-.7-.5-.7z" fill-rule="evenodd"/>',
    discord: '<path d="M19.3 5.4A16.5 16.5 0 0 0 15.2 4l-.5 1a15.3 15.3 0 0 0-5.4 0l-.5-1a16.5 16.5 0 0 0-4.1 1.4C2 9.3 1.3 13.1 1.7 16.8a16.6 16.6 0 0 0 5 2.5l1.1-1.8c-.6-.2-1.2-.5-1.7-.9l.4-.3a11.8 11.8 0 0 0 10.1 0l.4.3c-.5.4-1.1.7-1.7.9l1.1 1.8a16.6 16.6 0 0 0 5-2.5c.5-4.3-.7-8.1-3.1-11.4zM8.8 14.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm6.4 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z"/>',
    twitch: '<path d="M4 2 2.5 6v14H7v2h3l2-2h3.5L21 14.5V2H4zm15 11-3 3h-4l-2 2v-2H7V4h12v9zm-3-6h-2v5h2V7zm-5 0H9v5h2V7z" fill-rule="evenodd"/>',
    threads: '<path d="M12.2 2C6.8 2 3.4 5.4 3.4 12s3.4 10 8.8 10c4.5 0 7.4-2.3 7.4-5.5 0-2.3-1.6-3.9-4-4.3-.1-2-1.3-3.3-3.4-3.3-1.4 0-2.5.6-3.1 1.6l1.5.9c.4-.6 1-.9 1.7-.9 1 0 1.7.6 1.8 1.7-.6-.1-1.2-.2-1.9-.2-2.4 0-3.9 1.2-3.9 3 0 1.7 1.4 2.9 3.5 2.9 2.3 0 3.7-1.3 4-3.4.8.4 1.2 1 1.2 1.8 0 1.7-1.9 3.3-5.5 3.3-4.2 0-6.7-2.7-6.7-8.3s2.5-8.3 6.7-8.3c2.8 0 4.7 1 5.7 3.1l1.7-.8C18.3 3.5 15.7 2 12.2 2zm-.6 12c1 0 1.8.1 2.5.3-.2 1.3-.9 2-2.1 2-.9 0-1.6-.4-1.6-1.1 0-.7.6-1.2 1.2-1.2z" fill-rule="evenodd"/>',
    mail: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.5 2 7.5 5.5L19.5 7h-15zM4 9v8h16V9l-8 5.8L4 9z" fill-rule="evenodd"/>',
    phone: '<path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2c1.1.4 2.3.6 3.6.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.6 3.6a1 1 0 0 1-.2 1l-2.3 2.2z"/>',
    globe: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 9h-3.1a15.7 15.7 0 0 0-1.3-5.6A8 8 0 0 1 18.9 11zM12 4c.8 1 1.7 3.1 1.8 7h-3.6C10.3 7.1 11.2 5 12 4zM4.9 13h3.1a15.7 15.7 0 0 0 1.3 5.6A8 8 0 0 1 4.9 13zm3.1-2H4.9a8 8 0 0 1 4.4-5.6A15.7 15.7 0 0 0 8 11zm4 9c-.8-1-1.7-3.1-1.8-7h3.6c-.1 3.9-1 6-1.8 7zm2.7-1.4a15.7 15.7 0 0 0 1.3-5.6h3.1a8 8 0 0 1-4.4 5.6z" fill-rule="evenodd"/>',
    link: '<path d="M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a3 3 0 0 1 4.2 4.2l-2 2a1 1 0 1 1-1.4-1.4l2-2a1 1 0 0 0-1.4-1.4L12 13.4a1 1 0 0 1-1.4 0zm2.8-2.8a1 1 0 0 1 0 1.4l-3.5 3.5a3 3 0 0 1-4.2-4.2l2-2a1 1 0 0 1 1.4 1.4l-2 2a1 1 0 0 0 1.4 1.4L12 10.6a1 1 0 0 1 1.4 0z"/>'
  };

  const TICK = '<svg class="tick" viewBox="0 0 24 24" aria-label="Đã xác minh" role="img"><path fill="#3b9bff" d="M12 1.5l2.400 1.900 3-.2 1 2.800 2.600 1.500-.8 2.900 1.100 2.800-2.200 2.100-.4 3-3 .6-2.200 2.100L12 20l-2.800 1.500-2.200-2.100-3-.6-.4-3L1.400 13.700l1.100-2.800-.8-2.900 2.600-1.500 1-2.800 3 .2L12 1.500z" transform="translate(0 -.3) scale(1)"/><path d="M7.800 12.200l3 3 5.600-6" fill="none" stroke="#fff" stroke-width="2.200" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- CÁC THEME CÓ SẴN ---------- */
  const THEMES = {
    forest: { bg: "#0c1f16", glow1: "#1f6b45", glow2: "#c9a24a", button: "#35694a", buttonHover: "#3f7b57", accent: "#7ee0a3", text: "#f3f1e8" },
    ocean:  { bg: "#07162a", glow1: "#1b5e9b", glow2: "#22d3c5", button: "#1c4a75", buttonHover: "#255b8d", accent: "#6fd8ff", text: "#eef6ff" },
    sunset: { bg: "#231021", glow1: "#b8365f", glow2: "#f59e4a", button: "#7a2b4d", buttonHover: "#8f3660", accent: "#ffb27a", text: "#fff3ea" },
    mono:   { bg: "#0b0b0d", glow1: "#3a3a44", glow2: "#8a8a99", button: "#26262c", buttonHover: "#31313a", accent: "#ffffff", text: "#f4f4f5" },
    light:  { bg: "#f4f1ea", glow1: "#cfe3d4", glow2: "#f2d9b8", button: "#ffffff", buttonHover: "#fbfaf6", accent: "#2f7a55", text: "#1c2621" }
  };

  /* ---------- TIỆN ÍCH ---------- */
  const $ = (id) => document.getElementById(id);
  const isImagePath = (s) => /[\/.]/.test(s) && /\.(png|jpe?g|webp|gif|svg|avif|ico)(\?.*)?$/i.test(s) || /^https?:\/\//i.test(s);
  const svgIcon = (name) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">' + (ICONS[name] || ICONS.link) + "</svg>";

  function isExternal(url) {
    return /^https?:\/\//i.test(url);
  }

  function hexToRgba(hex, a) {
    const h = hex.replace("#", "");
    const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const n = parseInt(full, 16);
    return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
  }

  /* ---------- ÁP DỤNG THEME ---------- */
  function applyTheme() {
    const t = Object.assign({}, THEMES[cfg.theme] || THEMES.forest, mapCustom(cfg.customColors || {}));
    const root = document.documentElement.style;
    root.setProperty("--bg", t.bg);
    root.setProperty("--bg-glow-1", t.glow1);
    root.setProperty("--bg-glow-2", t.glow2);
    root.setProperty("--button", t.button);
    root.setProperty("--button-hover", t.buttonHover);
    root.setProperty("--accent", t.accent);
    root.setProperty("--text", t.text);
    root.setProperty("--text-soft", hexToRgba(t.text, 0.72));
    root.setProperty("--ring", hexToRgba(t.text, 0.14));
    document.querySelector('meta[name="theme-color"]').setAttribute("content", t.bg);
    if (cfg.theme === "light") document.body.classList.add("is-light");
  }

  // Cho phép người dùng viết ngắn gọn: { button, accent, text, bg }
  function mapCustom(c) {
    const out = {};
    if (c.bg) out.bg = c.bg;
    if (c.button) { out.button = c.button; out.buttonHover = c.buttonHover || c.button; }
    if (c.accent) out.accent = c.accent;
    if (c.text) out.text = c.text;
    if (c.glow1) out.glow1 = c.glow1;
    if (c.glow2) out.glow2 = c.glow2;
    return out;
  }

  /* ---------- DỰNG TRANG ---------- */
  function build() {
    const p = cfg.profile || {};

    document.title = p.pageTitle || p.name || "Links";
    const desc = document.querySelector('meta[name="description"]');
    if (desc && p.pageDescription) desc.setAttribute("content", p.pageDescription);

    // Avatar
    const av = $("avatar");
    av.src = p.avatar || "assets/avatar.svg";
    av.alt = p.name ? "Ảnh đại diện của " + p.name : "Ảnh đại diện";
    // Favicon = avatar để tab trình duyệt nhìn có nhận diện
    const fav = document.querySelector('link[rel="icon"]');
    if (fav && p.avatar) fav.href = p.avatar;

    // Tên + tick
    const nameEl = $("name");
    nameEl.textContent = p.name || "";
    if (p.verified) nameEl.insertAdjacentHTML("beforeend", TICK);

    $("bio").textContent = p.bio || "";
    if (!p.bio) $("bio").hidden = true;

    // Social
    const soc = $("socials");
    (cfg.socials || []).forEach((s) => {
      const a = document.createElement("a");
      a.href = s.url;
      a.setAttribute("aria-label", s.label || s.icon);
      if (isExternal(s.url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      a.innerHTML = svgIcon(s.icon);
      soc.appendChild(a);
    });
    if (!(cfg.socials || []).length) soc.hidden = true;

    // Links chính
    const list = $("links");
    (cfg.links || []).forEach((l, i) => {
      const li = document.createElement("li");
      li.className = "reveal";
      li.style.setProperty("--i", i + 3);

      const a = document.createElement("a");
      a.className = "link";
      a.href = l.url;
      if (isExternal(l.url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }

      const ic = document.createElement("span");
      ic.className = "link__icon";
      if (l.color) ic.style.setProperty("--icon-bg", l.color);

      if (l.icon && isImagePath(l.icon)) {
        const img = document.createElement("img");
        img.src = l.icon; img.alt = ""; img.loading = "lazy";
        ic.appendChild(img);
      } else {
        ic.innerHTML = svgIcon(l.icon);
      }

      const title = document.createElement("span");
      title.className = "link__title";
      title.textContent = l.title || l.url;

      a.append(ic, title);
      li.appendChild(a);
      list.appendChild(li);
    });

    // Footer
    const f = $("footer");
    if (cfg.footer) f.textContent = cfg.footer; else f.hidden = true;
  }

  applyTheme();
  build();
})();
