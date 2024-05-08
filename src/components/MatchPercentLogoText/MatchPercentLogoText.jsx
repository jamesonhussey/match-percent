import { Link } from "react-router-dom"
import "./MatchPercentLogoText.css"

export default function MatchPercentLogoText() {
    return (
        <div className='match-percent-logo-text-container'>
            <Link className="match-percent-logo-text" to="/">
                <h1 className="match-percent-logo-text">Match%</h1>
            </Link>
        </div>
    )
}