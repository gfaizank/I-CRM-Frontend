import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useEffect, useState } from "react";
import { useLogin } from "hooks/useLogin";
import Spinner from "views/admin/people/components/Spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";



export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false)
  const { login, persistLogin, error, isLoading } = useLogin();
  const [spin, setSpin]=useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  const formData = {
    email: email,
    password: password,
  };

  useEffect(() => {
    if (localStorage.getItem('user') && localStorage.getItem('rememberMe') === 'true') {
      setSpin()
      persistLogin();
    }

    const serverStart = async () => {
      try {
        const response = await fetch('https://i-crm-backend-6fqp.onrender.com/auth/fake', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          console.log('Server alarmed');
        } else {
          console.error('failed');
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };

    serverStart();
  }, []);

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
    localStorage.setItem('rememberMe', !rememberMe);
  };

  const handleSubmit = async (e) => {
    setSpin(true);
    e.preventDefault();
    if (!email || !password) {
      toast.error("Username and password are required.");
      setTimeout(()=>{
        setSpin(false);
      }, 1000)
      return;
    }

    // console.log(formData);
    try {
    await login(email, password, rememberMe);
    // console.log(await login(email, password, rememberMe));
    toast.success("Login successful!");
    setSpin(false);
    } catch (error) {
      setSpin(false);
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      <ToastContainer />
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        {/* <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div> */}
        {/* Email */}
        <form className="login" action="#">
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          {/* Password */}
          <div className="relative">
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div
              className="absolute top-8 right-4 mr-3 mt-4 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </div>
          </div>
          {/* Checkbox */}
          <div className="mb-4 flex items-center justify-between px-2">
            <div className="flex items-center">
              <Checkbox checked={rememberMe}
                onChange={handleCheckboxChange} />
              <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                Keep me logged In
              </p>
            </div>
            {/* <a
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              href=" "
            >
              Forgot Password?
            </a> */}
          </div>
          <button
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            type="button"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {spin && <Spinner />}
            {!spin && "Sign In"}
          </button>
          {error && <div className="error">{error}</div>}
        </form>
        {/* <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </a>
        </div> */}
      </div>
    </div>
  );
}
