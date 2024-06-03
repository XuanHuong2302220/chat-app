import { useState } from "react";
import InputLabel from "../../components/InputLabel";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { loading, login } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-700"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <InputLabel
            label="UserName"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputLabel
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link
            to="/signup"
            className="text-md px-2 mt-3 inline-block hover:underline hover:text-blue-500"
          >
            {"Don't"} have an account ?
          </Link>
          <div>
            <button
              className="btn btn-block btn-md mt-3 hover:bg-gray-700 border-none"
              type="submit"
              disabled={loading}
            >
              {!loading ? "Login" : <div className="loading loading-spinner" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//
