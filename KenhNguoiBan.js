document.addEventListener("DOMContentLoaded", function () {
  // Các phần cần quản lý hiển thị
  const sectionOrder = document.getElementById("order-section");
  const sectionAllProduct = document.getElementById("product-section");
  const sectionAddProduct = document.querySelector(".Container-ka.product-form-ka");
  const sectionDoanhthu = document.querySelector(".doanhthu-section");
  const sectionStatisticPaid = document.querySelector(".statistic-paid-container");
  const sectionWallet = document.querySelector(".wallet-container");

  // Ẩn tất cả các phần
  function hideAllSections() {
    sectionOrder.classList.add("hidden");
    sectionAllProduct.classList.add("hidden");
    sectionAddProduct.classList.add("hidden");
    sectionDoanhthu.classList.add("hidden");
    sectionStatisticPaid.classList.add("hidden");
    sectionWallet.classList.add("hidden");
  }

  // 1. Tất cả đơn hàng
  document.getElementById("link-all-orders").addEventListener("click", function (e) {
    e.preventDefault();
    hideAllSections();
    sectionOrder.classList.remove("hidden");
  });

  // 2. Tất cả sản phẩm
  document.getElementById("link-all-products").addEventListener("click", function (e) {
    e.preventDefault();
    hideAllSections();
    sectionAllProduct.classList.remove("hidden");
  });

  // 3. Thêm sản phẩm
  document.getElementById("link-add-product").addEventListener("click", function (e) {
    e.preventDefault();
    hideAllSections();
    sectionAddProduct.classList.remove("hidden");
  });

  // 4. Doanh thu (hiện cả phần thống kê và chi tiết)
  document.getElementById("link-all-vin").addEventListener("click", function (e) {
    e.preventDefault();
    hideAllSections();
    sectionDoanhthu.classList.remove("hidden");
    sectionStatisticPaid.classList.remove("hidden");
  });

  // 5. Ví
  document.getElementById("link-add-vin").addEventListener("click", function (e) {
    e.preventDefault();
    hideAllSections();
    sectionWallet.classList.remove("hidden");
  });
});
