function TaskPage({ onDelete, onComplete, ...props }) {

    const deleteTodo = () => onDelete(props.id);
    const completeTodo = (event) => onComplete(props.id, event.target.checked);

    return (
        <div className="tasks" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <input type="checkbox" id="check" onChange={completeTodo} />
                <p className="mx-3 my-3">{props.id}</p>
            </div>
            {props.completed !== true ?
                <p className="mx-3 my-3">{props.description}</p>
                : <p className="mx-3 my-3" style={{ textDecoration: "line-through" }}>{props.description}</p>}
            <button type="button" className="btn btn-danger" onClick={deleteTodo}>Borrar</button>
        </div>);
}
export default TaskPage;
