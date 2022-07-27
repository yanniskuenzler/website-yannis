function BasicNavLinks(props) {
    return (
        <li className="flex-none p-1"><a href={props.endpoint} className="text-white hover:text-gray-400">{props.siteName}</a></li>
    )
}

export default BasicNavLinks;