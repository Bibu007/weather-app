export function showErrorMsg() {
  removeLoader();
  const errorMsg = document.querySelector(".error-msg");
  console.log("Hey");
  errorMsg.classList.add("active");
  setTimeout(() => {
    errorMsg.classList.remove("active");
  }, 3000);
}

export function showLoader() {
  const loader = document.querySelector(".loader-overlay");
  console.log("remove loader");
  loader.classList.remove("hidden");
}

export function removeLoader() {
  const loader = document.querySelector(".loader-overlay");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1000);
}
