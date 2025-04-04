// JavaScript hoàn chỉnh cho Kênh người bán - chuyển tab theo yêu cầu

// Đợi DOM tải xong
document.addEventListener("DOMContentLoaded", function () {
  // Map liên kết giữa id của nút và class/id của khu vực hiển thị tương ứng
  const navLinks = {
    "link-all-orders": "order-section",
    "link-orders": "order-section",
    "link-all-products": "product-section",
    "link-products": "product-section",
    "link-add-product": "product-section",
    "link-all-vin": "overview-box",
    "link-vin": "overview-box",
    "link-add-vin": "wallet-container"
  };

  // Hàm ẩn toàn bộ khu vực dữ liệu
  function hideAllSections() {
    const allSections = document.querySelectorAll(
      "#order-section, #product-section, .Container-ka, .Container-sua, .Container-Chitiet, .overview-box, .wallet-container"
    );
    allSections.forEach((el) => el.classList.add("hidden"));
  }

  // Hàm hiển thị đúng khu vực cần thiết
  function showSection(id) {
    hideAllSections();
    const section = document.getElementById(id) || document.querySelector(`.${id}`);
    if (section) section.classList.remove("hidden");
  }

  // Gán sự kiện click cho các liên kết sidebar
  Object.keys(navLinks).forEach((linkId) => {
    const button = document.getElementById(linkId);
    if (button) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(navLinks[linkId]);
      });
    }
  });

  // Nút quay lại từ chi tiết sản phẩm về tất cả sản phẩm
  const btnQuayLaiChiTiet = document.querySelector(".Container-Chitiet .Submit");
  if (btnQuayLaiChiTiet) {
    btnQuayLaiChiTiet.addEventListener("click", () => {
      showSection("product-section");
    });
  }

  // Nút quay lại từ sửa sản phẩm về tất cả sản phẩm
  const btnQuayLaiSua = document.querySelector(".sua-submit");
  if (btnQuayLaiSua) {
    btnQuayLaiSua.addEventListener("click", () => {
      showSection("product-section");
    });
  }

  // Nút hủy thêm sản phẩm quay lại tất cả sản phẩm
  const btnCancelAdd = document.querySelector(".Cancel");
  if (btnCancelAdd) {
    btnCancelAdd.addEventListener("click", () => {
      showSection("product-section");
    });
  }

  // Nút chỉnh sửa sản phẩm (icon 🛠)
  document.querySelectorAll(".btn-edit-product").forEach((btn) => {
    btn.addEventListener("click", () => {
      hideAllSections();
      document.querySelector(".Container-sua").classList.remove("hidden");
    });
  });

  // Nút xem chi tiết đơn hàng
  document.querySelectorAll(".btn-view-order-detail").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Hiển thị chi tiết đơn hàng - bạn có thể thay bằng giao diện popup hoặc section mới");
    });
  });

  // Hiển thị mặc định là tất cả đơn hàng
  showSection("order-section");
});
