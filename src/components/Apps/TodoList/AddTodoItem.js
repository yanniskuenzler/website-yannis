function AddTodoItem(props) {
    return (
        <div>
            <input
                type="text"
                value={props.inputValue}
                placeholder="Todo"
                onChange={(event) => props.handleFormChange(event)}
                onKeyDown={(event) => props.handleKeyDown(event)}
                className="block border m-auto mt-5 p-1"
            />
        </div>
    )
}

export default AddTodoItem;