 function addTask() {
            const newTaskInput = document.getElementById('newTask');
            const taskText = newTaskInput.value.trim();
            
            if (taskText !== '') {
                const todoList = document.getElementById('todo-list');
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <input type="checkbox" onchange="toggleTask(this)" class="mr-2">
                    <span>${taskText}</span>
                    <button onclick="removeTask(this)" class="ml-2 p-2 bg-red-500 text-white rounded">Remove</button>
                `;
                todoList.appendChild(listItem);
                
                newTaskInput.value = '';
            }
        }

        function toggleTask(checkbox) {
            const taskText = checkbox.nextElementSibling;
            taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        }

        function removeTask(button) {
            const listItem = button.parentNode;
            listItem.parentNode.removeChild(listItem);
        }
