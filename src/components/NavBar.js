import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function NavBar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-8 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white mr-4 px-6 py-2">Account</button>
          </Link>
          <Link to="/signup">
            <button
              onClick={handleLogout}
              className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
            >
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white mr-4 px-6 py-2">Sign in</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
