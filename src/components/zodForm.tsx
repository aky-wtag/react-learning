import { useState } from "react";
import * as z from "zod";

export default function ZodForm() {
  const [user, setUser] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({ name: "", password: "" });
  const userSchema = z.object({
    name: z
      .string()
      .min(1, "Name is Required")
      .max(3, "Too Long 3 Characters Only"),
    password: z.string().nonempty().min(1, "password required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const result = userSchema.safeParse(user); // 2. Validate the state

    if (!result.success) {
      // Format errors from Zod into a state-friendly object
      const formattedErrors = {} as any;
      for (const issue of result.error.issues) {
        formattedErrors[issue.path[0]] = issue.message;
      }
      setErrors(formattedErrors);
    } else {
      setErrors({ name: "", password: "" });
      console.log("Form is valid!", result.data);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <br />

        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
