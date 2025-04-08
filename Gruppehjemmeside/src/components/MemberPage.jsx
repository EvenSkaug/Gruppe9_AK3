import { useParams } from "react-router-dom"

import WorkLog from "./WorkLog";

import "../styles/memberPage.scss"

export default function MemberPage({members}) {

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