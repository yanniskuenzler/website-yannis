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
        let prevState = [];
        if (todoItems !== null) {
            prevState = todoItems;
        }
        prevState.push({content: inputValue, id: crypto.randomUUID()});

        setTodoItems(prevState);

        localStorage.setItem('todo-list-items', JSON.stringify(todoItems || prevState));
        setInputValue("");
    }

    const handleDelete = (id) => {
        let items = todoItems.filter(item => item.id !== id);
        setTodoItems(items);
        localStorage.setItem('todo-list-items', JSON.stringify(items));
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
            {todoItems !== null &&
                <div className="md:mx-20 mt-5">
                    {todoItems.map((todoItem) => <TodoItem item={todoItem} handleDelete={handleDelete} key={todoItem.id}/>)}
                </div>
            }
        </div>
    )
}

export default TodoList;