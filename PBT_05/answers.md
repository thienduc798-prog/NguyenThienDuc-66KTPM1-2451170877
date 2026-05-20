Phần A - kiểm tra đọc hiểu
Câu A1:
<meta name="viewport" content="width=device-width, initial-scale=1.0">

Nếu không có thẻ này, các trình duyệt trên điện thoại (đặc biệt là iOS) sẽ giả định trang web của bạn được thiết kế cho màn hình desktop (thường mặc định là 980px).

Desktop-First:
Viết CSS cho màn hình lớn trước, sau đó dùng Media Query để "bóp" lại cho màn hình nhỏ.

.container { width: 1200px; }

@media (max-width: 768px) {
    .container { width: 100%; }
}

Mobile-First
Viết CSS cho màn hình nhỏ trước, sau đó dùng Media Query để "nới rộng" cho màn hình lớn hơn.

.container { width: 100%; }

@media (min-width: 768px) {
    .container { width: 768px; }
}

Tại sao Mobile-First được khuyên dùng?
    Khi màn hình hạn chế, bạn chỉ giữ lại những gì cần thiết. Khi mở rộng sang desktop, bạn mới thêm thắt các chi tiết trang trí hoặc bố cục phức tạp.

    Lưu lượng truy cập web từ di động hiện nay chiếm hơn 60-70%. Thiết kế cho mobile trước đảm bảo đa số người dùng của bạn có trải nghiệm mượt mà nhất.

    Mobile-First sẽ ít dòng hơn, dễ bảo trì hơn vì bạn chỉ ghi đè những gì cần thiết khi màn hình lớn ra.

Câu A2:
Kích thước:
    Extra small:   < 576px
    Small:   >= 576px
    Medium:   >= 768px
    Large:   >= 992px
    Extra large:   >= 1200px
    Extra extra large:   >= 1400px

Thiết bị đại diện:
    Extra small: Mobile
    Small: Tablet
    Medium: Tablet
    Large: Laptop
    Extra large: Desktop tiêu chuẩn
    Extra extra large: Màn hình lớn

Số cột:
    Extra small: 1
    Small: 2
    Medium: 3
    Large: 4
    Extra large: 5
    Extra extra large: 6

Câu A3:
375px(iPhone SE) -> container width: 100%
600px -> container width: 540px
800px -> container width: 720px
1000px -> container width: 960px
1400px -> container width: 1140px

Câu A4:
Variables ($primary-color): Biến giúp lưu trữ các giá trị tái sử dụng nhiều lần (màu sắc, font, kích thước). Khi cần thay đổi, chỉ cần sửa ở một nơi duy nhất.

    $primary-color: #2563eb;
    $font-base: 'Arial', sans-serif;

    .btn { background-color: $primary-color; font-family: $font-base; }


Nesting (viết CSS lồng nhau): Có thể lồng các class con vào trong class cha, giúp code phản ánh đúng cấu trúc HTML.

    .navbar {
        background: #333;
    .menu {            
        color: white;
        &:hover {     
            color: red;
        }
    }
}

Mixins (@mixin, @include): Cho phép đóng gói một nhóm thuộc tính CSS và tái sử dụng chúng ở bất kỳ đâu.

    @mixin flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .box { @include flex-center; }

@extend / Inheritance: cho phép một selector thừa hưởng toàn bộ các thuộc tính từ một selector khác, giúp tránh lặp lại code khi các phần tử có chung kiểu dáng.

    .btn { padding: 10px; border-radius: 5px; }
    .btn-success {
        @extend .btn;
        background: green;
    }

Các trình duyệt web (Chrome, Firefox, Safari...) chỉ hiểu được ngôn ngữ CSS thuần (Vanilla CSS). File .scss chứa các cú pháp mở rộng (biến, hàm, mixin) mà trình duyệt không được thiết kế để xử lý.

Các bước chuyển đổi SCSS → CSS:

Viết code trong file .scss.

Sử dụng một "Compiler" (như Live Sass Compiler trong VS Code, Webpack, Vite, hoặc Dart Sass) để đọc file .scss và "dịch" nó sang file .css chuẩn.

Sử dụng: File .css sau khi được biên dịch sẽ được trình duyệt tải và hiển thị như một file CSS bình thường.


Phần C - Phân tích
Câu C1:
VNExpress
Navigation:
    Mobile(375px): Menu dạng Hamburger ẩn bên trái.
    Tablet (768px): Xuất hiện thêm vài danh mục chính, menu vẫn gọn.
    Desktop (1440px): Header full menu danh mục (Thời sự, Thế giới, Kinh doanh...).
Lưới Content:
    Mobile (375px): 1 cột duy nhất (trải dọc).
    Tablet (768px): 2 cột (Main content + 1 cột phụ).
    Desktop (1440px): 3 cột (Sidebar + Main + Tin nổi bật).
Element ẩn:
    Mobile (375px): Các banner quảng cáo bên hông, tin liên quan bị ẩn/đẩy xuống dưới. 
    Tablet (768px): Ẩn bớt các cột phụ để tập trung nội dung.
    Desktop (1440px): Hiển thị đầy đủ sidebar, quảng cáo, tin theo dòng thời gian.
Font size:
    Mobile (375px): Nhỏ hơn để tối ưu diện tích.
    Tablet (768px): Trung bình, dễ đọc.
    Desktop (1440px): Lớn hơn, khoảng cách (line-height) thoáng hơn.


Câu C2:
Mobile (375px):
┌──────────────────────┐
│ [Logo]         [Gọi] │  <-- Header (Fixed)
├──────────────────────┤
│                      │
│     HERO BANNER      │  <-- Ảnh lớn hấp dẫn
│                      │
├──────────────────────┤
│    FORM ĐẶT BÀN      │  <-- Đưa lên cao để dễ chốt đơn
│ [Ngày][Giờ][Số người]│
│       [ĐẶT NGAY]     │
├──────────────────────┤
│  MÓN ĂN (1 cột)      │
│ [Ảnh 1]              │
│ [Ảnh 2]              │
├──────────────────────┤
│    BẢN ĐỒ MAPS       │
├──────────────────────┤
│       FOOTER         │
└──────────────────────┘

Tablet (768px):
┌──────────────────────┐
│ [Logo] [Menu]  [Gọi] │
├──────────────────────┤
│                      │
│     HERO BANNER      │
│                      │
├──────────────────────┤
│     FORM ĐẶT BÀN     │
├──────────────────────┤
│  MÓN ĂN (2 cột)      │
│ [Ảnh 1]    [Ảnh 2]   │
│ [Ảnh 3]    [Ảnh 4]   │
├──────────────────────┤
│  MAPS    |  FOOTER   │
└──────────────────────┘

Desktop (1440px):
┌───────────────────────────────────────┐
│ [Logo]      [Menu...]          [Gọi]  │
├───────────────────────────────────────┤
│                                       │
│             HERO BANNER               │
│                                       │
├───────────────────┬───────────────────┤
│                   │                   │
│  LƯỚI MÓN ĂN      │   FORM ĐẶT BÀN    │
│  (3 cột - 6 ảnh)  │   (Sticky)        │
│ [Ảnh 1] [Ảnh 2]   │                   │
│ [Ảnh 3] [Ảnh 4]   │   [BẢN ĐỒ MAPS]   │
│                   │                   │
├───────────────────┴───────────────────┤
│               FOOTER                  │
└───────────────────────────────────────┘

CSS Skeleton 
.container {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
}

/* --- Mobile First --- */
.header, .hero, .form-booking, .grid-food, .map, .footer {
    grid-column: 1 / -1;
}

.grid-food {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
}

/* --- Tablet (768px) --- */
@media (min-width: 768px) {
    .grid-food {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* --- Desktop (1024px) --- */
@media (min-width: 1024px) {
    .container {
        grid-template-columns: 1fr 300px;
    }
    
    .header, .hero, .footer {
        grid-column: 1 / -1;
    }

    .grid-food {
        grid-template-columns: repeat(3, 1fr);
    }

    .form-booking {
        grid-column: 2 / 3;
    }
}


Câu B
<sass scss/style.scss style.css>
<sass --watch scss/style.scss:style.css>