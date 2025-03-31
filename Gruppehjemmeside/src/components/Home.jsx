import MemberCards from "./MemberCards";

import "../styles/home.scss";
import WorkLog from "./WorkLog";

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

        <WorkLog />
        </>
    )
}