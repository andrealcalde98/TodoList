import { todosArray } from "./todosArray";
import TaskPage from "../taskPage/TaskPage";
import { useState } from "react";

function TodoPage() {

    const [todos, setTodos] = useState(todosArray);

    const [value, setValue] = useState("");

    const handleDelete = (idNumber) => {
        setTodos(todos.filter(todo => todo.id !== idNumber));
    }

    const handleComplete = (idNumber, checked) => {
        console.log(idNumber, checked);
        setTodos(todos.map(todo => {
            if (checked === true && todo.id === idNumber) {
                todo.completed = true;
            } else if (checked === false && todo.id === idNumber) {
                todo.completed = false;
            }
            return todo;
        }));
    }

    const handleAdd = () => {
        if (value !== "") {
            setTodos([...todos, {
                id: todos.length + 1,
                description: value,
                completed: false
            }]);
        }
    }


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="container my-4">
            <div className="mb-3">
                <h1>Todo List</h1>
                <label className="mx-2">Añade tareas</label>
                <input value={value} onChange={handleChange} type="text" />
                <button onClick={handleAdd}>Añadir</button>
            </div>
            {todos.map(({ ...todos }) => (
                <div>
                    <TaskPage {...todos} onDelete={handleDelete} onComplete={handleComplete}></TaskPage>
                </div>
            ))}
        </div>);
}
export default TodoPage;
