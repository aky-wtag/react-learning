import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <nav>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
