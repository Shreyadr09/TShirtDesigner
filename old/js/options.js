const text = document.getElementById("text-link");
const imageupload = document.getElementById("imageupload");
const colorchange = document.getElementById("colorchange");

function opensidebaronText() {
  // console.log("hi");
  var boxElement = document.querySelector("#textsidebar");
  if (boxElement.style.visibility === "hidden") {
    boxElement.style.visibility = "visible";
    boxElement.classList.add("myElement");
  } else {
    boxElement.style.visibility = "hidden";
    boxElement.classList.remove("myElement");
  }
  //   boxElement.style.visibility = "hidden";
  //   $("#secondsidebar").toggle();
}
