import { Link } from "react-router-dom";
import loginIllustration from "../assets/image/Mobile-login-Cristina.jpg";
import googleIcon from "../assets/image/google_icon.png";
import githubIcon from "../assets/image/github_icon.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signinWithGoogle, signinWithGithub, loginUser } =
    useContext(AuthContext);
  const handleGoogleSignin = () => {
    signinWithGoogle();
  };
  const handleGithubSignin = () => {
    signinWithGithub();
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password);
    form.reset();
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
            <span>or</span>
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
