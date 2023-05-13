import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import swal from "sweetalert";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signUpError, setSignUpError] = useState("");
  const { createUser, updateUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        swal("Good","User Created Successfully.", "success");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            const userData = {
              userName: user.displayName,
              email: user.email,
              role: data.role
            }
            console.log(userData);
            fetch('https://unique-store-server.vercel.app/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(userData)
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              setLoading(false)
              navigate("/");
            })
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  return (
    <div className="relative overflow-hidden bg-[url('/src/assets/login-bg.jpg')] flex justify-center">
      <form onSubmit={handleSubmit(handleSignUp)} className="my-24 bg-black/70 px-10 py-8 rounded-md backdrop-filter backdrop-blur-lg">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="text-white">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="text-white">Email</span>
          </label>
          <input
            type="text"
            {...register("email", {
              required: "Email Address is required",
            })}
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="text-white">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            className="input input-bordered w-full mb-8"
          />
          {errors.email && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
        </div>
        <input
          className="btn bg-[#6F4E37] border-none w-full max-w-xs"
          value="SignUp"
          type="submit"
        />
        <div>
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </div>
        <p className="mt-3 text-white">
          Already have an account?{" "}
          <Link className="text-orange-500" to="/login">
            Please log in here
          </Link>
        </p>
        {/* <div className="divider max-w-xs text-gray-400">OR</div>
        <button className="btn btn-outline w-full max-w-xs">
          <FcGoogle className="text-2xl mx-2"></FcGoogle> CONTINUE WITH GOOGLE
        </button> */}
      </form>
    </div>
  );
};

export default SignUp;
