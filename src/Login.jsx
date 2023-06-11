import { Link } from "react-router-dom";
import hamburger from "./assets/icon/hamburger.svg";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen font-poppins bg-tertiary">
      <div className="p-5 m-5 container border rounded-lg shadow bg-background">
        <div className="flex justify-center mb-4">
          <img src={hamburger} alt="icon" />
        </div>
        <h1 className="text-center text-xl font-bold mb-8">
          Sign in to your account
        </h1>
        <form action="" className="text-base">
          <div className="mb-4">
            <label htmlFor="" className="font-medium">
              Username
            </label>
            <div>
              <input
                type="text"
                className="w-full outline-headline py-1.5 px-2 border mt-2 rounded-lg"
                placeholder="Andreas Owi"
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="flex justify-between">
              <label htmlFor="" className="font-medium">
                Password
              </label>
              <label htmlFor="" className="text-blue-800">
                Forgot password?
              </label>
            </div>
            <div>
              <input
                type="password"
                className="w-full outline-headline py-1.5 px-2 border mt-2 rounded-lg"
                placeholder="**********"
              />
            </div>
          </div>
          <Link to="/dashboard">
            <button className="w-full bg-button py-1.5 border rounded-lg font-medium">
              Sign in
            </button>
          </Link>
          <div className="mt-8">
            <p className="text-center text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <span className="text-blue-800 font-medium">Register</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
