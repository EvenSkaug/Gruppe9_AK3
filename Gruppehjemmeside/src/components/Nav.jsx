import { Link } from "react-router-dom";

import "../styles/nav.scss";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Hjem</Link></li>
                <li><Link to="/">Stian</Link></li>
                <li><Link to="/">Even</Link></li>
                <li><Link to="/">Simon</Link></li>
            </ul>
        </nav>
    )
}