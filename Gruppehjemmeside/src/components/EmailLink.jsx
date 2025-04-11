import "../styles/emailLink.scss"

export default function MailLink({email}) {
    return <a href={`mailto:${email}`} className="email-link">{email}</a>
}