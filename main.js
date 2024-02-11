const elMainForm = document.querySelector(".js-main-form");
const elMainInput = elMainForm.querySelector(".js-main-input");
const elTaskList = document.querySelector(".task-list");
const elTaskTemplate = document.querySelector(".js-task-template").content;

const tasks = [];
const itemFragment = new DocumentFragment();
function renderTask(arr, node) {
    node.innerHTML = "";

    tasks.forEach((item, index) => {
        const cloneTemplate = elTaskTemplate.cloneNode(true);
        cloneTemplate.querySelector(".index").textContent = index;
        cloneTemplate.querySelector(".task").textContent = item;
        cloneTemplate.querySelector(".delete-btn").dataset.id = index;
        itemFragment.appendChild(cloneTemplate);
    })
    node.appendChild(itemFragment);
}

elTaskList.addEventListener("click", function(evt) {
    if(evt.target.matches(".delete-btn")) {
        tasks.splice(Number(evt.target.dataset.id), 1)
    }
    renderTask(tasks, elTaskList)
})

renderTask(tasks, elTaskList)

elMainForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    const inputValue = elMainInput.value.trim();
    if(inputValue.length > 2) {
        tasks.push(inputValue);
    }else{
        alert("You should type longer than 3 characters")
    }
    renderTask(tasks, elTaskList)
    elMainInput.value = "";
})