import "../styles/studentCard.scss";

export default function StudentCard({name, image, epost}) {
    return (
        <article className="student-card">
            <img src={image} alt="student-image" />
            <h3>{name}</h3>
            <p>{epost}</p>
        </article>
    )
}