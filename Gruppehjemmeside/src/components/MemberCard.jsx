import { Link } from "react-router-dom";

import EmailLink from "./EmailLink";

import "../styles/memberCard.scss";

export default function MemberCard({name, image, email, slug}) {
    return (
        <article className="member-card">
            <img src={image} alt="member-image" />
            <h3>{name}</h3>

            <EmailLink email={email} />

            <Link to={`/members/${slug}`} className="member-link">
                <button className="member-button">Se profil</button>
            </Link>
        </article>
    )
}