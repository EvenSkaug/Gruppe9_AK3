import "../styles/memberCard.scss";

export default function MemberCard({name, image, email}) {
    return (
        <article className="member-card">
            <img src={image} alt="member-image" />
            <h3>{name}</h3>
            <p>{email}</p>
        </article>
    )
}