const createElements = (tagName, className, textContent) => {
  const tag = document.createElement(tagName);
  className && tag.classList.add(className);
  textContent && (tag.textContent = textContent);
  return tag;
};

const h1 = createElements("h1", "headerText", "-TO-DO NOW-");
const container = createElements("div", "container");
const header = createElements("div", "header");
const leftLine = createElements("hr");
const rigthLine = createElements("hr");
const underLine = createElements("hr", "form-underline");
const headerLine = createElements("div", "headerLine");
const span = createElements("span");
const iconPencil = createElements("i");
const form = createElements("form");
const formCard = createElements("div", "form-card");
const input = createElements("input");
const button = createElements("button", "btn", "Add task");
const todoList = createElements("div", "list-task");
iconPencil.classList.add("fa-regular", "fa-pen-to-square");
headerLine.append(leftLine, span, rigthLine);
span.append(iconPencil);
header.append(h1, headerLine);
formCard.append(input, button);
form.append(formCard);
container.append(header, form, underLine, todoList);
document.body.append(container);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = e.target[0].value;
  if (inputValue.trim() === "") return; // burada inputun valuesunu trim edir ve bosdursa elave etmir
  addTask(inputValue); // alinan deyeri function-a deyer kimi gonderirik
  e.target[0].value = ""; // burada inputun icerisini her defe bosaldiriq
});

const dataBase = [];

const addTask = (task) => {
  // yuxarida gonderdiyimiz input valeusunu burada goturub dataBase-e elave edirik
  dataBase.push(task);
  createTodo(dataBase); // array formasinda olan dataBase-i novbeti functiona gonderirik ve onu loopa salib her elave edilen data qeder li-ler  (task-list) yaradiriq
};

const createTodo = (data) => {
  todoList.innerHTML = "";
  const ul = document.createElement("ul");
  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.append(li);
  });
  todoList.append(ul);
};

// burada kodu ayri ayri functionlara ayirdim bacardigim qeder daha seliqeli alinsin))) bilmirem dogrumu bolmusem yoxsa artiq kodlar varmi?
