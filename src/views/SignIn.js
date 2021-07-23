import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div>
      <div>
        <Link to="/signup">Don't have an account</Link>
        <Link to="/home">Log in</Link>
      </div>
    </div>
  );
}
