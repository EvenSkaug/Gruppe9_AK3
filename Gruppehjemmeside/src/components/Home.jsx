import StudentCards from "./StudentCards";

import "../styles/home.scss";

export default function Home() {
    return (
        <>
        <section className="hero-section grid">
            <article>
                <h1>Arbeidskrav 3</h1>
            </article>
        </section>
        <section className="student-cards-section grid">
            <h2 className="student-cards-section-title">Gruppe 9</h2>

            <StudentCards />

        </section>
        </>
    )
}