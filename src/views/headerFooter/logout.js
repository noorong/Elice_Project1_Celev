const logoutBtn1 = document.querySelector("#logout1");
const logoutBtn2 = document.querySelector("#logout2");

logoutBtn1.addEventListener("click", () => {
  sessionStorage.removeItem("token");
  window.location.href = "/";
});

logoutBtn2.addEventListener("click", () => {
  sessionStorage.removeItem("token");
  window.location.href = "/";
});
