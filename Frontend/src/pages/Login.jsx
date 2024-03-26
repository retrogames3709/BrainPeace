import { auth } from "../components/firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        // Handle sign-in errors here
        console.error("Error signing in with Google:", error);
      });
  };

  return (
    <div className="loginPage">
      <header className="login-header">
        <h1>Welcome to BrainPeace</h1>
        <p>Please sign in with Google to continue.</p>
      </header>
      <div className="login-content">
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          
          Sign in with Google
        </button>
      </div>
      <footer className="login-footer">
        <p>
          By signing in, you agree to our{" "}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default Login;