import MemberCards from "./MemberCards";
import WorkLog from "./WorkLog";

import "../styles/home.scss";
import SectionTitle from "./SectionTitle";

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
            <SectionTitle title="Medlemmer" />
            
            <MemberCards />
        </section>

        <WorkLog />
        </>
    )
}