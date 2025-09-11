import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <nav>
          <Link to="/dashboard">Dashboard</Link> -
          <Link to="/Events">Events</Link> -
          <Link to="/UseStateEx">UseStateEx</Link> -
          <Link to="/Forms">Forms</Link> -<Link to="/ZodForm">ZodForm</Link> -
          <Link to="/Reducer/:countVal">Reducer</Link> -
          <Link to="/MemoEx">MemoEx</Link> -
          <Link to="/PostSearch">PostSearch</Link>
        </nav>
      </nav>
    </>
  );
}
