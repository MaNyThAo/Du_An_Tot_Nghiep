document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    order: document.getElementById("order-section"),
    product: document.getElementById("product-section"),
    addProduct: document.querySelector(".Container-ka.product-form-ka"),
    doanhthuSection: document.querySelector(".doanhthu-section"),
    paidContainer: document.querySelector(".statistic-paid-container"),
    wallet: document.querySelector(".wallet-container")
  };

  function hideAll() {
    Object.values(sections).forEach(section => {
      if (section) section.classList.add("hidden");
    });
  }

  document.getElementById("link-all-orders").addEventListener("click", function (e) {
    e.preventDefault();
    hideAll();
    sections.order.classList.remove("hidden");
  });

  document.getElementById("link-all-products").addEventListener("click", function (e) {
    e.preventDefault();
    hideAll();
    sections.product.classList.remove("hidden");
  });

  document.getElementById("link-add-product").addEventListener("click", function (e) {
    e.preventDefault();
    hideAll();
    sections.addProduct.classList.remove("hidden");
  });

  // ✅ ĐÂY LÀ PHẦN EM CẦN
  document.getElementById("link-all-vin").addEventListener("click", function (e) {
    e.preventDefault();
    hideAll();
    sections.doanhthuSection.classList.remove("hidden");      // Tổng quan + bảng doanh thu
    sections.paidContainer.classList.remove("hidden");        // Chi tiết đã thanh toán
  });

  document.getElementById("link-add-vin").addEventListener("click", function (e) {
    e.preventDefault();
    hideAll();
    sections.wallet.classList.remove("hidden");
  });
});
const slategrayLinkIds = [
  "link-all-orders",
  "link-all-products",
  "link-add-product",
  "link-all-vin",
  "link-add-vin"
];

function updateSidebarActive(linkId) {
  slategrayLinkIds.forEach(id => {
    const link = document.getElementById(id);
    if (link) {
      link.classList.remove("active-link");
    }
  });

  const clickedLink = document.getElementById(linkId);
  if (clickedLink) {
    clickedLink.classList.add("active-link");
  }
}

// Gắn sự kiện click cho link slategray
slategrayLinkIds.forEach(id => {
  const link = document.getElementById(id);
  if (link) {
    link.addEventListener("click", () => {
      updateSidebarActive(id);
    });
  }
});
const detailButtons = document.querySelectorAll(".btn-view-order-detail");
const detailContainer = document.querySelector(".Container-Chitiet");

detailButtons.forEach(button => {
  button.addEventListener("click", () => {
    detailContainer.classList.remove("hidden");
    window.scrollTo({ top: detailContainer.offsetTop - 100, behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".order-tabs .tab");
  const rows = document.querySelectorAll("#order-list tr");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Bỏ class active cũ, thêm active mới
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const selectedStatus = tab.getAttribute("data-filter");

      rows.forEach(row => {
        const rowStatus = row.getAttribute("data-status");

        if (selectedStatus === "Tất cả" || rowStatus === selectedStatus) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.querySelector(".Container-Chitiet .Submit");
  const chitietContainer = document.querySelector(".Container-Chitiet");
  const orderSection = document.getElementById("order-section"); // phần chính cần hiện lại

  if (backButton) {
    backButton.addEventListener("click", () => {
      chitietContainer.classList.add("hidden");
      orderSection.classList.remove("hidden"); // Hiện lại phần đơn hàng
      window.scrollTo({ top: orderSection.offsetTop - 100, behavior: "smooth" });
    });
  }
});
// lọc của phần tất cả sản phẩm 
document.addEventListener("DOMContentLoaded", function () {
  const productTabs = document.querySelectorAll(".product-tabs .tab");
  const productRows = document.querySelectorAll("#product-list tr");

  productTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Bỏ class active cũ, thêm mới
      productTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const selected = tab.getAttribute("data-filter");

      productRows.forEach(row => {
        const status = row.getAttribute("data-status");
        if (selected === "Tất cả sản phẩm" || status === selected) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  });
});
//tìm kiếm
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".input-search");
  const productRows = document.querySelectorAll("#product-list tr");

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase().trim();

    productRows.forEach(row => {
      const name = row.getAttribute("data-name").toLowerCase();
      if (name.includes(keyword)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});
// thêm mới 
document.addEventListener("DOMContentLoaded", function () {
  const btnAddProduct = document.querySelector(".btn-add-product");
  const productSection = document.getElementById("product-section");
  const formAddProduct = document.querySelector(".Container-ka.product-form-ka");

  if (btnAddProduct) {
    btnAddProduct.addEventListener("click", () => {
      productSection.classList.add("hidden");
      formAddProduct.classList.remove("hidden");

      // Cuộn đến form thêm sản phẩm
      window.scrollTo({ top: formAddProduct.offsetTop - 100, behavior: "smooth" });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btnSubmit = document.querySelector(".Submit");
  const productSection = document.getElementById("product-section");
  const formAddProduct = document.querySelector(".Container-ka.product-form-ka");
  const productList = document.getElementById("product-list");

  btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();

    // Lấy dữ liệu từ form
    const name = document.getElementById("product-name").value;
    const category = document.getElementById("product-category").value;
    const desc = document.getElementById("product-description").value;
    const brand = document.getElementById("product-brand").value;
    const origin = document.getElementById("product-origin").value;
    const price = document.getElementById("product-price").value;
    const stock = document.getElementById("product-stock").value;

    // Check dữ liệu bắt buộc
    if (!name || !price || !stock) {
      alert("Vui lòng nhập đầy đủ tên sản phẩm, giá và kho hàng.");
      return;
    }

    // Thêm sản phẩm vào bảng
    const row = document.createElement("tr");
    row.setAttribute("data-status", "Hoạt động");
    row.setAttribute("data-name", name);
    row.innerHTML = `
      <td><input type="checkbox"></td>
      <td>${name}</td>
      <td>${stock}</td>
      <td>${price}</td>
      <td>0</td>
      <td><span class="status-active">Hoạt động</span></td>
      <td>
        <span class="icon btn-delete-product">🗑</span>
        <span class="icon btn-edit-product">🛠</span>
      </td>
    `;

    productList.appendChild(row);

    // Ẩn form, hiện bảng sản phẩm
    formAddProduct.classList.add("hidden");
    productSection.classList.remove("hidden");

    // Reset form
    document.getElementById("product-name").value = "";
    document.getElementById("product-category").value = "";
    document.getElementById("product-description").value = "";
    document.getElementById("product-brand").value = "No brand";
    document.getElementById("product-origin").value = "Việt Nam";
    document.getElementById("product-price").value = "";
    document.getElementById("product-stock").value = "";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list");
  const formEditProduct = document.querySelector(".Container-sua");

  // Xử lý xóa sản phẩm 🗑
  productList.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-delete-product")) {
      const row = e.target.closest("tr");
      if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
        row.remove();
      }
    }

    // Xử lý sửa sản phẩm 🛠
    if (e.target.classList.contains("btn-edit-product")) {
      formEditProduct.classList.remove("hidden");

      // Tùy chọn: em có thể lấy dữ liệu từ dòng và điền vào form sửa
      // const row = e.target.closest("tr");
      // const productName = row.querySelector("td:nth-child(2)").textContent;
      // document.getElementById("edit-name").value = productName; // ví dụ nếu có form sửa
    }
  });
});
document.querySelector(".Container-sua .Cancel").addEventListener("click", () => {
  document.querySelector(".Container-sua").classList.add("hidden");
});
document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list");
  const formEdit = document.querySelector(".Container-sua");
  const inputName = document.getElementById("edit-name");
  const inputPrice = document.getElementById("edit-price");
  const inputStock = document.getElementById("edit-stock");

  let currentRow = null;

  // Mở form sửa
  productList.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-edit-product")) {
      const row = e.target.closest("tr");
      currentRow = row;

      const name = row.children[1].textContent;
      const stock = row.children[2].textContent;
      const price = row.children[3].textContent;

      inputName.value = name;
      inputPrice.value = price;
      inputStock.value = stock;

      formEdit.classList.remove("hidden");
      window.scrollTo({ top: formEdit.offsetTop - 100, behavior: "smooth" });
    }
  });

  // Hủy sửa
  document.querySelector(".Container-sua .Cancel").addEventListener("click", () => {
    formEdit.classList.add("hidden");
  });

  // Cập nhật dữ liệu
  document.querySelector(".Container-sua .Update").addEventListener("click", () => {
    if (currentRow) {
      currentRow.children[1].textContent = inputName.value;
      currentRow.children[2].textContent = inputStock.value;
      currentRow.children[3].textContent = inputPrice.value;
    }

    formEdit.classList.add("hidden");
  });
});
