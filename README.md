# Trang Bio cá nhân (Link-in-bio)

Trang bio tĩnh, không cần cài đặt hay build. Mọi thông tin nằm trong **một file: `config.js`**.

## Cấu trúc

```
bio/
├── index.html      ← trang chính (không cần sửa)
├── config.js       ← ⭐ CHỈ CẦN SỬA FILE NÀY
├── style.css       ← giao diện & hiệu ứng
├── app.js          ← logic dựng trang + bộ icon
└── assets/         ← để ảnh đại diện và logo riêng của bạn
    ├── avatar.svg
    └── logo-mau.svg
```

## 1. Tùy chỉnh

Mở `config.js` và sửa:

| Muốn đổi | Sửa ở đâu |
|---|---|
| Tên, mô tả, tick xanh | `profile` |
| Ảnh đại diện | `profile.avatar` (bỏ ảnh vào `assets/`, ví dụ `"assets/toi.jpg"`) |
| Màu giao diện | `theme`: `forest`, `ocean`, `sunset`, `mono`, `light` |
| Tự chọn màu | `customColors`: `{ bg, button, accent, text }` |
| Icon mạng xã hội (hàng tròn) | `socials` |
| Các nút link chính | `links` |

### Thêm 1 link mới
Copy một dòng trong `links` rồi sửa:
```js
{ title: "Facebook", url: "https://facebook.com/tenban", icon: "facebook", color: "#1877f2" },
```

### Dùng logo riêng
1. Bỏ ảnh vào thư mục `assets/` (ví dụ `shop.png`, nên vuông).
2. Ghi `icon: "assets/shop.png"` (không cần `color`).

### Icon có sẵn
`twitter, x, instagram, tiktok, youtube, spotify, applemusic, bandcamp, soundcloud, facebook, github, linkedin, telegram, zalo, discord, twitch, threads, mail, phone, globe, link`

### Ví dụ tự chọn màu
```js
theme: "forest",
customColors: { bg: "#101820", button: "#1d3b53", accent: "#66d9ef", text: "#f5f5f5" },
```

## 2. Xem thử trên máy
Bấm đúp `index.html` là xem được. (Nếu trình duyệt chặn, chạy `python3 -m http.server` trong thư mục rồi mở `http://localhost:8000`.)

## 3. Đưa lên GitHub Pages
1. Tạo repository mới trên GitHub, ví dụ `bio`.
   - Muốn link đẹp `https://TEN-BAN.github.io` thì đặt tên repo đúng là `TEN-BAN.github.io`.
2. Tải toàn bộ file lên (nút **Add file → Upload files**, kéo thả cả thư mục, giữ nguyên cấu trúc).
3. Vào **Settings → Pages**.
4. Mục **Build and deployment → Source**: chọn **Deploy from a branch**, branch **main**, thư mục **/ (root)** → **Save**.
5. Đợi 1–2 phút. Link trang sẽ hiện ở đầu mục Pages: `https://TEN-BAN.github.io/bio/`.

Sau này chỉ cần sửa `config.js` trực tiếp trên GitHub (biểu tượng cây bút ✏️ → Commit) là trang tự cập nhật.

## Ghi chú
- Ảnh đại diện nên vuông, ≤ 500KB để tải nhanh.
- Trang tự tôn trọng chế độ "giảm chuyển động" của thiết bị.
- Font Quicksand tải từ Google Fonts; nếu offline sẽ dùng font hệ thống.
