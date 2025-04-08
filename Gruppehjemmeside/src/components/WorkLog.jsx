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
                {worklogs?.map((worklog) => (
                <li key={worklog._key}>
                {worklog.description} {worklog.date}
                </li>))}
            </ul>
        </section>
    )
}