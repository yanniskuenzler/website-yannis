import BasicNavLinks from "./BasicNavLinks";

function Nav() {
    return (
        <div>
            <nav>
                <ul className="flex space-x-20 justify-center bg-neutral-900">
                    <BasicNavLinks siteName="Home" />
                    <BasicNavLinks siteName="About" />
                    <BasicNavLinks siteName="Apps" />
                </ul>
            </nav>
        </div>
    )
}

export default Nav;