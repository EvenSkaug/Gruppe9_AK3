import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMemberBySlug } from "../sanity/fetches";

import EmailLink from "./EmailLink";
import WorkLog from "./WorkLog";

import "../styles/memberPage.scss";

export default function MemberPage({}) {
    // Henter slug - for videre filtrering
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
            <img src={currentMember?.image?.asset?.url} alt="member-image" />
            <article>
                <h1>{currentMember?.name}</h1>
                
                <EmailLink email={currentMember?.email} />

                <p>{currentMember?.description}</p>
                <h2>Interesser</h2>
                <ul>
                    {currentMember?.interests?.map((interest) => (
                        <li>{interest}</li>
                    ))}
                </ul>
            </article>
        </section>
        
        {/* Sender med slug for filtering av individuell arbeidslogg
        - se komponent */}
        <WorkLog memberSlug={member} />
        </>
    )
}