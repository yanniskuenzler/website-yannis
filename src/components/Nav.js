import BasicNavLinks from "./BasicNavLinks";

function Nav() {
    return (
        <div>
            <nav className="py-1 bg-neutral-900">
                <ul className="flex space-x-20 justify-center">
                    <BasicNavLinks siteName="Home" />
                    <BasicNavLinks siteName="About" />
                    <BasicNavLinks siteName="Apps" />
                </ul>
            </nav>
        </div>
    )
}

export default Nav;