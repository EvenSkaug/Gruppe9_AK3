import "../styles/studentCard.scss";

export default function StudentCard({name, image, biography}) {
    return (
        <article className="student-card">
            <img src={image} alt="student-image" />
            <h3>{name}</h3>
            <p>{biography}</p>
        </article>
    )
}