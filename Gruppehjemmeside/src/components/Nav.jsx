import { Link } from "react-router-dom";

import "../styles/nav.scss";

export default function Nav({members}) {
    return (
        <nav>
            <ul>
                <li><Link to="/">Hjem</Link></li>
                {members?.map((member) => (
                    <li key={member._id}>
                        <Link to={`/members/${member.slug}`}>{member.navname}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}