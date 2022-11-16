// import { name } from "ejs";
// import { convertToNumber } from "../useful-functions.js";
import * as Api from "/api.js";
const productEdit = document.querySelector(".product_edit");
const deleteButton = document.querySelector(".product_delete");

function moveToadminProductUpdate() {
  window.location.assign("/updateProduct");
}

const productId = window.location.pathname.split("/")[2];

async function deleteProduct() {
  const value = confirm("진짜 삭제하시겠습니까?")
  if(value===true) {
    try{

    await Api.delete("/api/products", productId);

    alert("상품이 삭제되었습니다.")
    window.location.href="/";
    } catch(err) {
      next(err)
    } 
  }

}

deleteButton.addEventListener("click", deleteProduct);
productEdit.addEventListener("click", moveToadminProductUpdate);

const ref = {
  sizeBlockTag: document.querySelector(".size_block"),
  sizeTag: document.querySelector("#sizeTag"),
  colorTag: document.querySelector("#colorTag"),
  buyButttonTag: document.querySelector(".button_buy"),
  cartButtonTag: document.querySelector(".button_cart"),
  productImageTag: document.querySelector(".bb2"),
  brandTag: document.querySelector(".pd_brd"),
  nameTag: document.querySelector(".pd_name"),
  categoryTag: document.querySelector(".tag_category"),
  descriptionTag: document.querySelector(".tag_name"),
  priceTag: document.querySelector(".total_price"),
  reviewListTag: document.querySelector(".bb17"),
  reviewBtnTag: document.querySelector(".button_review"),
  reviewContentTag: document.querySelector(".reviewContent")
};

let product = {};
let review = {};
let selectSize = "";

window.addEventListener("load", async () => {
  const editButton = document.querySelector(".product_edit");
  const deleteButton = document.querySelector(".product_delete");
  const token = sessionStorage.getItem("token");

  function moveToUpdate() {
    window.location.assign(`/productDetail/${productId}/updateProduct`);
  }
  
  editButton.addEventListener("click", moveToUpdate);

  const res = await fetch("/api/admin/check", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { result } = await res.json();

  if (result === "success") {
    editButton.classList.remove("hidden");
    deleteButton.classList.remove("hidden");
    return;
  } else {
    editButton.classList.add("hidden");
    deleteButton.classList.add("hidden");
    return;
  }
});

//상품상세페이지 구현
const drawProduct = async () => {
  ref.productImageTag.setAttribute("src", product.img);
  ref.brandTag.innerHTML = product.brand;
  ref.nameTag.innerHTML = product.name;
  ref.categoryTag.innerHTML = product.category;
  ref.descriptionTag.innerHTML = product.description;
  ref.priceTag.innerHTML = product.price;
  //사이즈 셀렉박스로 넣기
  product.size.forEach((size, index) => {
    ref.sizeTag.insertAdjacentHTML(
      "beforeend",
      `
          <option value="${index}">${size}</option>
          `
    );
  });
  //컬러 셀렉박스로 넣기
  //console.log(product.color);
  product.color.forEach((color, index) => {
    ref.colorTag.insertAdjacentHTML(
      "beforeend",
      `
      <option value="${index}">${color}</option>
      `
    );
  });
  const value_size = document.querySelector("#sizeTag");
  const value_color = document.querySelector("#colorTag");
  const name = ref.nameTag.innerHTML;
  const brand = ref.brandTag.innerHTML;
  const price = ref.priceTag.innerHTML;
  const size = value_size.options[value_size.selectedIndex].text;
  const color = value_color.options[value_color.selectedIndex].text;
  // console.log(color)
  const category = ref.categoryTag.innerHTML;
  const num = productId;
  product.selectSize = size;
  product.selectColor = color;

  console.log(review)
  review.forEach((review) => {
    const review_no = review.reviewNo;
    const review_email = review.userId;
    const review_content = review.review;

    ref.reviewListTag.insertAdjacentHTML(
      "beforeend",
      `
        <tr>
          <th>번호: ${review_no}</th>
          <th>이메일: ${review_email}</th>
          <br>
          <th>후기: ${review_content}</th>
          <br>
        </tr>
        <br>
      `
    )
  })
  // const data = {
  //   num,
  //   name,
  //   brand,
  //   price,
  //   size,
  //   color,
  //   category,
  // };
  // console.log(data);

  // const result = await Api.post("/api/selectedProducts", data);
  // console.log(result)
};

//localStorage 저장하기
const addCart = (id) => {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  console.log(product.num);
  var i = 0;
  for (i; i < products.length; i++) {
    if (products[i]._id == product._id) {
      alert("이미 담긴 상품입니다.");
      break;
    }
  }
  if (i == products.length) {
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    alert("장바구니에 담겼습니다.");
  }
  //   if (!products[0]) {
  //     // products[product._id] = {
  //     //     productName: product.name,
  //     //     price: product.price,
  //     // };
  //     products.push(product);
  //     localStorage.setItem("products", JSON.stringify(products));
  //     alert('장바구니에 담겼습니다.');
  //     // location.href = "/mypage/myPageCart";
  // } else {
  //     alert('이미 담긴 상품입니다.');
  // }
  // products.push(product);
  // localStorage.setItem("products", JSON.stringify(products));
  location.href = "/mypage/myPageCart";
};
ref.cartButtonTag.addEventListener("click", addCart);

//함수 실행
const render = () => {
  drawProduct();
};

async function addReview(e) {
  e.preventDefault();

  const userData = await Api.get("/api/user");

  const review = ref.reviewContentTag.value;

  if (!review) {
    return alert("입력하지 않은 값이 있습니다.");
  }

  try {
    const data = { review, userId: userData.email };

    const result = await Api.post(`/api/productDetail/${productId}`, data);

    if (result) {
      alert(`후기가 성공적으로 등록되었습니다!`);
      window.location.href = `/productDetail/${productId}`;
    }

  } catch (err) {
    console.log(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
}

const initialize = async () => {
  const value_size = document.querySelector("#sizeTag");
  const value_color = document.querySelector("#colorTag");
  const res = await fetch(`/api/productDetail/${productId}`);
  product = await res.json();
  review = product.review;
  product = product.data;
  console.log(product["size"].join());
};

initialize().then(() => render());
ref.buyButttonTag.addEventListener("click", () => (location.href = `/order`));
ref.reviewBtnTag.addEventListener("click", addReview);

// Header&Footer
const body = document.querySelector(".body");

let randomNum = Math.floor(Math.random() * 10);
let imgName = [
  "https://www.giordano.co.kr/_gio_on/2022/05412944.jpg",
  "https://www.giordano.co.kr/_gio_on/2022/05372906.jpg",
  "https://www.giordano.co.kr/_gio_on/2021/05371913_eshop.jpg",
  "https://www.giordano.co.kr/_gio_on/2022/01112951.jpg",
  "https://www.giordano.co.kr/_gio_on/2022/01072930.jpg",
  "https://www.giordano.co.kr/_gio_on/2022/05372908.jpg",
  "https://www.giordano.co.kr/_gio_on/2022/05372915.jpg",
  "https://www.giordano.co.kr/_gio_on/2022/05372910_RDS%EC%A0%9C%EC%99%B8.jpg",
  "https://www.giordano.co.kr/_gio_on/2022/05352917.jpg",
  "https://www.giordano.co.kr/_gio_on/2022/01072920.jpg",
];

document.querySelector(".img_box img").setAttribute("src", imgName[randomNum]);
