import { useEffect, useState } from "react";
import { fetchAllWorkLogs, fetchWorkLogs } from "../sanity/fetches";
import "../styles/workLog.scss";
import SectionTitle from "./SectionTitle";

export default function WorkLog({memberId}) {

    const [workLogs, setWorkLogs] = useState([])
    
    const getWorkLogs = async () => {
        if (memberId) {
            const data = await fetchWorkLogs(memberId);
            setWorkLogs(data || []);
        }
    };

    const getAllWorkLogs = async () => {
        const data = await fetchAllWorkLogs();
        setWorkLogs(data || []);
    };

    useEffect(() => {
        if (memberId) {
            getWorkLogs();
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