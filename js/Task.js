class Task{

    constructor(){
        this.tasks = this.getTasks();
    };

    saveTask(taskData){
        const newTask = {
            id : Date.now(),
            isCompleted : false,
            ...taskData,
        }

        this.tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        console.log(newTask);

        return {
            success : true
        }
    }

    updateStatusComplete(taskId){
        const index = this.tasks.findIndex((task)=> task.id === taskId);
        this.tasks[index].isCompleted = true;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.tasks = this.getTasks();
    }

    deleteTask(taskId){
        const index = this.tasks.findIndex((task)=> task.id === taskId);
        this.tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.tasks = this.getTasks();
    }

    getTasks(){
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }
}