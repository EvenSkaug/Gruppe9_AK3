import SectionTitle from "./SectionTitle";
import MemberCards from "./MemberCards";
import WorkLog from "./WorkLog";

import "../styles/home.scss";

export default function Home({members}) {
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
            
            <MemberCards members={members} />
        </section>

        <WorkLog />
        </>
    )
}