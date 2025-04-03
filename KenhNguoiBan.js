document.addEventListener("DOMContentLoaded", function () {
    // Các phần hiển thị nội dung
    const productsSection = document.getElementById("products");
    const ordersSection = document.getElementById("orders");
    const addProductSection = document.querySelector(".Container-ka");
    const detailSection = document.querySelector(".Container-Chitiet");

    // Các nút điều hướng bên sidebar
    const allProductsBtn = document.getElementById("all-products-btn");
    const allOrdersBtn = document.getElementById("all-orders-btn");
    const addProductBtn = document.getElementById("add-product-btn");
    const menuButtons = [allProductsBtn, allOrdersBtn, addProductBtn];

    // Hàm hiển thị section và active menu
    function showSection(section, activeButton = null) {
        // Ẩn tất cả
        productsSection.style.display = "none";
        ordersSection.style.display = "none";
        addProductSection.style.display = "none";
        detailSection.style.display = "none";

        // Hiện phần mong muốn
        section.style.display = "block";

        // Cập nhật trạng thái nút sidebar
        menuButtons.forEach(btn => btn.classList.remove("active"));
        if (activeButton) {
            activeButton.classList.add("active");
        }
    }

    // Gán click cho sidebar
    allProductsBtn.addEventListener("click", function () {
        showSection(productsSection, allProductsBtn);
    });

    allOrdersBtn.addEventListener("click", function () {
        showSection(ordersSection, allOrdersBtn);
    });

    addProductBtn.addEventListener("click", function () {
        showSection(addProductSection, addProductBtn);
    });

    // Gán click cho icon 🛠 để mở phần chi tiết
    const editIcons = document.querySelectorAll(".icon");
    editIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            if (icon.textContent.includes("🛠")) {
                showSection(detailSection);
            }
        });
    });
    const detailButtons = document.querySelectorAll(".detail-btnss");
    const suaSection = document.querySelector(".Container-sua");
    
    detailButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            console.log("Bạn đã click vào nút Chi tiết");
    
            // Ẩn tất cả các phần khác
            productsSection.style.display = "none";
            ordersSection.style.display = "none";
            addProductSection.style.display = "none";
            detailSection.style.display = "none";
    
            // Hiện phần chi tiết đơn hàng
            suaSection.style.display = "block";
        });
    });
    
    // Gán click cho nút "Sửa" trong phần chi tiết
    const detailSubmitBtn = document.querySelector(".chitiet-submit");
    if (detailSubmitBtn) {
        detailSubmitBtn.addEventListener("click", function () {
            showSection(productsSection, allProductsBtn);
        });
    }

    // Mặc định hiển thị danh sách sản phẩm
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

document.addEventListener("DOMContentLoaded", function () {
    // ... Các phần khác đã có ...

    // === XÓA DÒNG SẢN PHẨM ===
    const deleteIcons = document.querySelectorAll("#products .icon");

    deleteIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            if (icon.textContent.includes("🗑")) {
                const confirmed = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
                if (confirmed) {
                    const row = icon.closest("tr");
                    row.remove(); // hoặc row.style.display = "none"; nếu muốn ẩn mềm
                }
            }
        });
    });
});
