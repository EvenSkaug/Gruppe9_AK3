import { useParams } from "react-router-dom"

import "../styles/pageContent.scss"
import WorkLog from "./WorkLog";

export default function PageContent() {
    // Hovedinnholdet på siden
    const {member} = useParams();
 
    return (
        <>
        <section className="page-content-section grid">
            <img src="../200x200.png" alt="member-image" />
            <h1>Side for {member}</h1>

        </section>
        
        <WorkLog />
        </>
    )
}