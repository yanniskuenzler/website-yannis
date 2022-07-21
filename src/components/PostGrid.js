import Post from "./Post";

function PostGrid() {
    return (
        <div className="grid grid-cols-2 mx-20 my-2 gap-2">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default PostGrid;