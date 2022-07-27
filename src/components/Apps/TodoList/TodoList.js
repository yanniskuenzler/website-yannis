import React, {useState, useEffect} from "react";
import AddTodoItem from "./AddTodoItem";
import TodoItem from "./TodoItem";

function TodoList() {
    const [inputValue, setInputValue] = useState("")
    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        getAllTodoItems()
    }, [""]);
    

    const handleFormChange = (event) => {
            let value = event.target.value;
            setInputValue(value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue !== "") {
            addNewTodoItem();
        }
    }

    const addNewTodoItem = () => {
        let prevState = todoItems;
        prevState.push(inputValue);
        setTodoItems(prevState);

        localStorage.setItem('todo-list-items', JSON.stringify(todoItems));
        setInputValue("");
    }

    const getAllTodoItems = () => {
        let items = localStorage.getItem('todo-list-items');
        setTodoItems(JSON.parse(items));
    }

    return (
        <div>
            <AddTodoItem
                inputValue={inputValue}
                handleFormChange={handleFormChange}
                handleKeyDown={handleKeyDown}
            />
            {todoItems.map((todoItem, key) => <TodoItem text={todoItem} key={key} />)}
        </div>
    )
}

export default TodoList;