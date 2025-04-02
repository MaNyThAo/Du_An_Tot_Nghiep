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
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các tab trạng thái đơn hàng
    const orderTabs = document.querySelectorAll(".tables .tables");
    const rows = document.querySelectorAll("#orders tbody tr");

    orderTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Loại bỏ lớp active khỏi tất cả các tab
            orderTabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            const filter = this.textContent.trim();
            
            rows.forEach(row => {
                const status = row.children[2].textContent.trim(); // Lấy trạng thái đơn hàng
                if (filter === "Tất cả" || status === filter) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    });
});

document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function () {
      alert('Chức năng này sẽ được thêm sau!');
    });
  });
// Thay vì cái lặp lại như .tables .tables
const orderTabs = document.querySelectorAll(".order-tab");
  