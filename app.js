const body = document.querySelector("body");
const h1 = document.createElement("h1");
const container = document.createElement("div");
const header = document.createElement("div");
const headerLine = document.createElement("div");
const span = document.createElement("span");
const iconPencil = document.createElement("i");
const hr1 = document.createElement("hr");
const hr2 = document.createElement("hr");
const hr3 = document.createElement("hr");
const form = document.createElement("form");
const formCard = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");
const listTask = document.createElement("div");
listTask.className = "list-task";
container.className = "container";
iconPencil.classList.add("fa-regular", "fa-pen-to-square");
hr3.className = "form-underline";
header.classList.add("header");
headerLine.classList = "headerLine";
formCard.classList.add("form-card");
h1.textContent = "-- TO-DO NOW --";
button.textContent = "Add task";
headerLine.append(hr1, span, hr2);
span.append(iconPencil);
header.append(h1, headerLine);
formCard.append(input, button);
form.append(formCard);
container.append(header, form, hr3, listTask);
body.append(container);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = e.target[0].value;
  if (inputValue.trim() === "") return; // burada inputun valuesunu trim edir ve bosdursa elave etmir
  addTask(inputValue); // alinan deyeri function-a deyer kimi gonderirik
  e.target[0].value = ""; // burada inputun icerisini her defe bosaldiriq
});

const dataBase = [];

const addTask = (task) => { // yuxarida gonderdiyimiz input valeusunu burada goturub dataBase-e elave edirik
  dataBase.push(task);
  createTaskList(dataBase); // array formasinda olan dataBase-i novbeti functiona gonderirik ve onu loopa salib her elave edilen data qeder li-ler  (task-list) yaradiriq
};

const createTaskList = (data) => {
  listTask.innerHTML = "";
  const ul = document.createElement("ul");
  data.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.append(li);
  });
  listTask.append(ul);
};

// burada kodu ayri ayri functionlara ayirdim bacardigim qeder daha seliqeli alinsin))) bilmirem dogrumu bolmusem yoxsa artiq kodlar varmi?