document.addEventListener('DOMContentLoaded', ()=> {
    const taskForm = document.getElementById('taskForm');
    const taskName = document.getElementById('taskName');
    const taskPriority = document.getElementById('taskPriority');
    const projectSinaria = document.getElementById('sinaria');
    const projectJupyter = document.getElementById('jupyter');
    const projectUmbrella = document.getElementById('umbrella');
    const taskManager = new Task();

    taskForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        const selectedProject = projectJupyter.checked ? 'jupyter' : projectSinaria.checked ? 'sinaria' : 'umbrella';

        const taskData  = {
            taskName : taskName.value,
            taskPriority : taskPriority.value,
            taskProject : selectedProject,
        }

        const result = taskManager.saveTask(taskData);
        if(result.success){
            return window.location.href = '../tasks.html';
        }else{
            alert('Gagal menambahkan data task');
        }
    });
});