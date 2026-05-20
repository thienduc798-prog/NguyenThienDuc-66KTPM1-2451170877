Câu A1:
Liệt kê 10 input types trong HTML5:
1. type = "email" -> Ô nhập text, tự kiểm tra có @ -> Dùng cho form đăng ký
2. type="password"  Ô nhập ẩn ký tự bằng dấu chấm hoặc dấu sao -> Dùng cho form đăng nhập hoặc thay đổi thông tin bảo mật của khách hàng

3. type="number" -> Ô nhập chỉ cho phép số, có hai nút mũi tên lên/xuống ở góc -> Dùng để chọn số lượng sản phẩm muốn thêm vào giỏ hàng (thường đi kèm thuộc tính min="1")

4. type="tel" -> Ô nhập văn bản tối ưu cho bàn phím số trên điện thoại, không tự động kiểm tra định dạng (thường dùng kèm thuộc tính pattern) -> Dùng để nhập số điện thoại giao hàng

5. type="date" -> Hiển thị một trình chọn lịch (Calendar pick) để chọn ngày/tháng/năm -> Dùng để chọn ngày dự kiến nhận hàng hoặc nhập ngày sinh để nhận ưu đãi thành viên

6. type="color" -> Hiển thị một ô màu, khi nhấn vào sẽ mở bảng chọn màu sắc của hệ điều hành -> Dùng trong bộ lọc tìm kiếm sản phẩm theo màu sắc (ví dụ: tìm áo thun màu xanh, đỏ...)

7. type="range" -> Hiển thị một thanh trượt (slider) để chọn giá trị trong một khoảng nhất định -> Dùng cho bộ lọc khoảng giá sản phẩm (Price Range) từ thấp đến cao

8. type="file" -> Hiển thị nút "Chọn tệp" (Choose File) để tải tệp từ máy tính lên -> Dùng khi khách hàng muốn tải ảnh chụp thực tế sản phẩm lên phần đánh giá (Review)

9. type="search" -> Ô nhập văn bản có thêm nút "x" để xóa nhanh nội dung đã nhập, tối ưu cho các công cụ tìm kiếm -> Dùng làm thanh tìm kiếm sản phẩm trên đầu trang web

10. type="checkbox" -> Hiển thị một ô vuông nhỏ để tích chọn hoặc bỏ chọn -> Dùng để khách hàng chọn nhiều tiêu chí cùng lúc (ví dụ: chọn cùng lúc nhiều thương hiệu "Samsung", "Apple" trong bộ lọc)

Câu A2
1. <input type="text" required value="">
Trình duyệt sẽ chặn lại và hiển thị thông báo lỗi vì thuộc tính required bắt buộc người dùng không được để trống ô nhập liệu. Vì value="" (trống), điều kiện này bị vi phạm


2. <input type="email" value="abc">
Trình duyệt hiển thị thông báo lỗi yêu cầu định dạng email hợp lệ vì type="email" kích hoạt bộ kiểm tra định dạng tự động. Một email hợp lệ bắt buộc phải có ký tự @. Chuỗi "abc" không khớp với cấu trúc này


3. <input type="number" min="1" max="10" value="15">
Trình duyệt báo lỗi giá trị phải nhỏ hơn hoặc bằng 10 vì thuộc tính max="10" thiết lập giới hạn trên cho dữ liệu. Giá trị 15 đã vượt quá ngưỡng cho phép, vi phạm quy tắc validation về khoảng số (Range validation)


4. <input type="text" pattern="[0-9]{10}" value="abc123">
Trình duyệt báo lỗi dữ liệu không khớp với định dạng yêu cầu vì thuộc tính pattern sử dụng biểu thức chính quy (Regex). [0-9]{10} yêu cầu người dùng phải nhập đúng 10 chữ số (ví dụ: số điện thoại). Chuỗi "abc123" vừa chứa chữ, vừa không đủ độ dài nên bị từ chối


5. <input type="password" minlength="8" value="123">
Trình duyệt yêu cầu tăng độ dài văn bản lên tối thiểu 8 ký tự vì thuộc tính minlength="8" bắt buộc chuỗi nhập vào phải có ít nhất 8 ký tự. Giá trị "123" chỉ có 3 ký tự, không thỏa mãn điều kiện tối thiểu để đảm bảo an toàn mật khẩu

Câu A3:
1. Tại sao <label for="email"> quan trọng?
Với máy (Screen Reader): Khi người khiếm thị chuyển con trỏ vào ô nhập liệu, máy sẽ đọc to nội dung trong thẻ <label> tương ứng. Nếu không có sự kết nối này, máy chỉ báo là "ô trống", người dùng sẽ không biết phải nhập thông tin gì

Với người (UX): Giúp mở rộng vùng bấm. Người dùng có thể nhấn vào dòng chữ "Email" để con trỏ tự động nhảy vào ô nhập liệu, cực kỳ hữu ích cho người dùng điện thoại hoặc người có cử động tay không linh hoạt

2. Khi nào dùng <fieldset> + <legend>?
Khi nào: Dùng khi bạn có một nhóm các lựa chọn liên quan mật thiết (thường là Radio hoặc Checkbox)

Mục đích: Tạo ra một "hàng rào" ngữ cảnh. legend đóng vai trò là tiêu đề của nhóm đó

Ví dụ: Nhóm chọn "Phương thức thanh toán" (COD, Ví điện tử, Thẻ tín dụng). Nếu không có thẻ này, máy đọc sẽ chỉ đọc tên từng nút mà không cho người dùng biết các nút đó dùng để chọn cái gì

3. aria-label dùng khi nào? Tại sao KHÔNG nên dùng aria-label khi đã có <label>?
 Chỉ dùng khi giao diện không có chữ (ví dụ: nút chỉ có icon cái kính lúp hoặc dấu X). Nó cung cấp một cái tên "ẩn" cho máy đọc

Tại sao không dùng chung với <label>:
aria-label có mức độ ưu tiên cao nhất, nó sẽ "xóa sạch" thông tin của thẻ <label> trong tai người dùng máy đọc
Thẻ label tốt hơn vì nó vừa giúp máy đọc, vừa giúp người dùng bình thường tương tác tốt hơn

Câu A4:
1. Thuộc tính loading="lazy" trên thẻ <img>
Đây là kỹ thuật "tải lười". Trình duyệt sẽ trì hoãn việc tải hình ảnh cho đến khi người dùng cuộn trang đến gần vị trí của tấm ảnh đó

Tác dụng: Giảm dung lượng dữ liệu cần tải ban đầu, giúp trang web hiện ra nhanh hơn

Không dùng cho các ảnh nằm ở phần trang web hiện ra ngay lập tức khi vừa load mà chưa cần cuộn. Nếu lazy load các ảnh này, người dùng sẽ thấy một khoảng trắng trước khi ảnh hiện ra, gây trải nghiệm xấu

2. Tại sao nên cung cấp nhiều <source> trong thẻ <video>?
Mỗi trình duyệt hỗ trợ các bộ giải mã khác nhau. Việc cung cấp nhiều source giúp trình duyệt tự chọn định dạng tốt nhất mà nó có thể đọc được. Nếu không đọc được file đầu tiên, nó sẽ thử file tiếp theo thay vì báo lỗi không xem được video

3 format video web phổ biến:

MP4 : Phổ biến nhất, hỗ trợ gần như 100% trình duyệt và thiết bị

WebM: Do Google phát triển, dung lượng nhẹ hơn MP4 nhưng chất lượng tương đương, hỗ trợ tốt trên Chrome/Firefox

Ogg (Theora): Format mã nguồn mở, ít phổ biến hơn nhưng vẫn được dùng để hỗ trợ các hệ thống cũ

3. Thuộc tính alt trên thẻ <img>
Tác dụng: Cung cấp nội dung mô tả bằng văn bản cho hình ảnh. Nó quan trọng cho SEO (giúp Google hiểu ảnh nói gì) và Accessibility (giúp trình đọc màn hình mô tả ảnh cho người khiếm thị)

Ảnh sản phẩm iPhone 16: alt="iPhone 16 màu Titan Sa mạc nhìn từ mặt lưng"
Ảnh trang trí (decorative): alt="" 
Ảnh biểu đồ doanh thu Q1/2026: alt="Biểu đồ cột cho thấy doanh thu Q1/2026 tăng 15% so với cùng kỳ năm trước"

Câu A5:
1. Khi nào dùng Cách 1 (<img>)?
Dùng khi hình ảnh là một phần không thể tách rời của nội dung hiện tại, hoặc khi ảnh đó chỉ mang tính chất biểu tượng, trang trí, không cần giải thích thêm bằng chữ

Ví dụ thực tế: Logo trên Header: Logo công ty thường chỉ cần thẻ <img> với alt="Tên công ty". Nó không cần chú thích bên dưới vì ai cũng hiểu đó là logo

2. Khi nào dùng Cách 2 (<figure>)?
Dùng khi hình ảnh là một đối tượng nội dung cụ thể mà bạn muốn người đọc chú ý, có chú thích đi kèm để cung cấp thêm thông tin (giá cả, nguồn, tên tác giả, mô tả chi tiết)

Ví dụ thực tế: Ảnh minh họa trong bài báo/Blog: Một tấm ảnh về phong cảnh kèm chú thích: "Hình 1: Vịnh Hạ Long nhìn từ trên cao - Nguồn: Wikipedia". Nếu bạn nhấc tấm ảnh này xuống cuối bài, nội dung bài viết vẫn không bị mất nghĩa, và người đọc vẫn hiểu ảnh đó nói về cái gì nhờ vào chú thích

Phần C - Phân tích suy luận
Câu C1:

Lỗi 1: Dòng 2 — Input "Tên" không có thẻ <label for="..."> liên kết và thiếu thuộc tính name, vi phạm Accessibility và không gửi được dữ liệu.
Sửa: <label for="fullname">Tên:</label> <input type="text" id="fullname" name="fullname" required>

Lỗi 2: Dòng 4 — Input Email thiếu <label>, chỉ dùng placeholder. Placeholder biến mất khi gõ gây khó cho người dùng và Screen Reader không đọc được label.
Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" required placeholder="email@example.com">

Lỗi 3: Dòng 6 — Input Mật khẩu thiếu thuộc tính minlength. Mật khẩu không nên quá ngắn để đảm bảo bảo mật.
Sửa: <label for="pass">Mật khẩu:</label> <input type="password" id="pass" name="pass" minlength="8" required>

Lỗi 4: Dòng 7 — Input Nhập lại mật khẩu có id hoặc name trùng lặp hoặc thiếu, gây khó khăn cho việc xử lý dữ liệu.
Sửa: <label for="repass">Nhập lại mật khẩu:</label> <input type="password" id="repass" name="repass" required>

Lỗi 5: Dòng 9 — Input Phone dùng type="text". Điều này không hiện bàn phím số trên mobile và thiếu kiểm tra định dạng.
Sửa: <label for="tel">Phone:</label> <input type="tel" id="tel" name="tel" pattern="[0-9]{10}">

Lỗi 6: Dòng 11 — Thẻ <select> không có id để liên kết label và thiếu thuộc tính name.
Sửa: <label for="city">Thành phố:</label> <select id="city" name="city">...</select>

Lỗi 7: Dòng 16 — Thẻ <label> bao quanh văn bản nhưng không chứa thẻ <input type="checkbox"> bên trong và thiếu thuộc tính required cho checkbox đồng ý.
Sửa: <input type="checkbox" id="agree" name="agree" required> <label for="agree">Tôi đồng ý điều khoản</label>

Lỗi 8: Dòng 20 — Dùng <input type="submit"> thay vì thẻ <button type="submit">. Thẻ button linh hoạt hơn và là best practice hiện đại.
Sửa: <button type="submit">Gửi</button>