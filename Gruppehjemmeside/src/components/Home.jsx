import StudentCards from "./StudentCards";

import "../styles/home.scss";

export default function Home() {
    return (
        <>
        <section className="hero-section grid">
            <article>
                <h1>Arbeidslogg</h1>
                <p>En hjemmeside</p>
            </article>
        </section>
        <section className="student-cards-section grid">
            <h2 className="student-cards-section-title">Medlemmer</h2>

            <StudentCards />

        </section>
        </>
    )
}