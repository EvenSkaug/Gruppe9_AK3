import { useEffect, useState } from "react";
import { fetchAllWorklogs } from "../sanity/fetches";
import "../styles/workLog.scss";
import SectionTitle from "./SectionTitle";

export default function WorkLog() {
    
    const [worklogs, setWorklogs] = useState([])

    const getAllWorklogs = async () => {
        const data = await fetchAllWorklogs();
        setWorklogs(data);
      };

      useEffect(() => {
        getAllWorklogs();
        
      }, []);
    
    return (
        <section className="work-log-section grid">
            <SectionTitle title="Arbeidslogg" />
            
            <ul>
                {worklogs?.map((log) => (
                <li key={log._key}>
                <span>{log.description}</span> 
                <span>{log.date}</span>
                </li>))}
            </ul>
        </section>
    )
}