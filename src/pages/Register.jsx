import { Link, useNavigate } from "react-router-dom";
import registerIllustration from "../assets/image/register_illustration.png";
import googleIcon from "../assets/image/google_icon.png";
import githubIcon from "../assets/image/github_icon.png";
import { BiError } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const {
    createUser,
    updateUser,
    setUserProfile,
    signinWithGoogle,
    signinWithGithub,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignin = () => {
    signinWithGoogle()
      .then(() => {
        setUserProfile(false);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGithubSignin = () => {
    signinWithGithub()
      .then(() => {
        setUserProfile(false);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    if (email && password.length >= 6) {
      createUser(email, password)
        .then((res) => {
          const user = res.user;
          updateUser(user, { userName, photoUrl }).then(() => {
            setUserProfile(false);
          });
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
        });
      form.reset();
    } else {
      setError("Your password must have at least 6 character!!!");
    }
  };

  return (
    <div className="py-10 mb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2 relative before:duration-500 before:mt-6 before:absolute before:content-[''] before:top-full before:left-1/2 before:w-[6%] before:h-[2px] before:ml-[-3%] before:bg-lime-600 hover:before:w-[24%] lg:hover:before:w-[18%] hover:before:ml-[-12%] lg:hover:before:ml-[-9%] before:z-50 after:mt-6 after:absolute after:content-[''] after:top-full after:left-1/2 after:w-[24%] lg:after:w-[18%] after:h-[2px] after:ml-[-12%] lg:after:ml-[-9%] after:bg-gray-200">
          Signup
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-8 items-center justify-between gap-20">
        <div className="col-span-4 p-4 lg:p-10 mb-8 lg:mb-0">
          <img src={registerIllustration} alt="Contact Illustration" />
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          {error && (
            <div className="text-xl text-red-600 bg-red-50 border border-red-200 flex items-center justify-between shadow mb-6 p-6 rounded-lg">
              <div className="flex items-center justify-center gap-2">
                <BiError />
                <span>{error}</span>
              </div>
              <HiOutlineXMark
                onClick={() => setError("")}
                className="cursor-pointer"
              />
            </div>
          )}
          <form
            onSubmit={handleCreateUser}
            className="flex flex-col gap-4"
            action=""
          >
            <input
              className="border border-gray-500 focus:outline-lime-600 rounded-full px-4 py-2 shadow"
              type="text"
              name="userName"
              placeholder="Type your username"
              required
            />
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
              className="border border-gray-500 focus:outline-lime-600 rounded-full px-4 py-2 shadow"
              type="url"
              name="photoUrl"
              placeholder="Type your photo URL"
              required
            />
            <input
              className="border bg-lime-600 text-white text-xl font-bold rounded-full px-4 py-2 cursor-pointer"
              type="submit"
              value="Signup"
            />
          </form>
          <p>
            Already have an account? Please{" "}
            <Link className="text-lime-600 hover:underline" to="/login">
              login
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
      </div>
    </div>
  );
};

export default Register;
