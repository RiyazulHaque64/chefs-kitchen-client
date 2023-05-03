import { Link, useLocation, useNavigate } from "react-router-dom";
import loginIllustration from "../assets/image/Mobile-login-Cristina.jpg";
import googleIcon from "../assets/image/google_icon.png";
import githubIcon from "../assets/image/github_icon.png";
import { BiError } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signinWithGoogle, signinWithGithub, loginUser, setUserProfile } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleGoogleSignin = () => {
    signinWithGoogle()
      .then(() => {
        setUserProfile(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGithubSignin = () => {
    signinWithGithub()
      .then(() => {
        setUserProfile(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="py-10 mb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2 relative before:duration-500 before:mt-6 before:absolute before:content-[''] before:top-full before:left-1/2 before:w-[6%] before:h-[2px] before:ml-[-3%] before:bg-lime-600 hover:before:w-[24%] lg:hover:before:w-[18%] hover:before:ml-[-12%] lg:hover:before:ml-[-9%] before:z-50 after:mt-6 after:absolute after:content-[''] after:top-full after:left-1/2 after:w-[24%] lg:after:w-[18%] after:h-[2px] after:ml-[-12%] lg:after:ml-[-9%] after:bg-gray-200">
          Login
        </h2>
      </div>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-8 items-center justify-between lg:gap-20">
        <div className="col-span-4 flex flex-col gap-4">
          {error && (
            <div className="text-xl text-red-600 bg-red-50 border border-red-200 flex items-center justify-between shadow mb-6 p-6 rounded-lg">
              <div className="flex items-center justify-center gap-2">
                <BiError className="w-14 h-14 md:w-6 md:h-6 lg:w-6 lg:h-6" />
                <span className="text-sm lg:text-base">{error}</span>
              </div>
              <HiOutlineXMark
                onClick={() => setError("")}
                className="w-14 h-14 md:w-6 md:h-6 lg:w-6 lg:h-6 cursor-pointer"
              />
            </div>
          )}
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4"
            action=""
          >
            <input
              className="border border-gray-500 focus:outline-lime-600 rounded-full px-4 py-2 shadow"
              type="email"
              name="email"
              placeholder="Type your email"
              required
            />
            <input
              className="border border-gray-500 focus:outline-lime-600 rounded-full px-4 py-2 shadow"
              type="password"
              name="password"
              placeholder="Type your password"
              required
            />
            <input
              className="border bg-lime-600 text-white text-xl font-bold rounded-full px-4 py-2 cursor-pointer"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            Not registered yet?{" "}
            <Link className="text-lime-600 hover:underline" to="/register">
              Create an Account
            </Link>
          </p>
          <div className="text-center">
            <h1 className="mx-auto text-center relative before:content-[''] before:h-[1px] before:w-1/2 before:bg-gray-300 before:absolute before:top-1/2 before:right-0 before:-z-10 after:content-[''] after:h-[1px] after:w-1/2 after:bg-gray-300 after:absolute after:top-1/2 after:left-0 after:-z-10">
              <span className="bg-white px-2 text-xl">or</span>
            </h1>
          </div>
          <button
            onClick={handleGoogleSignin}
            className="border flex items-center justify-center gap-4 py-3 rounded-full"
          >
            <img className="w-6" src={googleIcon} alt="Google Icon" />
            <span>Sign in with Google</span>
          </button>
          <button
            onClick={handleGithubSignin}
            className="border flex items-center justify-center gap-4 py-3 rounded-full"
          >
            <img className="w-6" src={githubIcon} alt="Github Icon" />
            <span>Sign in with Github</span>
          </button>
        </div>
        <div className="col-span-4 lg:p-10">
          <img src={loginIllustration} alt="Contact Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;
