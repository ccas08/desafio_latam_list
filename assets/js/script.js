document.addEventListener('DOMContentLoaded', () => {
    let tasks = [
      { id: 1, description: 'Tarea de ejemplo 1', completed: false },
      { id: 2, description: 'Tarea de ejemplo 2', completed: false },
      { id: 3, description: 'Tarea de ejemplo 3', completed: false }
    ];
  
    const tasksList = document.getElementById('tasks');
    const totalTasksSpan = document.getElementById('total-tasks');
    const completedTasksSpan = document.getElementById('completed-tasks');
  
    function addTask() {
      const taskInput = document.getElementById('new-task');
      const task = taskInput.value.trim();
      if (task) {
        tasks.push({ id: tasks.length + 1, description: task, completed: false });
        taskInput.value = '';
        renderTasks();
      }
    }
  
    function renderTasks() {
        tasksList.innerHTML = ''; // Limpiar lista anterior
        tasks.forEach((task, index) => {
            const taskElement = document.createElement('li');
            
            // Checkbox para marcar la tarea como completada
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.onchange = () => toggleComplete(index);
            taskElement.appendChild(checkbox);
            
            // Span para la descripción de la tarea
            const taskDescription = document.createElement('span');
            taskDescription.textContent = task.description;
            if (task.completed) {
                taskDescription.classList.add('completed');
            }
            taskElement.appendChild(taskDescription);
            
            // Botón para eliminar la tarea
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '&times;'; // Usamos el símbolo de multiplicar como una "x"
            deleteButton.classList.add('delete-button');
            deleteButton.onclick = () => deleteTask(index);
            taskElement.appendChild(deleteButton);
            
            tasksList.appendChild(taskElement);
        });
        updateCounters();
    }
  
    function toggleComplete(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }
    
    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }
  
    function updateCounters() {
      totalTasksSpan.textContent = tasks.length;
      completedTasksSpan.textContent = tasks.filter(t => t.completed).length;
    }
  
    // Agrega el evento al botón de agregar tarea
    document.querySelector('button').addEventListener('click', addTask);
  
    // Render inicial de las tareas
    renderTasks();
  });
  

  