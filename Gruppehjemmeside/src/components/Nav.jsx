import { Link } from "react-router-dom";

import "../styles/nav.scss";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Hjem</Link></li>
                <li><Link to="members/stian">Stian</Link></li>
                <li><Link to="members/even">Even</Link></li>
                <li><Link to="members/simon">Simon</Link></li>
            </ul>
        </nav>
    )
}