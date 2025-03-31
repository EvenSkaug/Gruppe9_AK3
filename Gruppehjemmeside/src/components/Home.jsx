import MemberCards from "./MemberCards";

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
        <section className="member-cards-section grid">
            <h2 className="member-cards-section-title">Medlemmer</h2>

            <MemberCards />

        </section>
        <section className="work-log-section grid">
            <h2 className="work-log-section-title">Arbeidslogg</h2>
        </section>
        </>
    )
}