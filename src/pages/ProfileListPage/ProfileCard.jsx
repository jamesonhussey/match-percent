import { Link } from "react-router-dom"
import { personalityData } from "./personalityData"
import "./ProfileListPage.css"

export default function ProfileCard({ activeUser, user }) {
    const IMDB = 0
    const INFP = 0
    const ENFP = 1
    const INFJ = 2
    const ENFJ = 3
    const INTJ = 4
    const ENTJ = 5
    const INTP = 6
    const ENTP = 7
    const ISFP = 8
    const ESFP = 9
    const ISTP = 10
    const ESTP = 11
    const ISFJ = 12
    const ESFJ = 13
    const ISTJ = 14
    const ESTJ = 15
    
    console.log("Target User PT: " + user.personalityType)
    console.log("Target User Name: " + user.profileName)
    let userPTVar = eval(user.personalityType)
    console.log("Target User PT Var: " + userPTVar)

    console.log("Active User PT: " + activeUser.profile.personalityType)
    console.log("Active User Name: " + activeUser.profile.profileName)
    let activeUserPTVar = eval(activeUser.profile.personalityType)
    console.log("Active User PT Var: " + activeUserPTVar)

    let matchPTScore = personalityData[userPTVar][activeUserPTVar]

    return (
        <div className="profile-card-container">
            <li>
                <div>
                    <img className="profile-pictures" src={user.profileImages[0]} alt="" />
                </div>
                <div className="name-container">{user.profileName}</div>
                <br />
                <div className="bio-container">Bio: </div>
                <div className="bio-container">{user.bio}</div>
                {/* <div>
                <img className="profile-pictures" src={user.profileImages[1]} alt="" />
            </div> */}
                {/* <div>MBTI Personality Type: {user.personalityType}</div>
                <div>Gender: {user.gender}</div> */}
                <br /><br /><br />
                <div className="overall-score-container">Match% Overall Compatibility Score - {matchPTScore}%</div>
                <div>
                    Personality Compatibility: <br />
                    {activeUser.profile.personalityType} + {user.personalityType} -&gt; {matchPTScore}%
                </div>
                <br />
                {/* <div>
                <img className="profile-pictures" src={user.profileImages[2]} alt="" />
            </div> */}
                <div className="like-dislike-container">
                    <Link to="/">
                        <img className="heart-image" src="https://pixsector.com/cache/5f5275bf/av83bcb11eee42d2ca6cd.png" alt="" />
                    </Link>
                    <Link to="/">
                        <img className="x-image" src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/close-512.png" alt="" />
                    </Link>
                </div>
            </li>
        </div>
    )
}