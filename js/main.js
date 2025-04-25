document.addEventListener("DOMContentLoaded", () => {
  const micBtn = document.querySelector(".mic-button");
  const recordingPopup = document.querySelector(".recording-popup");
  const sendBtn = document.querySelector(".send-button");
  const sentPopup = document.getElementById("sent-popup");
  const messageInput = document.getElementById("message");

  micBtn.addEventListener("click", () => {
    recordingPopup.style.display = "block";

    setTimeout(() => {
      recordingPopup.style.display = "none";
    }, 4000);
  });

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (messageInput.value.trim() !== "") {
      // Show "Message Sent" popup
      sentPopup.classList.add("show");

      messageInput.value = "";

      // Hides popup message after 2s
      setTimeout(() => {
        sentPopup.classList.remove("show");
      }, 2000);
    }
  });
});
