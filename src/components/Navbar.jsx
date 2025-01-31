import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navbar = () => {
  const loggedInUser = useSelector((store) => store.user);

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Dev Connect
        </Link>
      </div>
      {loggedInUser && (
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end mx-5 flex">
            <div className="flex items-center">
              <p className="px-4">Welcome, {loggedInUser?.firstName}</p>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Photo" src={loggedInUser?.photoUrl} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
