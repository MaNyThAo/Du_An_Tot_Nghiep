function showSection(section) {
    // Lấy phần hiển thị sản phẩm và đơn hàng
    var products = document.getElementById("products");
    var orders = document.getElementById("orders");

    // Ẩn cả hai phần
    products.classList.add("hidden");
    orders.classList.add("hidden");

    // Xóa class "active-link" của cả hai mục
    document.getElementById("link-products").classList.remove("active-link");
    document.getElementById("link-orders").classList.remove("active-link");

    // Hiển thị phần được chọn và đổi màu link
    if (section === 'products') {
        products.classList.remove("hidden");
        document.getElementById("link-products").classList.add("active-link");
    } else if (section === 'orders') {
        orders.classList.remove("hidden");
        document.getElementById("link-orders").classList.add("active-link");
    }
}
