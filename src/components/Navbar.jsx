
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-500">
        🚗 RentalZone
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        {currentUser && <Link to="/my-bookings" className="hover:text-blue-300">My Bookings</Link>}
        {!currentUser ? (
          <Link to="/login" className="hover:text-green-400 font-medium">Login</Link>
        ) : (
          <button
            onClick={handleLogout}
            className="hover:text-red-400 font-medium"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
