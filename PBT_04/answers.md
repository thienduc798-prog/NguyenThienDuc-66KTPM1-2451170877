Phần A - Kiểm tra đọc hiểu
Câu A1:
 - Vẫn chiếm chỗ trong flow:
    static: có
    relative: có
    absolute: không
    fixed: không
    sticky: có - cho đến khi dính

 - Tham chiếu vị trí:
    static: không dùng
    relative: vị trí gốc
    absolute: cha gần nhất
    fixed: viewpoint
    sticky: viewpoint

 - Cuộn theo trang:
    static: có 
    relative: có
    absolute: có
    fixed: không
    sticky: có - cho đến khi dính

 - Use case:
    static: mặc định
    relative: làm Anchor
    absolute: Badge, dropdown, tooltip, overlay 
    fixed: Chat button, cookie banner, header
    sticky: sticky header, sticky table header, sidebar

Khi nào Absolute tham chiếu body:
    Khi không có bất kỳ phần tử tổ tiên nào được set position khác static. Khi đó, phần tử absolute sẽ "bay" lên tìm đến tận gốc trang web để làm mốc tọa độ.
Khi nào Absolute tham chiếu parent:
    Khi phần tử cha (hoặc bất kỳ tổ tiên nào gần nhất) có giá trị position khác static (tức là có relative, absolute, fixed, hoặc sticky).
"Nearest positioned ancestor" có nghĩa là tổ tiên có định vị gần nhất.

Khi bạn set position: absolute cho một phần tử con, trình duyệt sẽ lục ngược lên danh sách các phần tử cha (cha, ông, cụ...) để tìm xem có phần tử nào đã được khai báo position (tất nhiên là trừ giá trị mặc định static) hay không.

Ngay khi tìm thấy phần tử cha đầu tiên có position khác static, nó sẽ dừng lại và lấy phần tử đó làm hệ quy chiếu (0,0) cho tọa độ top, left, right, bottom.

Câu A2:
/* Trường hợp 1 */
.container { display: flex; }
.item { flex: 1; }
/* 4 items → Bố cục = | Item 1 | Item 2 | Item 3 | Item 4 | */

/* Trường hợp 2 */
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
/* 6 items → Bố cục =   */
| Item 1 | Item 2 |
| Item 3 | Item 4 |
| Item 5 | Item 6 |

/* Trường hợp 3 */
.container { display: flex; justify-content: space-between; align-items: center; }
/* 3 items → Bố cục = | Item 1     Item 2     Item 3 | */

/* Trường hợp 4 */
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
/* 3 items → Bố cục:  */
| 200px |  1fr (flex) | 200px |
| Item 1|   Item 2    | Item 3|

/* Trường hợp 5 */
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
/* 7 items → Bố cục =   */
| Item 1 | Item 2 | Item 3 |
| Item 4 | Item 5 | Item 6 |
| Item 7 |        |        |

C - Suy luận
Câu C1:
- Navigation bar ngang (logo + menu + buttons)
    Lựa chọn: Flexbox

    Đây là cấu trúc 1 chiều (nằm ngang). Flexbox cực kỳ mạnh trong việc căn chỉnh các nhóm phần tử (VD: Logo bên trái, Menu ở giữa, Button ở bên phải) bằng justify-content: space-between.
- Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
    Lựa chọn: Grid

    Grid sinh ra để làm các hệ thống lưới. Bạn chỉ cần grid-template-columns: repeat(3, 1fr) và gap, trình duyệt sẽ tự động xếp các ảnh vào các ô. Nếu số lượng ảnh thay đổi, Grid tự động tạo thêm hàng mới mà không cần can thiệp CSS.
- Layout blog: main content + sidebar
    Lựa chọn: Grid (hoặc kết hợp)

    Đây là khung xương của toàn bộ trang web (bố cục 2 chiều). Dùng Grid để chia tỷ lệ (ví dụ: grid-template-columns: 3fr 1fr) giúp kiểm soát layout chính dễ dàng hơn. Nếu muốn bên trong sidebar có các thành phần nhỏ căn chỉnh theo hàng, bạn có thể dùng thêm Flexbox bên trong sidebar đó.
- Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
    Lựa chọn: Grid

    Footer thường là một tập hợp các cột cố định. Grid giúp các cột này đều nhau tuyệt đối và giữ được sự nhất quán trên mọi kích thước màn hình chỉ với vài dòng code (repeat(4, 1fr)).
- Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
    Lựa chọn: Flexbox (với flex-direction: column)

    Trong một card, các phần tử cần xếp dọc theo 1 chiều. Bạn dùng display: flex; flex-direction: column;. Đặc biệt, để nút luôn dính đáy, bạn chỉ cần dùng margin-top: auto cho nút đó – đây là kỹ thuật "đắt giá" nhất của Flexbox.

Câu C2:
Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống
        .card không biết cách quản lý khoảng trống
    .card {
        width: 30%;
        margin: 1.5%;
        display: flex;             
        flex-direction: column;    
    }

    .card .btn {
        margin-top: auto;          
    }

Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên
        Thiếu thuộc tính căn chỉnh trên container .hero
    .hero {
        height: 100vh;
        display: flex;
        justify-content: center;   
        align-items: center;       
    }
    
Lỗi 3: Sidebar bị co lại khi content quá dài
        Trình duyệt mặc định cho phép các flex item co lại (flex-shrink: 1)
    .sidebar {
        width: 250px;
        flex-shrink: 0;            
    }

    .content {
        flex: 1;                  
    }