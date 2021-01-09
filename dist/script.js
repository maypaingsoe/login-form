function loginOutput() {
  if (
    document.getElementById("username").value == "maddy" &&
    document.getElementById("password").value == 12345678
  ) {
    console.log("welcome");
    window.location.href = "https://google.com";
  } else {
    console.log("not found");
  }
}