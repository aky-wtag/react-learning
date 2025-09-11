import { useState } from "react";

export default function Forms() {
  const [user, setUser] = useState({ name: "", password: "" });
  const [validationErros, setError] = useState({ name: "", password: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErros: { name: string; password: string } = {
      name: "",
      password: "",
    };
    if (user.name.length < 1) {
      validationErros.name = "Username is required";
    }
    if (user.password.length < 3) {
      validationErros.password = "Password must be at least 4 characters";
    }
    setError(validationErros);
    if (!Object.values(validationErros).some(x=>x.length)) {
      console.log("Form data submitted:", user);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          id="name"
          placeholder="name"
          onChange={handleChange}
        />
         {validationErros.name && <p style={{ color: 'red' }}>{validationErros.name}</p>}
        <input
          type="password"
          name="password"
          value={user.password}
          id="password"
          onChange={handleChange}
        />
         {validationErros.password && <p style={{ color: 'red' }}>{validationErros.password}</p>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
