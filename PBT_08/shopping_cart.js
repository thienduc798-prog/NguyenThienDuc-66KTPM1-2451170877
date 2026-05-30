function createCart() {
    // Private data
    let items = [];
    let discountRate = 0; 
    let fixedDiscount = 0;

    return {
        // Thêm sản phẩm (nếu đã có → tăng quantity)
        addItem(product, quantity = 1) {
            const existingItem = items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({ ...product, quantity });
            }
        },

        // Xóa sản phẩm theo id
        removeItem(productId) {
            items = items.filter(item => item.id !== productId);
        },

        // Tính tổng tiền
        updateQuantity(productId, newQuantity) {
            const item = items.find(item => item.id === productId);
            if (item && newQuantity > 0) item.quantity = newQuantity;
        },

        getTotal() {
            const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const total = subtotal * (1 - discountRate) - fixedDiscount;
            return total > 0 ? total : 0;
        },

        // Áp dụng mã giảm giá
        applyDiscount(code) {
            if (code === "SALE10") discountRate = 0.1;
            else if (code === "SALE20") discountRate = 0.2;
            else if (code === "FREESHIP") fixedDiscount = 30000;
        },
        // Codes: "SALE10" → -10%, "SALE20" → -20%, "FREESHIP" → -30000

        // In giỏ hàng dạng bảng
        printCart() {
            console.log("┌──────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm      │ SL │ Đơn giá     │ Tổng        │");
            items.forEach((item, index) => {
                const totalRow = item.price * item.quantity;
                console.log(`│ ${index + 1} │ ${item.name.padEnd(13)} │  ${item.quantity} │ ${item.price.toLocaleString().padStart(10)} │ ${totalRow.toLocaleString().padStart(11)} │`);
            });
            console.log("├──────────────────────────────────────────────┤");
            console.log(`│ Tổng cộng: ${this.getTotal().toLocaleString().padStart(28)}đ │`);
            console.log("└──────────────────────────────────────────────┘");
        },

        // Lấy tổng số sản phẩm (tổng quantity)
        getItemCount() {
            return items.reduce((sum, item) => sum + item.quantity, 0);
        },

        // Xóa toàn bộ giỏ0
        clearCart() {
            items = [];
            discountRate = 0;
            fixedDiscount = 0;
        }
    };
}

// === TEST ===
const cart = createCart();
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

cart.printCart();

cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP:", cart.getItemCount()); // → 4
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount()); // → 2