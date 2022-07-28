import BasicNavLinks from "./BasicNavLinks";

function Nav() {
    return (
        <div>
            <nav className="py-1 bg-neutral-900">
                <ul className="flex space-x-20 justify-center">
                    <BasicNavLinks endpoint="/" siteName="Homeee" />
                    <BasicNavLinks endpoint="/about" siteName="About" />
                    <BasicNavLinks endpoint="/apps" siteName="Apps" />
                </ul>
            </nav>
        </div>
    )
}

export default Nav;