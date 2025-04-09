import { useEffect, useState } from "react";
import { fetchAllWorkLogs, fetchWorkLogsByMember } from "../sanity/fetches";
import "../styles/workLog.scss";
import SectionTitle from "./SectionTitle";

export default function WorkLog({memberId}) {

    const [workLogs, setWorkLogs] = useState([])
    
    const getWorkLogsByMember = async () => {
        if (memberId) {
            const data = await fetchWorkLogsByMember(memberId);
            setWorkLogs(data || []);
        }
    };

    const getAllWorkLogs = async () => {
        const data = await fetchAllWorkLogs();
        setWorkLogs(data || []);
    };

    useEffect(() => {
        if (memberId) {
            getWorkLogsByMember();
        }
        else {
            getAllWorkLogs();
        }
    }, [memberId]);
    
    return (
        <section className="work-log-section grid">
            <SectionTitle title="Arbeidslogg" />
            
            <ul>
                {workLogs?.map((log) => (
                <li key={log._key}>
                <span>{log.description}</span> 
                <span>{log.date}</span>
                </li>))}
            </ul>
        </section>
    )
}