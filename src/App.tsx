import "./App.css";
import Forms from "./components/forms";
import Label from "./components/label";
import Reducer from "./components/reducer";
import ZodForm from "./components/zodForm";
import Navbar from "./components/navbar";
import { evenodd } from "./utils/utils";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import React, { Suspense } from "react";
import Loading from "./components/Loading";
import PostSearch from "./components/PostSearch";
import { CounterRedux } from "./redux_example/counter";
import UserProfile from "./components/userProfile";

const products = [
  { id: "p1", name: "Laptop" },
  { id: "p2", name: "Mouse" },
  { id: "p3", name: "Keyboard" },
];

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(evenodd(numbers));

const EventsPage = React.lazy(() => import("./components/events"));
const UseStatePage = React.lazy(() => import("./components/usestate"));
function App() {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Label label={product.name} />
          </li>
        ))}
      </ul>

      <Navbar />
      <hr />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
          <Route path="/Events" element={<EventsPage />}></Route>
          <Route path="/UseStateEx" element={<UseStatePage />}></Route>
          <Route path="/Forms" element={<Forms />}></Route>
          <Route path="/ZodForm" element={<ZodForm />}></Route>
          <Route path="/Reducer/:countVal" element={<Reducer />}></Route>
          <Route path="/PostSearch" element={<PostSearch />}></Route>
          <Route path="/ReduxCounter" element={<CounterRedux />}></Route>
          <Route path="/ReduxThunk" element={<UserProfile />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
