PHẦN A - KIỂM TRA ĐỌC HIỂU
Câu A1:
---Inline---: 
<h2 style="color: blue; font-size: 24px;">Đây là tiêu đề màu xanh</h2>

Ưu điểm: Áp dụng nhanh chóng cho một phần tử duy nhất, không cần tạo file hoặc viết vùng chọn (selector) phức tạp. Có độ ưu tiên rất cao.

Nhược điểm: Làm code HTML trở nên rối rắm, khó đọc. Khó bảo trì vì nếu muốn sửa giao diện của nhiều thẻ giống nhau, bạn phải sửa từng thẻ một. Không tái sử dụng được code.

Khi nào nên dùng:
-Khi cần test nhanh một thuộc tính CSS.

-Khi muốn áp dụng một style đặc biệt, duy nhất cho một phần tử mà không muốn viết thêm vào file CSS chung.

---Internal---
<head>
    <style>
        p {
            color: green;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <p>Đoạn văn này sẽ có chữ màu xanh lá cây.</p>
</body>

Ưu điểm: Quản lý style của toàn bộ một trang web tại một nơi duy nhất. Có thể sử dụng các vùng chọn (class, id, tag) để áp dụng cho nhiều phần tử cùng lúc trong trang đó.

Nhược điểm: Chỉ có tác dụng trong phạm vi trang hiện tại, không thể tái sử dụng cho các trang khác trong cùng một website. Nếu viết quá nhiều CSS, file HTML sẽ rất dài.

Khi nào nên dùng
-Khi bạn đang viết một website đơn trang hoặc một trang đích độc lập.

-Khi trang đó có phong cách thiết kế hoàn toàn khác biệt với phần còn lại của website.

---External---

.btn-submit {
    background-color: red;
    color: white;
    padding: 10px 20px;
}
Ưu điểm: Tách biệt hoàn toàn giữa nội dung (HTML) và giao diện (CSS). Có thể dùng chung một file CSS cho hàng trăm trang web khác nhau, giúp website đồng bộ và cực kỳ dễ bảo trì. Trình duyệt có thể lưu bộ nhớ đệm (cache) file CSS giúp trang tải nhanh hơn ở các lần sau.

Nhược điểm: Tạo thêm một yêu cầu tải file (HTTP Request) từ server, nếu file CSS chưa tải xong thì trang web có thể bị lỗi hiển thị trong tích tắc.

Khi nào nên dùng
-Luôn luôn là lựa chọn ưu tiên hàng đầu khi xây dựng một trang web thực tế, đặc biệt là các website có từ 2 trang trở lên.

Câu A2
1. h1                           → Chọn: ShopTLU
2. .price                       → Chọn: 25.990.000đ / 45.990.000đ
3. #app header                  → Chọn: ShopTLU/Home/Products/About
4. nav a:first-child             → Chọn: Home
5. .product.featured h2         → Chọn: Macbook Pro
6. article > p                  → Chọn: 25.990.000đ/ Mô tả sản phẩm/45.990.000đ/Mô tả sản phẩm
7. a[href="/"]                  → Chọn: Home
8. .top-bar.dark h1              → Chọn: ShopTLU

Câu A3:
/* Trường hợp 1: content-box (mặc định) */
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 450px
→ Không gian chiếm trên trang = 470px

/* Trường hợp 2: border-box */
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400px
→ Kích thước content thực tế = 350px
→ Không gian chiếm trên trang = 420px

/* Trường hợp 3: Margin collapse */
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
→ Khoảng cách giữa box-a và box-b = 40px
→ Giải thích tại sao KHÔNG PHẢI 65px
Trong CSS, khi hai khối nằm dọc chồng lên nhau, các lề dọc (margin-top và margin-bottom) của chúng sẽ xảy ra hiện tượng Margin Collapse (Sụp đổ lề). Thay vì cộng dồn vào nhau (25px + 40px = 65px), trình duyệt sẽ so sánh và chỉ lấy giá trị lớn nhất làm khoảng cách giữa hai khối. Vì 40px > 25px nên khoảng cách thực tế là 40px

Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px, khoảng cách = bao nhiêu?
Khoảng cách thực tế: 30px
Quy tắc tính Margin Collapse khi có số âm:Nếu có sự kết hợp giữa lề dương và lề âm, trình duyệt sẽ lấy lề dương lớn nhất cộng với lề âm nhỏ nhất (âm nhất).Ở đây ta có:Lề dương lớn nhất = 40px, Lề âm nhỏ nhất = -10px 
Kết quả: 40px - 10px = 30px (Hai khối này sẽ bị hút lại gần nhau hơn, đè lên nhau một chút).

Câu A4:
1. Tính specificity score (a, b, c) cho mỗi rule
Dựa vào quy tắc trên, ta tính được điểm số của từng dòng như sau:
    Rule A (p): Chỉ có 1 thẻ HTML
        -> Score: (0,0,1)
    Rule B (.price): Chỉ có 1 Class
        -> Score: (0,1,0)
    Rule C (#main-price): Chỉ có 1 ID
        -> Score: (1,0,0)
    Rule D (p.price): Gồm 1 thẻ HTML (p) và 1 Class 
        -> Score: (0,1,1)
2. Element sẽ có màu gì?
 Kết quả: Element sẽ có màu đỏ.
 Trình duyệt sẽ so sánh điểm số từ trái qua phải (so sánh a trước, nếu a bằng nhau mới so sánh đến b, rồi đến c).
 Rule C có điểm a = 1 (do dùng ID selector #main-price), trong khi tất cả các Rule khác đều có a = 0. Vì (1, 0, 0) > (0, 1, 1) > (0, 1, 0) > (0, 0, 1), nên Rule C có độ ưu tiên cao nhất tuyệt đối trong 4 rules này.
3. Nếu thêm style nội dòng, element có màu gì?
Đoạn code: <p class="price" id="main-price" style="color: orange;">
Kết quả: Element đổi sang màu cam.
Kỹ thuật nhúng CSS trực tiếp vào thẻ HTML thông qua thuộc tính style (Inline CSS) có cấp độ ưu tiên vượt lên trên tất cả các bộ chọn ID, Class hay Element viết trong file CSS bên ngoài. Nó tương đương với một mức điểm nằm ở hàng cao hơn cả a (thường được ví là cột thứ 4: (1, 0, 0, 0)).
4. Nếu Rule A thêm !important, element có màu gì? Tại sao?Đoạn code khi sửa: p { color: black !important; }
Kết quả: Element sẽ có màu đen.
Từ khóa !important trong CSS không tham gia vào thang điểm số (a, b, c) thông thường mà nó là một "lệnh phá vỡ quy tắc". Khi bạn gắn !important vào sau một thuộc tính, bạn đang ra lệnh cho trình duyệt: "Bất kể các vùng chọn khác có điểm cao thế nào, hay thậm chí có dùng Inline CSS đi nữa, hãy bỏ qua hết và bắt buộc phải dùng giá trị này". Do đó, Rule A vốn có điểm thấp nhất lại quay xe thắng cuộc hoàn toàn.

Câu B2
Hộp 1 (content-box): chiều rộng thực tế = 350px px (đo từ DevTools)
Hộp 2 (border-box): chiều rộng thực tế = 300px (đo từ DevTools)
Giải thích sự khác biệt:
Với content-box, giá trị width: 300px chỉ áp dụng cho phần nội dung bên trong. Khi thêm padding và border, kích thước thực tế của hộp sẽ tăng lên.
Cụ thể: 300px + 40px padding + 10px border = 350px. Vì vậy hộp hiển thị lớn hơn kích thước đã khai báo.

Với border-box, giá trị width: 300px là kích thước tổng của cả hộp, đã bao gồm content, padding và border. Trình duyệt sẽ tự động giảm phần content để tổng chiều rộng vẫn giữ nguyên 300px.

Câu B3
Liệt kê 10 rules + specificity score
1. p → Specificity: (0,0,1) → Màu: Gray

2. div p → Specificity: (0,0,2) → Màu: Silver

3. .text → Specificity: (0,1,0) → Màu: Blue

4. p.text → Specificity: (0,1,1) → Màu: Green

5. .text.highlight → Specificity: (0,2,0) → Màu: Purple

6. p.text.highlight → Specificity: (0,2,1) → Màu: Brown

7. #demo → Specificity: (1,0,0) → Màu: Pink

8. p#demo → Specificity: (1,0,1) → Màu: Orange

9. .text#demo → Specificity: (1,1,0) → Màu: Cyan

10. #main-content p.text.highlight#demo → Specificity: (1,2,1) → Màu: Red

Element cuối cùng hiển thị màu gì? Tại sao?
Dòng chữ "Hello World" hiển thị màu đỏ.

Lý do:
#main-content p.text.highlight#demo
có độ ưu tiên cao nhất với specificity (1,2,1), nên trình duyệt sẽ áp dụng màu đỏ thay cho các màu khác.

Thay đổi thứ tự rules trong CSS file. Kết quả có đổi không? Giải thích.
Khi thay đổi vị trí các rule trong file CSS, kết quả vẫn không thay đổi. Chữ "Hello World" vẫn hiển thị màu đỏ.

Nguyên nhân là vì Rule 10 có specificity cao nhất nên luôn được ưu tiên, dù đặt ở đầu hay cuối file CSS.

Thứ tự viết CSS chỉ ảnh hưởng khi các selector có cùng specificity.

Phần C - DEBUG & SUY LUẬN
Câu C1:
1. Tính chiều rộng thực tế của sidebar và content (content-box!)
Kích thước hiển thị thực tế của từng khối sẽ bị dội lên do cộng thêm padding và border ra phía ngoài:
Chiều rộng hiển thị thực tế:
Sidebar:
300px (width) + 40px (padding trái + phải) + 2px (border trái + phải)
= 342px
Content: 
660px (width) + 60px (padding trái + phải) + 2px (border trái + phải)
= 722px

2.Giải thích tại sao layout bị vỡ
Tổng chiều rộng thực tế của cả 2 khối khi đặt cạnh nhau là:
342px + 722px = 1064px
Trong khi đó, khung chứa .container chỉ rộng cố định 960px.
 Vì 1064px > 960px (vượt quá giới hạn cho phép là 104px), trình duyệt không đủ không gian để xếp chúng chung một hàng nên đã lập tức đẩy khối .content xuống dòng mới.
 
2. Hai cách sửa khác nhau
Cách 1: Sử dụng border-box:
Chúng ta giữ nguyên kích thước bề rộng mong muốn trong CSS, chỉ cần ép trình duyệt tính toán padding và border tụt vào trong lòng hộp bằng thuộc tính box-sizing: border-box. 
Tuy nhiên, tổng width của 2 khối phải bằng đúng 960px.Ta chỉnh lại:sidebar là 300px, .content giảm xuống còn 660px (300px + 660px = 960px).
Cách 2: Không sử dụng border-box:
Chúng ta giữ cơ chế content-box mặc định, nhưng phải chủ động trừ bớt phần padding và border ra khỏi thuộc tính width khi khai báo để sau khi trình duyệt cộng dồn vào, kết quả trả về vừa khít mục tiêu:
Width khai báo mới cho Sidebar: 300px - 40px - 2px = 258px
Width khai báo mới cho Content: 660px - 60px - 2px = 598px
(Kiểm tra: (258 + 40 + 2) + (598 + 60 + 2)
= 300 + 660
= 960px)

Câu C2:
"Sản phẩm A" (h2) có font-size = 20px và color = green
    Về font-size: Thẻ h2 này bị tác động bởi bộ chọn .card .title. Điểm định danh (Specificity) của bộ chọn này là (0, 2, 0) nhờ có 2 Class. Không có bộ chọn nào khác tranh chấp kích cỡ chữ với nó, do đó nó nhận giá trị 20px.

    Về color: Phần tử này được nhắm đến bởi 3 bộ chọn màu sắc khác nhau:
        .card: Thừa kế màu blue.
        #featured .title: Định nghĩa màu red (Điểm Specificity rất cao: (1, 1, 0)).
        .highlight: Định nghĩa màu green !important

    Mặc dù bộ chọn số 2 có ID rất mạnh, nhưng bộ chọn số 3 sử dụng từ khóa !important. Trong cơ chế Cascade, !important là quyền tối cao cấu trúc, nó phá vỡ mọi thang điểm số thông thường và giành chiến thắng tuyệt đối. Do đó chữ có màu xanh lá (green).

"Mô tả sản phẩm" (p trong card featured) có color = blue
    Thẻ p này được target trực tiếp bởi quy tắc .card p { color: inherit; }.

    Từ khóa inherit (Kế thừa bắt buộc) ra lệnh cho thẻ p này phải lấy chính xác giá trị màu sắc từ phần tử cha trực tiếp chứa nó.

    Cha trực tiếp của nó là <div class="card" id="featured">. Mặc dù khối thẻ cha này bị định nghĩa màu đỏ cho thẻ tiêu đề (#featured .title), nhưng bản thân thuộc tính color gốc của khối .card vẫn đang là blue. Vì thế, thẻ p lấy màu từ cha và hiển thị màu xanh dương (blue).

"Sản phẩm B" (h2) có font-size = 20px và color = blue
    Về font-size: Tương tự như sản phẩm A, nó khớp hoàn toàn với bộ chọn .card .title -> nhận 20px.
    
    Về color: Khối card thứ hai này không có ID #featured, nó chỉ là một .card bình thường. Do đó, quy tắc duy nhất gán màu trực tiếp cho tiêu đề của nó là kế thừa màu từ lớp cha .card { color: blue; }. Vì không có bộ chọn nào khác tranh chấp màu sắc tại đây nên nó hiển thị màu xanh dương (blue).
    
"Mô tả sản phẩm B" (p.highlight) có color = green
    Thẻ p này nhận lệnh .card p { color: inherit; } (yêu cầu lấy màu xanh dương blue từ cha).

    Tuy nhiên, bản thân nó lại được gắn class highlight, kích hoạt bộ chọn .highlight { color: green !important; }.

    Một lần nữa, cơ chế Cascade tối cao của từ khóa !important xuất hiện, đè bẹp lệnh kế thừa inherit của chính nó trước đó. Do đó, đoạn văn này lập tức chuyển sang màu xanh lá (green).