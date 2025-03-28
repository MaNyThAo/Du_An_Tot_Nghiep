document.addEventListener("DOMContentLoaded", function() {
    // Lấy các phần nội dung cần hiển thị
    const productsSection = document.getElementById("products");
    const ordersSection = document.getElementById("orders");
    const addProductSection = document.querySelector(".Container-ka");

    // Lấy các nút trong menu
    const allProductsBtn = document.getElementById("all-products-btn");
    const allOrdersBtn = document.getElementById("all-orders-btn");
    const addProductBtn = document.getElementById("add-product-btn");

    // Mảng chứa tất cả các nút để dễ dàng quản lý
    const menuButtons = [allProductsBtn, allOrdersBtn, addProductBtn];

    // Hàm hiển thị phần tương ứng và ẩn các phần khác
    function showSection(section, activeButton) {
        // Ẩn tất cả các phần
        productsSection.style.display = "none";
        ordersSection.style.display = "none";
        addProductSection.style.display = "none";

        // Hiển thị phần được chọn
        section.style.display = "block";

        // Xóa lớp 'active' khỏi tất cả các nút menu
        menuButtons.forEach(btn => btn.classList.remove("active"));

        // Thêm lớp 'active' vào nút đang được chọn
        activeButton.classList.add("active");
    }

    // Gán sự kiện click cho các menu
    allProductsBtn.addEventListener("click", function() {
        showSection(productsSection, allProductsBtn);
    });

    allOrdersBtn.addEventListener("click", function() {
        showSection(ordersSection, allOrdersBtn);
    });

    addProductBtn.addEventListener("click", function() {
        showSection(addProductSection, addProductBtn);
    });

    // Mặc định hiển thị danh sách sản phẩm khi tải trang
    showSection(productsSection, allProductsBtn);
});
