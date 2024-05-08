import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm"
import "./AuthPage.css"
import MatchPercentLogoText from "../../components/MatchPercentLogoText/MatchPercentLogoText";

export default function AuthPage({ setUser }) {
  return (
    <main>
      <MatchPercentLogoText />
      <br />
      <div className="auth-page-forms-container">
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser} />
      </div>
    </main>
  )
}