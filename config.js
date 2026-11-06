/* =====================================================================
   CẤU HÌNH TRANG BIO
   Bạn chỉ cần sửa file này. Lưu lại rồi tải lại trang là thấy thay đổi.
   ===================================================================== */

window.BIO_CONFIG = {

  /* ---------- 1. THÔNG TIN CÁ NHÂN ---------- */
  profile: {
    name: "hannjioe",
    verified: true,                       // true = hiện tick xanh cạnh tên
    bio: "Website chính thức: osteup.com · Tổng hợp app & mẹo fix lag mọi hệ điều hành",
    avatar: "assets/tiktok-avatar.svg",   // đường dẫn ảnh (jpg/png/webp/svg) hoặc link https://...
    // Tiêu đề tab trình duyệt & mô tả khi chia sẻ link
    pageTitle: "hannjioe · Links & Tools",
    pageDescription: "Website chính thức osteup.com - Tải BrotX Optimizer, Osteboss và các công cụ tối ưu Android, iOS, Windows."
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
    { icon: "tiktok", url: "https://www.tiktok.com/@hannjioe", label: "TikTok" },
    { icon: "globe",  url: "https://osteup.com", label: "Website osteup.com" }
  ],

  /* ---------- 4. DANH SÁCH LINK CHÍNH ----------
     title    : chữ hiển thị trên nút
     subtitle : mô tả ngắn phụ dưới tiêu đề (tùy chọn)
     url      : đường dẫn khi bấm vào
     icon     : tên icon có sẵn HOẶC đường dẫn ảnh: "assets/ten-anh.png"
     badge    : nhãn nhỏ nổi bật (tùy chọn, ví dụ: "Mới Nhất", "Chính Thức")
     highlight: viền sáng nổi bật (tùy chọn)
     children : danh sách các phiên bản con dropdown sổ xuống (tùy chọn) */
  links: [
    // 1. Website chính thức osteup.com
    {
      title: "osteup.com · Website Chính Thức",
      subtitle: "Mọi thông tin & bài viết fix lag Android, iOS, Windows",
      url: "https://osteup.com",
      icon: "assets/osteup.png",
      badge: "Chính Thức",
      highlight: true
    },

    // 2. Nhóm dropdown BrotX Optimizer (từ V8 mới nhất đến V2)
    {
      title: "BrotX Optimizer",
      subtitle: "Tối ưu Android không root (Chọn bản V2 – V8)",
      icon: "assets/brotx.png",
      badge: "V8 Mới Nhất",
      children: [
        {
          title: "BrotX v8 (Mới Nhất)",
          subtitle: "64 cờ · Speed Mode QoS · Tắt App Standby",
          url: "https://link.osteup.io.vn/1e03c104",
          badge: "Mới Nhất",
          highlight: true
        },
        {
          title: "BrotX v7",
          subtitle: "58 cờ · ANGLE Vulkan · Quét 144Hz",
          url: "https://link.osteup.io.vn/f1b07182"
        },
        {
          title: "BrotX v6",
          subtitle: "52 cờ · GPU Game Driver · Bypass RAM Plus",
          url: "https://link.osteup.io.vn/c01c40b6"
        },
        {
          title: "BrotX v5",
          subtitle: "50 cờ · Shizuku IPC · Room Snapshot",
          url: "https://link.osteup.io.vn/b83a7e26"
        },
        {
          title: "BrotX v4",
          subtitle: "Phiên bản V4 ổn định",
          url: "https://link.osteup.io.vn/ff42a06b"
        },
        {
          title: "BrotX v3",
          subtitle: "Phiên bản V3",
          url: "https://link.osteup.io.vn/5d908b4a"
        },
        {
          title: "BrotX v2",
          subtitle: "Phiên bản V2 khởi nguyên",
          url: "https://link.osteup.io.vn/4c7447c1"
        }
      ]
    },

    // 3. Ứng dụng Osteboss
    {
      title: "Tải Osteboss",
      subtitle: "Công cụ tối ưu hiệu năng và quản lý VIP",
      url: "https://osteup.com/osteboss/",
      icon: "assets/osteboss.png"
    }
  ],

  /* ---------- 5. CHÂN TRANG ---------- */
  footer: "© 2026 hannjioe · osteup.com"
};

/* =====================================================================
   DANH SÁCH ICON CÓ SẴN (dùng cho socials và links):
   twitter, x, instagram, tiktok, youtube, spotify, applemusic, bandcamp,
   soundcloud, facebook, github, linkedin, telegram, zalo, discord,
   twitch, threads, mail, phone, globe, link
   ===================================================================== */
