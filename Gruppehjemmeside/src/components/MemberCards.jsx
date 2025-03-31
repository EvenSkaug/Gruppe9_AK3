import MemberCard from "./MemberCard";

import "../styles/memberCards.scss";

export default function MemberCards() {
    const members = [
        {id: 1, name: "Stian", image: "../200x200.png", epost: "stian@email.com"},
        {id: 2, name: "Even", image: "../200x200.png", epost: "even@email.com"},
        {id: 3, name: "Simon", image: "../200x200.png", epost: "simon@email.com"}
      ]

    return (
        <>
        <div className="member-cards grid">
            {(members).map((member) => (
                <MemberCard
                    key={member.id} // Unikt medlem, basert på id
                    image={member.image}
                    name={member.name}
                    epost={member.epost}
                />
            ))}
        </div>
        </>
    )
}