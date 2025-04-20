import { useEffect, useState } from "react";
import { fetchAllWorkLogs, fetchWorkLogsByMember } from "../sanity/fetches";

import SectionTitle from "./SectionTitle";

import "../styles/workLog.scss";

export default function WorkLog({memberSlug}) {
    const [workLogs, setWorkLogs] = useState([])
    
    const getWorkLogsByMember = async () => {
        if (memberSlug) {
            /* Dersom det finnes en slug (true), vil arbeidsloggen kun vise
            logg for medlemmet som matcher slug-en. */
            const data = await fetchWorkLogsByMember(memberSlug);
            setWorkLogs(data);
        }
    };

    const getAllWorkLogs = async () => {
        // Dersom det ikke finnes en slug, blir alle logger skrevet ut.
        const data = await fetchAllWorkLogs();
        setWorkLogs(data);
    };

    useEffect(() => {
        if (memberSlug) {
            // Kalles kun dersom det finnes en slug
            getWorkLogsByMember();
        }
        else {
            // Kalles dersom det ikke finnes en slug
            getAllWorkLogs();
        }
        // Sjekker på endringer i slug-en
    }, [memberSlug]);
    
    return (
        <section className="work-log-section grid">
            <SectionTitle title="Arbeidslogg" />
            
            <ul>
                {workLogs?.map((log) => (
                <li key={log._key}>
                    <span>{log.description}</span> 
                    <span>
                        {/* 
                            - Konverterer til ISO format
                            - Beholder kun tegn til og med index 9 (10 første tegn)
                            - Splitter strengen til en array, basert på: "-"
                            - Reverserer array-ens rekkefølge (preferanse)
                            - Legger til "/" mellom hver streng i array-en (preferanse) 
                        */}
                        {new Date(log.date).toISOString().slice(0, 10).split("-").reverse().join("/")}
                    </span>
                </li>))}
            </ul>
        </section>
    )
}