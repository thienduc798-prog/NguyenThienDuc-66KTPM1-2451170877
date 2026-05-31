PHẦN A — KIỂM TRA ĐỌC HIỂU
Câu A1:
Thứ tự output:
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms

1. Chạy code đồng bộ trước
console.log("1 - Start");
console.log("4 - End");

Output:
1 - Start
4 - End

2. Chạy Microtask Queue
Promise.resolve().then(...)

Output:
3 - Promise
6 - Promise 2

Trong 6 - Promise 2 có:
setTimeout(() => console.log("7 - Nested timeout"), 0);
→ Được thêm vào Macrotask Queue.

3. Chạy Macrotask Queue
setTimeout(..., 0)

Output:
2 - Timeout 0ms
7 - Nested timeout

4. Sau 100ms

Output:
5 - Timeout 100ms


Event Loop
Cơ chế giúp JavaScript xử lý các tác vụ bất đồng bộ.

Microtask Queue
Ưu tiên cao hơn.
Chứa:
    Promise.then()
    Promise.catch()
    Promise.finally()
    queueMicrotask()

Macrotask Queue
Ưu tiên thấp hơn.
Chứa:
    setTimeout()
    setInterval()


Câu A2:
async function getData() {
    → Khai báo hàm async, cho phép dùng await bên trong. Hàm luôn trả về một Promise.
    try {
        const response = await fetch("https://api.example.com/data");
        → Gửi HTTP request đến API.
        → fetch() trả về Promise<Response>.
        → await chờ server trả về Response rồi mới chạy tiếp.

        if (!response.ok) {
            → Kiểm tra request có thành công không.
            → response.ok === true khi status từ 200 đến 299.
            → false với các status như:
                404 Not Found
                401 Unauthorized
                500 Internal Server Error

            throw new Error(`HTTP ${response.status}`);
        }
        → Tự tạo lỗi để chuyển xuống catch.
        → Cần làm vậy vì fetch() không tự throw khi gặp 404, 500,...

        const data = await response.json();
        → Đọc nội dung body và chuyển JSON thành object JavaScript.
        → response.json() cũng trả về Promise nên cần await.
        
        return data;
        → Trả dữ liệu cho nơi gọi hàm.
        → Vì đây là async function nên thực chất trả về Promise.resolve(data).
    
    } catch (error) {
        → Bắt mọi lỗi xảy ra trong khối try.
        
        console.error("Failed:", error.message);
        → In thông báo lỗi ra Console.
        
        return null;
    }   → Trả về null khi có lỗi để báo cho code bên ngoài biết request thất bại.
}

Câu A3:
                 Promise
                     │
                     ▼
                  PENDING
            (Đang chờ kết quả)
                     │
         ┌───────────┴───────────┐
         │                       │
         ▼                       ▼
    FULFILLED                 REJECTED
    (Thành công)            (Thất bại)
         │                       │
         ▼                       ▼
      .then()                .catch()



PHẦN C — PHÂN TÍCH
Câu C1:
Network Error (Mất mạng)

Nguyên nhân: Wi-Fi mất kết nối, Internet chập chờn.

Xử lý:

Bắt lỗi bằng try...catch.
Thông báo người dùng.
Retry tự động 3 lần.
try {
    const response = await fetch(url);
} catch (error) {
    console.log("Mất kết nối mạng");
}

2. API Error
404 Not Found

→ Dữ liệu không tồn tại.

if (response.status === 404) {
    throw new Error("Không tìm thấy dữ liệu");
}

500 Internal Server Error

→ Lỗi từ server.

if (response.status === 500) {
    throw new Error("Lỗi máy chủ");
}

429 Too Many Requests

→ Gửi quá nhiều request.

if (response.status === 429) {
    throw new Error("Quá nhiều yêu cầu");
}

3. Timeout (>10s)

Mục đích: Hủy request nếu API phản hồi quá chậm.

async function fetchWithTimeout(url, ms = 10000) {
    const controller = new AbortController();

    setTimeout(() => controller.abort(), ms);

    return fetch(url, {
        signal: controller.signal
    });
}

4. Retry Logic (Thử lại 3 lần)

Dùng cho: lỗi mạng tạm thời.

async function fetchWithRetry(url, maxRetries = 3) {
    let retries = 0;

    while (retries <= maxRetries) {
        try {
            return await fetch(url);
        } catch (error) {
            retries++;

            if (retries > maxRetries) {
                throw error;
            }
        }
    }
}
Câu C2 (10đ) — Promise.all vs Promise.allSettled vs Promise.race

| Method                 | Khi nào resolve?              | Khi nào reject?           | Use case                        |
| ---------------------- | ----------------------------- | ------------------------- | ------------------------------- |
| `Promise.all()`        | Tất cả Promise thành công     | Chỉ cần 1 Promise lỗi     | Cần toàn bộ dữ liệu             |
| `Promise.allSettled()` | Khi tất cả Promise hoàn thành | Không bao giờ reject      | Muốn biết kết quả từng Promise  |
| `Promise.race()`       | Promise đầu tiên resolve      | Promise đầu tiên reject   | Timeout, lấy kết quả nhanh nhất |
| `Promise.any()`        | Promise đầu tiên resolve      | Tất cả Promise đều reject | Nhiều nguồn dự phòng            |

1. Promise.all()
Trang Product Detail cần:

* Thông tin sản phẩm
* Đánh giá sản phẩm
* Sản phẩm liên quan

Thiếu 1 trong 3 thì không hiển thị được trang.

async function loadProductPage(id) {

    const [product, reviews, related] =
        await Promise.all([
            fetch(`/api/products/${id}`).then(r => r.json()),
            fetch(`/api/reviews/${id}`).then(r => r.json()),
            fetch(`/api/related/${id}`).then(r => r.json())
        ]);

    console.log(product);
    console.log(reviews);
    console.log(related);
}

2. Promise.allSettled()
Dashboard Admin:

* Thống kê doanh thu
* Danh sách user
* Danh sách đơn hàng

Một API lỗi vẫn muốn hiển thị các phần còn lại.

async function loadDashboard() {

    const results = await Promise.allSettled([
        fetch("/api/revenue"),
        fetch("/api/users"),
        fetch("/api/orders")
    ]);

    console.log(results);
}

3. Promise.race()
API quá chậm thì timeout sau 10 giây.

async function fetchWithTimeout(url) {

    const response = await Promise.race([

        fetch(url),

        new Promise((_, reject) =>
            setTimeout(
                () => reject(new Error("Timeout")),
                10000
            )
        )

    ]);

    return response;
}

 4. Promise.any()
Có nhiều server mirror:

* Server VN
* Server Singapore
* Server Nhật

Chỉ cần 1 server phản hồi thành công.

async function getProducts() {

    const response = await Promise.any([

        fetch("https://vn-api.com/products"),

        fetch("https://sg-api.com/products"),

        fetch("https://jp-api.com/products")

    ]);

    return response.json();
}
