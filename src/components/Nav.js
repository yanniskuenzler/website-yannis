function Nav() {
    return (
        <div>
            <nav>
                <ul className="flex space-x-20 justify-center bg-neutral-900">
                    <li className="flex-none p-1"><a href="#" className="text-white hover:text-gray-400">Home</a></li>
                    <li className="flex-none p-1"><a href="#" className="text-white hover:text-gray-400">About</a></li>
                    <li className="flex-none p-1"><a href="#" className="text-white hover:text-gray-400">Apps</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;