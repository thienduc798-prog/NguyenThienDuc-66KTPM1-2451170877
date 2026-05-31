Phần A - 
Câu A1:
DOM Tree
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button[type="submit"]
    │       └── "Add"
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"

Chọn thẻ <h1>
document.querySelector("h1");

Chọn input trong form
document.querySelector("form input");

Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");

Chọn link đang active
document.querySelector("nav a.active");

Chọn <li> đầu tiên trong #todoList
document.querySelector("#todoList li:first-child");

Chọn tất cả <a> bên trong <nav>
document.querySelectorAll("nav a");

Câu A2:
Sự khác nhau giữa innerHTML và textContent.
    innerHTML: xử lý nội dung dưới dạng HTML.
     -> khi cần chèn thẻ HTML vào trang.

    textContent: xử lý nội dung dưới dạng văn bản thuần.
     -> khi hiển thị dữ liệu văn bản, đặc biệt là dữ liệu người dùng nhập.
    
Tại sao innerHTML có thể gây lỗ hổng XSS? Viết 1 ví dụ code minh họa:

const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;

Nếu người dùng nhập:

<img src=x onerror="alert('Hacked!')">

thì JavaScript có thể bị thực thi.

Cách sửa:

result.innerHTML = userInput;

 -> result.textContent = userInput;

Câu A3:
document.querySelector("#outer").addEventListener("click", () => {
    console.log("OUTER");
});

document.querySelector("#inner").addEventListener("click", () => {
    console.log("INNER");
});

document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
    // e.stopPropagation();  ← nếu bỏ comment → output thay đổi thế nào?
});

<div id="outer">
    <div id="inner">
        <button id="btn">Click me</button>
    </div>
</div>

Khi click vào button:
Console.log hiện:
BUTTON
INNER
OUTER

Vì JavaScript mặc định sử dụng Event Bubbling, sự kiện sẽ đi từ phần tử được click (`btn`) lên các phần tử cha (`inner` → `outer`).

Nếu bỏ comment thì output sẽ là:

BUTTON

Vì `stopPropagation()` ngăn sự kiện lan truyền lên các phần tử cha, nên `INNER` và `OUTER` không được thực thi.

Nếu uncomment stopPropagation(),output thành:

  BUTTON

Event Bubbling làm sự kiện lan từ phần tử con lên phần tử cha; `stopPropagation()` dừng quá trình lan truyền đó.
