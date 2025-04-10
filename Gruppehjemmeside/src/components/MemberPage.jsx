import { useParams } from "react-router-dom"

import WorkLog from "./WorkLog";

import "../styles/memberPage.scss"
import { useEffect, useState } from "react";
import { fetchMemberBySlug } from "../sanity/fetches";

export default function MemberPage({}) {
    const {member} = useParams();
    const [currentMember, setCurrentMember] = useState([]);

    const getMemberBySlug = async () => {
        const data = await fetchMemberBySlug(member);
        setCurrentMember(data[0]);
    };

    useEffect(() => {
        getMemberBySlug();
    }, [member])
  
    return (
        <>
        <section className="page-content-section grid">
            <article className="grid">
                <img src={currentMember?.image?.asset?.url} alt="member-image" />
                <h1>{currentMember?.name}</h1>
                <p>{currentMember?.description}</p>
            </article>
        </section>
        
        <WorkLog memberId={member}/>
        </>
    )
}