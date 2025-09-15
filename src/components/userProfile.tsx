import { useDispatch, useSelector } from "react-redux";
import { fetechUserById } from "../redux_example/userSlice";
import { useEffect } from "react";

export default function UserProfile() {
  const { user, status, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetechUserById(1));
    }
  }, [status, dispatch]);
  let content;
  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    content = (
      <div>
        <h3>{user.id}</h3>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Website: {user.website}</p>
      </div>
    );
  } else if (status === "failed") {
    content = <p>Error: {error}</p>;
  }

  return (
    <>
      <section>
        <h2>User Profile</h2>
        {content}
      </section>
      <button onClick={() => dispatch(fetechUserById(2))}> Fetch user 2</button>
    </>
  );
}
