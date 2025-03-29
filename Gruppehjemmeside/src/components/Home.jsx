import StudentCards from "./StudentCards";

import "../styles/home.scss";

export default function Home() {
    return (
        <>
        <section className="hero-section grid">
            <article>
                <h1>GRUPPE IX</h1>
                <p>En hjemmeside</p>
            </article>
        </section>
        <section className="student-cards-section grid">
            <h2 className="student-cards-section-title">Medlemmer</h2>

            <StudentCards />

        </section>
        <section className="work-log-section grid">
            <h2 className="work-log-section-title">Arbeidslogg</h2>
        </section>
        </>
    )
}