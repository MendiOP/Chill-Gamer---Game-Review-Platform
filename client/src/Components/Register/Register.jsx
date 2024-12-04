import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (value) => {
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const isLongEnough = value.length >= 6;

    if (!hasUppercase) {
      setPasswordError("Password must have at least one uppercase letter.");
    } else if (!hasLowercase) {
      setPasswordError("Password must have at least one lowercase letter.");
    } else if (!isLongEnough) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }

    setPassword(value);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md space-y-6">
        <h1 className="text-2xl font-semibold text-gray-700 text-center">
          Create an Account
        </h1>

        <form className="space-y-5">
          {/* Name Input */}
          <div>
            <label className="block mb-2 text-lg font-semibold text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block mb-2 text-lg font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div>
            <label className="block mb-2 text-lg font-semibold text-gray-600">
              Photo URL
            </label>
            <input
              type="url"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your photo URL"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-2 text-lg font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                passwordError
                  ? "border-red-500"
                  : "focus:ring focus:ring-blue-300"
              }`}
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              placeholder="Create a strong password"
              required
            />
            {/* Password Error Message */}
            {passwordError && (
              <p className="mt-2 text-sm text-red-500">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
          >
            Register
          </button>
        </form>

        {/*  to Login */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline font-semibold"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
