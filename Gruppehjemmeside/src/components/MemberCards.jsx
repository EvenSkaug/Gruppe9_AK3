import MemberCard from "./MemberCard";

import "../styles/memberCards.scss";

export default function MemberCards({members}) {
    return (
        <>
        <div className="member-cards grid">
            {(members).map((member) => (
                <MemberCard
                    key={member._id} // Unikt medlem, basert på id
                    image={member.image.asset.url}
                    name={member.name}
                    email={member.email}
                    slug={member.slug}
                />
            ))}
        </div>
        </>
    )
}