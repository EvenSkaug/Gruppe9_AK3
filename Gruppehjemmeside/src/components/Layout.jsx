import Nav from "./Nav";

import "../styles/layout.scss";

export default function Layout({children, members}) {
    // Overordnet struktur på siden
    return (
        <>
        <header className="grid">
            <Nav members={members} />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <p>2025 &copy; Webpage. All rights reserved.</p>
        </footer>
        </>
    )
}