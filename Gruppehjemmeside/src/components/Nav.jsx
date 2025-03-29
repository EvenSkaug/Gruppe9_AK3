import { Link } from "react-router-dom";

import "../styles/nav.scss";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Hjem</Link></li>
                <li><Link to="/stian">Stian</Link></li>
                <li><Link to="/even">Even</Link></li>
                <li><Link to="/simon">Simon</Link></li>
            </ul>
        </nav>
    )
}