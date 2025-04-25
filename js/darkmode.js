const switchMode = document.querySelector(".mode-box");
switchMode.addEventListener("click", () => {
  const body = document.body;
  const darkStyle = document.getElementById("theme-mode");
  const lightIcon = document.querySelector(".light-mode-icon");
  const darkIcon = document.querySelector(".dark-mode-icon");

  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    darkStyle.disabled = false;

    lightIcon.style.display = "none";
    darkIcon.style.display = "flex";
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    darkStyle.disabled = true;

    lightIcon.style.display = "flex";
    darkIcon.style.display = "none";
  }
});
