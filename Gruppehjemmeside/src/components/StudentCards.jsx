import StudentCard from "./StudentCard";

import "../styles/studentCards.scss";

export default function StudentCards() {
    const students = [
        {id: 1, name: "Stian", image: "../200x200.png", epost: "stian@email.com"},
        {id: 2, name: "Even", image: "../200x200.png", epost: "even@email.com"},
        {id: 3, name: "Simon", image: "../200x200.png", epost: "simon@email.com"}
      ]

    return (
        <>
        <div className="student-cards grid">
            {(students).map((student) => (
                <StudentCard
                    key={student.id} // Unique student based on their id
                    image={student.image}
                    name={student.name}
                    epost={student.epost}
                />
            ))}
        </div>
        </>
    )
}