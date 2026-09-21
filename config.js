/* =====================================================================
   CẤU HÌNH TRANG BIO
   Bạn chỉ cần sửa file này. Lưu lại rồi tải lại trang là thấy thay đổi.
   ===================================================================== */

window.BIO_CONFIG = {

  /* ---------- 1. THÔNG TIN CÁ NHÂN ---------- */
  profile: {
    name: "Juno Rivers",
    verified: true,                       // true = hiện tick xanh cạnh tên
    bio: "Lo-fi beats, midnight lyrics.",
    avatar: "assets/avatar.svg",          // đường dẫn ảnh (jpg/png/webp/svg) hoặc link https://...
    // Tiêu đề tab trình duyệt & mô tả khi chia sẻ link
    pageTitle: "Juno Rivers · Links",
    pageDescription: "Tất cả link của Juno Rivers ở một nơi."
  },

  /* ---------- 2. GIAO DIỆN ----------
     Chọn 1 theme: "forest" | "ocean" | "sunset" | "light" | "mono"
     Muốn tự chọn màu? Xem mục "customColors" bên dưới.               */
  theme: "forest",

  // (Tùy chọn) Ghi đè màu của theme. Bỏ trống {} nếu không cần.
  // Ví dụ: { bg: "#101820", button: "#1d3b53", accent: "#66d9ef", text: "#f5f5f5" }
  customColors: {},

  /* ---------- 3. ICON MẠNG XÃ HỘI (hàng tròn nhỏ phía trên) ----------
     icon: tên trong danh sách ở cuối file này                          */
  socials: [
    { icon: "twitter",   url: "https://twitter.com/" },
    { icon: "instagram", url: "https://instagram.com/" },
    { icon: "tiktok",    url: "https://tiktok.com/" },
    { icon: "youtube",   url: "https://youtube.com/" },
    { icon: "spotify",   url: "https://open.spotify.com/" }
  ],

  /* ---------- 4. DANH SÁCH LINK CHÍNH ----------
     title : chữ hiển thị trên nút
     url   : đường dẫn khi bấm vào
     icon  : tên icon có sẵn (xem cuối file)  HOẶC  logo riêng: "assets/ten-anh.png"
     color : (tùy chọn) màu nền của vòng tròn logo, ví dụ "#1DB954"
     Thêm link mới = copy 1 dòng { ... }, và nhớ dấu phẩy ở cuối dòng.   */
  links: [
    { title: "Spotify",          url: "https://open.spotify.com/",  icon: "spotify",    color: "#1DB954" },
    { title: "Apple Music",      url: "https://music.apple.com/",   icon: "applemusic", color: "#fa2d48" },
    { title: "YouTube",          url: "https://youtube.com/",       icon: "youtube",    color: "#ff0000" },
    { title: "Bandcamp",         url: "https://bandcamp.com/",      icon: "bandcamp",   color: "#4a9bb5" },
    { title: "Đăng ký nhận tin", url: "mailto:ban@example.com",     icon: "mail",       color: "#f4a7b9" },
    { title: "Link dùng logo riêng", url: "https://example.com",    icon: "assets/logo-mau.svg" }
  ],

  /* ---------- 5. CHÂN TRANG ---------- */
  footer: ""    // Ví dụ: "© 2026 Juno Rivers". Để trống thì ẩn.
};

/* =====================================================================
   DANH SÁCH ICON CÓ SẴN (dùng cho socials và links):
   twitter, x, instagram, tiktok, youtube, spotify, applemusic, bandcamp,
   soundcloud, facebook, github, linkedin, telegram, zalo, discord,
   twitch, threads, mail, phone, globe, link
   ===================================================================== */
