const textBox = document.getElementById("textBox");
const listBox = document.getElementById("listbox");

const addList = () => {
  if (textBox.value === "") {
    alert("Please Add Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = textBox.value;
    listBox.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  textBox.value = "";
};

listBox.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listBox.innerHTML);
};
const showTask = () => {
  listBox.innerHTML = localStorage.getItem("data");
};
showTask();
