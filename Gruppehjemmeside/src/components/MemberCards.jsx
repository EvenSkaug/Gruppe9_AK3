import MemberCard from "./MemberCard";
import "../styles/memberCards.scss";
import { fetchAllMembers } from "../sanity/fetches";
import { useEffect, useState } from "react";

export default function MemberCards() {

    const [members, setMembers] = useState([])

    const getAllMembers = async () => {
            const data = await fetchAllMembers();
            setMembers(data);
          };
    
        useEffect(() => {
            getAllMembers();
          }, []);     
    
          return (
        <>
        <div className="member-cards grid">
            {(members).map((member) => (
                <MemberCard
                    key={member._id} // Unikt medlem, basert på id
                    image={member.image.asset.url}
                    name={member.name}
                    email={member.email}
                />
            ))}
        </div>
        </>
    )
}