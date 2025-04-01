import "../styles/workLog.scss";
import SectionTitle from "./SectionTitle";

export default function WorkLog() {
    // Gjenbrukbar arbeidslogg (må tilpasses med props)
    return (
        <section className="work-log-section grid">
            <SectionTitle title="Arbeidslogg" />
            
            {/** Innhold; mapping per loggføring */}
        </section>
    )
}