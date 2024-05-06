import { Link } from "react-router-dom"

export default function ProfileCard({ user }) {
    return (
        <li>
            <div>
                <img src={user.profileImages[0]} alt="" />
            </div>
            <div>{user.profileName}</div>
            <div>{user.bio}</div>
            <div>
                <img src={user.profileImages[1]} alt="" />
            </div>
            <div>MBTI Personality Type: {user.personalityType}</div>
            <div>Gender: {user.gender}</div>
            <div>
                <img src={user.profileImages[2]} alt="" />
            </div>
            <Link to="/">Like</Link>
            &nbsp; | &nbsp;
            <Link to="/">Dislike</Link>
        </li>
    )
}