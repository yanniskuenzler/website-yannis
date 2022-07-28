function TodoItem(props) {
    return (
        <div className="flex gap-3 border p-2 mt-1 bg-gray-400">
            <div className="flex-col">
                <button
                    onClick={(id) => props.handleDelete(props.item.id)}
                    className="bg-green-600 hover:bg-green-500 p-1 m-1 rounded"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            </div>
            <p className="flex-col">{props.item.content}</p>
        </div>
    )
}

export default TodoItem;