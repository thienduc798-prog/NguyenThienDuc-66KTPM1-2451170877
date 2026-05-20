Phần A - Đọc hiểu
Câu A1
/<768px(Mobile):
    Số cột: 1
    Trực quan hóa layout: Xếp chồng 4 hàng (mỗi box chiếm 12/12)
/<768px-991px(Tablet):
    Số cột: 2
    Trực quan hóa layout: 2 hàng, mỗi hàng 2 box (mỗi box chiếm 6/12)
/>=992px(Desktop):
    Số cột: 4
    Trực quan hóa layout: 1 hàng ngang, 4 box (mỗi box chiếm 3/12)

col-md-6:
    col: Viết tắt của "column"
    md: Viết tắt của "medium"
    6: Đại diện cho số phần (span) mà phần tử chiếm trên tổng số 12 cột
-> col-md-6 có nghĩa là "từ màn hình cỡ trung bình (768px) trở lên, phần tử này sẽ chiếm 50% độ rộng hàng"

không cần viết col-sm-12 vì:
    cột mặc định đã có thuộc tính width: 100% (tương đương với việc chiếm đủ 12 cột)
-> sử dụng class col-12 đã bao phủ trạng thái cho màn hình nhỏ, nên viết thêm col-sm-12 là dư thừa vì nó không thay đổi giá trị (width: 100%) đã được định nghĩa từ trước

Câu A2:
1. Giải thích class d-none d-md-block. Element này hiển thị khi nào, ẩn khi nào?
d-none: Ẩn phần tử hoàn toàn ở mọi kích thước màn hình (display: none)
d-md-block: Từ màn hình kích thước md (≥ 768px) trở lên, phần tử sẽ được hiển thị dưới dạng khối (display: block)  
-> Element này ẩn trên màn hình nhỏ (Mobile, < 768px) và hiển thị trên màn hình từ Tablet trở lên (≥ 768px).

2. Liệt kê 5 spacing utilities (margin/padding) và giải thích. VD: mt-3, px-4, mb-auto
    mt-3: Margin-top cấp 3. Tạo khoảng cách phía trên phần tử (thường là 1rem)
    px-4: Padding-x (padding trái và phải) cấp 4. Tạo khoảng trống bên trong phần tử theo chiều ngang (thường là 1.5rem)
    mb-auto: Margin-bottom: auto. Thường dùng trong Flexbox để đẩy phần tử lên trên cùng (phổ biến trong các nút "Mua ngay" đặt cuối card)  
    p-5: Padding tất cả các phía (trên, dưới, trái, phải) cấp 5. Tạo khoảng trống rộng bên trong phần tử
    ms-2: Margin-start (margin-left trong văn bản LTR) cấp 2. Tạo khoảng cách nhỏ ở phía bên trái phần tử

3. Sự khác nhau giữa .container, .container-fluid, .container-md?
.container
    Đặc điểm: Có max-width thay đổi theo từng breakpoint.
    Mục đích: Dùng cho nội dung trang web chính, giúp văn bản dễ đọc hơn trên màn hình lớn.

.container-fluid
    Đặc điểm: Luôn chiếm 100% chiều rộng màn hình ở mọi kích thước.
    Mục đích: Dùng cho các section full-width như banner, footer, hoặc navbar.

.container-md
    Đặc điểm: Full-width khi màn hình < 768px; có max-width cố định khi ≥ 768px
    Mục đích: Dùng khi muốn nội dung trải rộng trên mobile nhưng lại muốn giới hạn khung nhìn trên tablet và desktop.



