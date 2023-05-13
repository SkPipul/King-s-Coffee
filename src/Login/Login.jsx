import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const { signIn, signInWithGoogle, setLoading } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
          swal("Good job","Login Successful","success")
          navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });      
    };
    
    const handleGoogle = () => {
      signInWithGoogle()
      .then(res => {
          const user = res.user;
          console.log(user);
          const userData = {
            userName: user.displayName,
            email: user.email,
            role: 'buyer'
          }
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
              navigate(from, {replace: true})
            })
          setLoading(false)
          swal("Good job","Login Successful","success")
      })
      .catch(err => console.error(err))
    }
  return (        
      <div className="relative overflow-hidden bg-[url('/src/assets/login-bg.jpg')] flex justify-center">
        <form onSubmit={handleSubmit(handleLogin)} className="my-24 bg-black/70 px-10 py-8 rounded-md backdrop-filter backdrop-blur-lg">
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
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        <p className="mt-3 text-white">
          New to King'S Coffee?{" "}
          <Link className="text-orange-500" to="/signup">
            Create a new Account
          </Link>
        </p>
        <div className="divider max-w-xs text-gray-400">OR</div>
        <button onClick={handleGoogle} className="btn btn-outline w-full max-w-xs"><FcGoogle className="text-2xl mx-2"></FcGoogle> CONTINUE WITH GOOGLE</button>
        </form>
      </div>
  );
};

export default Login;
