import React, {useState} from 'react'

function ToDoList() {

    const [inputValue, setInputValue] = useState("");

    const [tasks, setTasks] = useState([]);

    const taskHandler = () => {

        if(inputValue === "") {
            return
        }

        const newTodo = {
            taskText: inputValue,
            taskDate: Date.now(),
            isFinished: false
        }

        setTasks([...tasks, newTodo])
        setInputValue("")
    }

    function toggleFinishedTask(taskDate) {
        const updatedTasks = tasks.map((task) => (
            task.taskDate === taskDate ? {...task, isFinished: !task.isFinished} : task
        ))

        setTasks(updatedTasks);
    }

    function deleteTask(taskDate) {
        const updatedTasks = tasks.filter(task => task.taskDate !== taskDate)
        setTasks(updatedTasks)
    }

    return (
        <main>
            <h1>My Tasks 😎</h1> <br />
            <div className="todo-add-task">
                <input value={inputValue} type="text" onChange={(e) => setInputValue(e.target.value)} placeholder="Add new task" maxLength="30"/>
                <button onClick={taskHandler}>Add Task</button>
            </div> <br />

            <div className="todo-list">

                {

                    tasks.map((task) =>
                        
                        (
                            
                            <div key={task.taskDate} className={task.isFinished === false ? "task" : "task finished"}>
                                <p>{task.taskText} </p>
                                <h2>{task.isFinished === false ? "😥" : "😁"}</h2>
                                <button onClick={() => deleteTask(task.taskDate)} className="action-button edit">Delete</button>
                                <button style={{backgroundColor: task.isFinished === false ? "red" : "green" }} onClick={() => toggleFinishedTask(task.taskDate)} className="action-button remove">Ok</button>
                            </div>
                        )
                    
                    
                    
                    
                    )
                }

            </div>

        
        </main>


    )

}

export default ToDoList