import React from "react";
import { useState } from "react";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("Form Submitted");
    console.log("Email is: ",email);
    console.log("Password is: ",password);

    setEmail("");
    setPassword("");

	};
	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<div className="border-2 rounded-xl border-emerald-600 p-20 ">
				<form
					onSubmit={submitHandler}
					className="flex items-center justify-center flex-col"
				>
					<input value={email}
          onChange={(e)=>setEmail(e.target.value)}
						required
						type="email"
						placeholder="Email"
						className="w-full py-3 px-8 mb-4 border border-emerald-600 rounded-full font-medium text-lg outline-none bg-transparent placeholder:text-gray-400 text-white"
					/>
					<input value={password}
          onChange={(e)=>setPassword(e.target.value)}
						required
						type="password"
						placeholder="Password"
						className="w-full py-3 px-8 mb-4 border border-emerald-600 rounded-full font-medium text-lg outline-none bg-transparent placeholder:text-gray-400 text-white"
					/>
					<button
						type="submit"
						className=" bg-emerald-600 text-white py-3 px-12 text-xl rounded-full hover:bg-emerald-700  border-none outline-none "
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
