import { useEffect, useState } from "react";
import { fetchAllWorkLogs, fetchWorkLogsByMember } from "../sanity/fetches";
import "../styles/workLog.scss";
import SectionTitle from "./SectionTitle";

export default function WorkLog({memberSlug}) {

    const [workLogs, setWorkLogs] = useState([])
    
    const getWorkLogsByMember = async () => {
        if (memberSlug) {
            const data = await fetchWorkLogsByMember(memberSlug);
            setWorkLogs(data);
        }
    };

    const getAllWorkLogs = async () => {
        const data = await fetchAllWorkLogs();
        setWorkLogs(data);
    };

    useEffect(() => {
        if (memberSlug) {
            getWorkLogsByMember();
        }
        else {
            getAllWorkLogs();
        }
    }, [memberSlug]);
    
    return (
        <section className="work-log-section grid">
            <SectionTitle title="Arbeidslogg" />
            
            <ul>
                {workLogs?.map((log) => (
                <li key={log._key}>
                    <span>{log.description}</span> 
                    <span>
                        {new Date(log.date).toISOString().slice(0, 10).split("-").reverse().join("/")}
                    </span>
                </li>))}
            </ul>
        </section>
    )
}