const cursor = document.createElement("div");
const home = document.querySelector("#main");
function ok() {
  cursor.className = "cursor";
  cursor.innerHTML = "hello world";
  home.appendChild(cursor);
}

ok();
