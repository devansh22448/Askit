import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">
        AskIt-Q
      </Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/ask">Ask</Link>
        <Link to="/profile/1">Profile</Link>
      </div>
    </nav>
  );
}
