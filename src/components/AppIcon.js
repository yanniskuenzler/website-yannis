function AppIcon(props) {
    return (
        <div>
            <a href={"/apps" + props.endpoint}>
                <div className="bg-amber-600 p-3 hover:bg-amber-400">
                    <p>{props.appName}</p>
                </div>
            </a>
        </div>
    )
}

export default AppIcon;