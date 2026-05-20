Phần A - Kiểm tra đọc hiểu
Câu A1
1.Khi gõ https://shopee.vn, thứ tự 5 bước xảy ra (từ DNS đến lookup render) là:
    1. Phân giải tên miền (DNS lookup)
    2. Thiết lập kết nối TCP và bắt tay TLS (TCP and TLS Handshake)
    3. Gửi yêu cầu HTTP (HTTP Request)
    4. Máy chủ phản hồi (HTTP Response)
    5. Render - Hiển thị trang web
2.Trong DevTools của Chrome, tab Network cho thấy thông tin:
    1. Name - Tên tài nguyên: tên của file hoặc tài nguyên được tải
    2. Status - Trạng thái: Mã phản hồi máy chủ báo cho  trình duyệt biết việc lấy file có thành công hay không
        200 - OK; 204 - No content; 304 - Not modified; 404 - Not found
    3. Type - Loại file: Cho biết định dạng tài nguyên đó
    4. Initiator - Nguồn khởi tạo: xác định nguồn gốc yêu cầu tải dữ liệu
    5. Size - Kích thước
    6. Time - Thời gian: Tổng thời gian từ khi trình duyệt yêu cầu cho đến khi nhận được byte cuối cùng

Câu A2:
Trang web dưới đây bị Google đánh giá SEO thấp vì:
 - Không sử dụng các thẻ định danh khu vực (Header, Nav, Main, Footer)
 - Thiếu các thẻ tiêu đề (Heading Tags - h1, h2, h3...)
 - Thẻ hình ảnh thiếu thuộc tính alt
 - Cấu trúc Menu chưa chuẩn (List)
 ---------------- Sau sửa ----------------
<header class="header">
    <div class="logo">ShopTLU</div>
    <nav class="menu">
        <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
        </ul>
    </nav>
</header>
<main class="main">
    <article class="product">
        <h1 class="title">iPhone 16 Pro</h1>
        <p class="price">25.990.000đ</p>
        <div class="image">
            <img src="iphone.jpg" alt="iPhone 16 Pro chính hãng giá tốt tại ShopTLU">
        </div>
    </article>
</main>
<footer class="footer">
    <p>© 2026 ShopTLU</p>
</footer>
-------------------------------------------
Câu A3:
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3

Thẻ <div>: bắt đầu trên 1 dòng và kéo dài đến hết chiều rộng
Thẻ <span>: chiếm độ rộng vừa đủ với nội dung bên trong
Thẻ <strong>: tương tự thẻ <span>, in đậm nội dung trong thẻ

Câu A4:
1. <thead> (Table Head - Đầu bảng)
Mục đích: Dùng để nhóm các hàng tiêu đề của bảng
Vị trí: Luôn nằm ở phần trên cùng của bảng.
Đặc điểm:
 - Giúp trình duyệt biết đâu là phần thông tin định danh cho các cột.
 - Khi in ấn: Nếu bảng dài nhiều trang, trình duyệt sẽ tự động lặp lại phần <thead> ở đầu mỗi trang giấy.
Khi cuộn có thể kết hợp CSS để giữ cố định tiêu đề (sticky header) khi người dùng cuộn xem dữ liệu phía dưới.

2. <tbody> (Table Body - Thân bảng)
Mục đích: Chứa nội dung chính (dữ liệu) của bảng.
Vị trí: Nằm giữa <thead> và <tfoot>.
Đặc điểm : Đây là nơi chứa phần lớn các hàng (<tr>) và ô dữ liệu (<td>).

3. <tfoot> (Table Foot - Chân bảng)
Mục đích: Nhóm các hàng tóm tắt hoặc tổng kết dữ liệu của bảng.
Vị trí: Hiển thị ở cuối bảng.
Đặc điểm: Tương tự như <thead>, khi in các bảng dài, phần <tfoot> thường được lặp lại ở cuối mỗi trang giấy.

Không nên dùng <table> để tạo layout vì:
 - <table> sinh ra có mục đích duy nhất là hiển thị dữ liệu bảng, dùng để tạo layout sẽ giảm SEO và tính tiếp cận website.
 - <table> có cấu trúc chắc chắn, cứng nhắc nên khi sử dụng điện thoại, khó điều chỉnh các cột của bảng xếp chồng lên nhau 1 cách linh hoạt.
 - Trình duyệt phải nhận toàn bộ mã nguồn của bảng mới hiển thị ra màn hình, người dùng phải chờ lâu hơn.

 -> Table chỉ cho dữ liệu tabular — không bao giờ dùng để layout. External link = luôn thêm target="_blank" rel="noopener noreferrer".

 Phần C - Suy luận
 Câu C1:
Header + Navigation
<header><!--Nhóm các thành phần đầu trang như logo và thanh tìm kiếm-->
    <nav>         <!--Chứa các liên kết điều hướng chính của website-->
        <ul> <!--Danh sách các thư mục-->
            <li><a href="#">Trang chủ</a></li> <!-- li: Mục menu trong danh sách-->
            <li><a href="#">Danh mục</a></li> <!--a: liên kết có thể nhấp vào được-->
        </ul>
    </nav>
</header>

Breadcrumb 
<nav aria-label="breadcrumb"><!--Breadcrumb cũng là một dạng điều hướng nên dùng thẻ nav-->
    <ol><!--Breadcrumb có tính thứ tự từ lớn đến nhỏ nên dùng danh sách có thứ tự-->
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Điện thoại</a></li>
        <li>iPhone 16</li>
    </ol>
</nav>

Khu vực ảnh sản phẩm (5 ảnh)
<div class="thumbnail-list"> <!--Nhóm các phần tử lại với nhau-->
    <img src="thumb1.jpg" alt="Ảnh góc cạnh 1"><!--chèn 1 hình ảnh vào trang web-->
    ...
    <img src="thumb5.jpg" alt="Ảnh góc cạnh 5">
</div>

Thông tin sản phẩm (tên, giá, đánh giá sao, mô tả)
<article class="product-details"><!--Chứa thông tin chi tiết sản phẩm, có thể đứng độc lập-->
    <h1>Tên sản phẩm iPhone 16</h1> <!--Tiêu đề quan trọng nhất của trang-->
    <p class="price">29.990.000đ</p> <!--Đoạn văn bản chứa giá-->
    <div class="rating">
        <span>5 sao</span><!--Nổi bật nội dung-->
    </div>
    <p class="summary">Mô tả ngắn về sản phẩm...</p>
</article>

Bảng thông số kỹ thuật
<section class="specifications">
    <h2>Thông số kỹ thuật</h2> <!-- Tiêu đề phụ cho khối thông số -->
        <table> <!-- Dùng đúng mục đích để hiển thị dữ liệu đối chiếu dạng hàng/cột -->
            <tbody> <!-- Nhóm các dòng nội dung của bảng thông số -->
                <tr>
                    <th>Màn hình</th> <!-- Tiêu đề của một ô dữ liệu -->
                    <td>6.1 inch</td> <!-- Dữ liệu của ô -->
                </tr>
            </tbody>
        </table>
</section>

Khu vực đánh giá/bình luận
<section class="user-reviews">
    <h2>Đánh giá từ khách hàng</h2>
        <article class="comment"><!--Mỗi bình luận là một nội dung độc lập-->
            <header><strong>Nguyễn Văn A</strong></header>
            <p>Sản phẩm rất tuyệt vời!</p>
        </article>
</section>

Sidebar: Sản phẩm tương tự
<aside class="sidebar"> <!-- Chứa nội dung liên quan gián tiếp (sidebar) như sản phẩm tương tự -->
    <h3>Sản phẩm tương tự</h3>
    <ul> <!-- Danh sách sản phẩm không cần thứ tự ưu tiên -->
        <li><a href="#">iPhone 15 Pro</a></li>
        <li><a href="#">Samsung S24</a></li>
    </ul>
</aside>

Footer
<footer><!-- Chứa thông tin bản quyền, liên hệ cuối trang -->
    <p>&copy; 2024 Cửa hàng điện thoại</p>
</footer>

Câu C2:
Việc lạm dụng thẻ <div> cho mọi thành phần trên trang web và phụ thuộc hoàn toàn vào class là một tư duy lập trình thiếu bền vững, gây ra nhiều hệ lụy về mặt kỹ thuật mà các class không thể khỏa lấp được. Đầu tiên là vấn đề SEO, các công cụ tìm kiếm như Google dựa vào cấu trúc Semantic HTML để xác định trọng tâm của nội dung; một trang web chỉ toàn <div> sẽ khiến bot gặp khó khăn trong việc phân tích, dẫn đến việc xếp hạng bị ảnh hưởng tiêu cực. Thứ hai là khả năng truy cập (Accessibility), vì các thiết bị hỗ trợ người khiếm thị như Screen Reader chỉ có thể nhận diện và điều hướng nhanh qua các thẻ đặc thù như <nav> hay <main>, việc dùng <div> vô hình trung đã cô lập một nhóm đối tượng người dùng quan trọng. Chẳng hạn, khi sử dụng thẻ <button> thay vì <div class="btn">, trình duyệt sẽ tự động cung cấp các tính năng mặc định như tương tác bằng phím Enter hoặc Space mà không cần thêm một dòng mã JavaScript nào, giúp tối ưu hiệu suất và giảm thiểu lỗi. Tất nhiên, thẻ <div> vẫn đóng vai trò không thể thay thế khi chúng ta cần những lớp bọc (wrapper) thuần túy cho mục đích dàn trang hoặc tạo hiệu ứng hình ảnh phức tạp vốn không mang ý nghĩa về nội dung. Vì vậy, sự kết hợp thông minh giữa Semantic HTML và <div> mới là chìa khóa để tạo ra một sản phẩm web chuyên nghiệp, dễ bảo trì và thân thiện với mọi người dùng.

