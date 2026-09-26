/* =====================================================================
   CẤU HÌNH TRANG BIO
   Bạn chỉ cần sửa file này. Lưu lại rồi tải lại trang là thấy thay đổi.
   ===================================================================== */

window.BIO_CONFIG = {

  /* ---------- 1. THÔNG TIN CÁ NHÂN ---------- */
  profile: {
    name: "hannjioe",
    verified: true,                       // true = hiện tick xanh cạnh tên
    bio: "Tải các file, app tối ưu bên dưới",
    avatar: "assets/tiktok-avatar.svg",   // đường dẫn ảnh (jpg/png/webp/svg) hoặc link https://...
    // Tiêu đề tab trình duyệt & mô tả khi chia sẻ link
    pageTitle: "hannjioe · Links",
    pageDescription: "Tải các file, app tối ưu bên dưới"
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
    { icon: "tiktok",    url: "https://www.tiktok.com/@hannjioe" }
  ],

  /* ---------- 4. DANH SÁCH LINK CHÍNH ----------
     title : chữ hiển thị trên nút
     url   : đường dẫn khi bấm vào
     icon  : tên icon có sẵn (xem cuối file)  HOẶC  logo riêng: "assets/ten-anh.png"
     color : (tùy chọn) màu nền của vòng tròn logo, ví dụ "#1DB954"
     Thêm link mới = copy 1 dòng { ... }, và nhớ dấu phẩy ở cuối dòng.   */
  links: [
    { title: "Tải BrotX v3", url: "https://link.osteup.io.vn/5d908b4a", icon: "assets/brotx.png" },
    { title: "Tải BrotX v2", url: "https://link.osteup.io.vn/4c7447c1", icon: "assets/brotx.png" },
    { title: "Tải Osteboss", url: "https://osteup.com/osteboss/", icon: "assets/osteboss.png" }
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
