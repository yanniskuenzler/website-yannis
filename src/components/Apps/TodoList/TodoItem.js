function TodoItem(props) {
    return (
        <div className="flex gap-2 border p-2 mt-1 bg-gray-400">
            <p className="flex-col basis-3/4">{props.item.content}</p>
            <div className="flex flex-col basis-1/4">
                <button onClick={(id) => props.handleDelete(props.item.id)} className="bg-red-600 p-1 m-1">Löschen</button>
                <button onClick={(id) => props.handleDelete(props.item.id)} className="bg-green-600 p-1 m-1">Erledigt</button>
            </div>
        </div>
    )
}

export default TodoItem;