function AddTodoItem(props) {
    return (
        <div>
            <input
                type="text"
                value={props.inputValue}
                placeholder="neuer Eintrag"
                onChange={(event) => props.handleFormChange(event)}
                onKeyDown={(event) => props.handleKeyDown(event)}
                className="block border rounded m-auto mt-5"
            />
        </div>
    )
}

export default AddTodoItem;