function AppIcon(props) {
    return (
        <div>
            <a href={"https://yanniskuenzler.github.io/website-yannis/#/apps" + props.endpoint}>
                <div className="bg-amber-600 p-3 hover:bg-amber-400">
                    <p>{props.appName}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                    </svg>
                </div>
            </a>
        </div>
    )
}

export default AppIcon;