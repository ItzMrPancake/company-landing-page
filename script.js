document.getElementById("year").textContent = new Date().getFullYear();

const form = document.querySelector(".lead-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = form.querySelector("button");
    const originalText = button.textContent;

    button.textContent = "Request Sent";
    button.disabled = true;
    button.style.opacity = "0.8";

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      button.style.opacity = "1";
      form.reset();
    }, 1800);
  });
}
