import { useParams } from "react-router-dom"

import "../styles/pageContent.scss"

export default function PageContent() {
    const {slug} = useParams();
 
    return (
        <section className="page-content-section grid">
            <img src="../200x200.png" alt="student-image" />
            <h1>Side for {slug}</h1>

        </section>
    )
}