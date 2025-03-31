import "../styles/memberCard.scss";

export default function MemberCard({name, image, epost}) {
    return (
        <article className="member-card">
            <img src={image} alt="member-image" />
            <h3>{name}</h3>
            <p>{epost}</p>
        </article>
    )
}