import { Link } from "react-router-dom";
import "../styles/memberCard.scss";

export default function MemberCard({name, image, email, slug}) {
    return (
        <article className="member-card">
            <img src={image} alt="member-image" />
            <h3>{name}</h3>
            <p>{email}</p>
            <Link to={`/members/${slug}`}>
                <button className="member-button">Se profil</button>
            </Link>
        </article>
    )
}