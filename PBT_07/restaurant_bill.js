function calculateBill(items, isWednesday = false, includeTip = true) {
    let subtotal = 0;
    let billDetails = "";

    items.forEach((item, index) => {
        let lineTotal = item.price * item.quantity;
        subtotal += lineTotal;
        billDetails += `║ ${index + 1}. ${item.name.padEnd(10)} x${item.quantity}    @${item.price}k   = ${lineTotal}k   ║\n`;
    });

    let discountPercent = 0;
    if (subtotal > 1000) discountPercent = 15;
    else if (subtotal > 500) discountPercent = 10;
    
    if (isWednesday) discountPercent += 5;
    
    let discountAmount = (subtotal * discountPercent) / 100;
    let discountedTotal = subtotal - discountAmount;

    let vat = discountedTotal * 0.08;
    let tip = includeTip ? (discountedTotal * 0.05) : 0;
    let finalTotal = discountedTotal + vat + tip;

    const formatCurrency = (val) => (val * 1000).toLocaleString('vi-VN') + "đ";

    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG              ║");
    console.log("╠══════════════════════════════════════╣");
    console.log(billDetails.trimEnd());
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ Tổng cộng:              ${formatCurrency(subtotal)}    ║`);
    console.log(`║ Giảm giá (${discountPercent}%):           ${formatCurrency(discountAmount)}         ║`);
    console.log(`║ VAT (8%):                ${formatCurrency(vat)}    ║`);
    console.log(`║ Tip (5%):                ${formatCurrency(tip)}    ║`);
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN:              ${formatCurrency(finalTotal)}   ║`);
    console.log("╚══════════════════════════════════════╝");
}

const myOrder = [
    { name: "Phở bò", price: 65, quantity: 2 },
    { name: "Trà đá", price: 5, quantity: 3 },
    { name: "Bún chả", price: 55, quantity: 1 }
];

calculateBill(myOrder, false, true);