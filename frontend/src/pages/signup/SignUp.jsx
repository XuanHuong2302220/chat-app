import { Link } from "react-router-dom";
import CheckGender from "../../components/CheckGender";
import InputLabel from "../../components/InputLabel";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleChangeGender = (gender) => {
    setInputs({ ...inputs, gender: gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          SignUp
          <span className=" text-blue-700"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <InputLabel
            label="FullName"
            type="text"
            placeholder="Enter fullname"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />
          <InputLabel
            label="UserName"
            type="text"
            placeholder="Enter username"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
          <InputLabel
            label="Password"
            type="password"
            placeholder="Enter password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          <InputLabel
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />

          <div className="p-2">
            <CheckGender
              onChangeGender={handleChangeGender}
              selectedGender={inputs.gender}
            />
          </div>
          <Link
            to="/login"
            className="text-md text-gray-100 px-2 mt-3 inline-block hover:underline hover:text-blue-500"
          >
            Already have an account
          </Link>
          <div>
            <button
              className="btn btn-block btn-md mt-3 hover:bg-gray-700 border-none"
              type="submit"
              disabled={loading}
            >
              {!loading ? "Save" : <div className="loading loading-spinner" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
