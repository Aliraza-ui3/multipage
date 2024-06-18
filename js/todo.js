const inputBox = document.getElementById("input");
const listContainer = document.getElementById("task");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.classList.add("hello");
        li.innerHTML = `
            ${inputBox.value}
            <button onclick="removeTask(this)" class="remove-btn">Remove</button>
        `;
        li.querySelector(".remove-btn").style.display = "none"; // Hide the remove button initially
        li.addEventListener('click', toggleTask);
        listContainer.appendChild(li);
        inputBox.value = '';
    }
}

function removeTask(button) {
    let task = button.parentElement;
    task.remove();
}

function toggleTask(event) {
    if (event.target.tagName !== 'BUTTON') {
        this.classList.toggle('checked');
        let removeBtn = this.querySelector(".remove-btn");
        if (this.classList.contains('checked')) {
            removeBtn.style.display = "inline"; // Show the remove button when checked
        } else {
            removeBtn.style.display = "none"; // Hide the remove button when unchecked
        }
    }
}
