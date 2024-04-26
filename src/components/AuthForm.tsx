import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AuthForm() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [authError, setAuthError] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isEmail = (email: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const handleAuth = () => {
    // error prevention checks
    // - 1)
    if (!inputs.email.trim() || !inputs.password.trim()) {
      // alert user to fill up - authError
      setAuthError("Please fill up all the fields");
      // remove authError after 4sec
      setTimeout(() => setAuthError(""), 5000);
      // exit fn
      return;
    }

    // -2)
    if (!isEmail(inputs.email)) {
      // alert user of invalid email address
      setEmailError("Please use a valid email address");
      // remove after 4sec
      setTimeout(() => setEmailError(""), 5000);
      // exit fn
      return;
    }

    // -3)
    if (!isLogin && !inputs.confirmPassword.trim()) {
      // alert user that they need to confirm their password
      setPasswordError("Please confirm password");
      // remove after 4sec
      setTimeout(() => setPasswordError(""), 5000);
      // exit fn
      return;
    }

    // validate the user from firebase and add session for user

    // navigate to home, if user is validated
    navigate("/");
    // otherwise show error below
  };
  return (
    <>
      <div className="bg-card text-card-foreground border border-border rounded-lg p-5">
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <img src="/logo.png" alt="instagram" className="h-24" />
          {/* auth error message */}
          {authError.trim() && (
            <p className="text-sm text-primary-red">{authError}</p>
          )}
          {/* ------------------- */}

          <Input
            type="email"
            placeholder="Email"
            className="text-sm focus-visible:ring-offset-0"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />

          {/* email error message */}
          {emailError.trim() && (
            <p className="w-full -mt-3 text-sm text-left text-primary-red">
              {emailError}
            </p>
          )}
          {/* ------------------- */}

          <Input
            type="password"
            placeholder="Password"
            className="text-sm focus-visible:ring-offset-0"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />

          {/* Confirm password is user is new */}
          {!isLogin && (
            <>
              <Input
                type="password"
                placeholder="Confirm password"
                className="text-sm focus-visible:ring-offset-0"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />

              {/* password error error message */}
              {passwordError.trim() && (
                <p className="w-full -mt-3 text-sm text-left text-primary-red">
                  {passwordError}
                </p>
              )}
              {/* ------------------- */}
            </>
          )}

          {/* Log in or Sign up button */}
          <Button
            size="sm"
            className="w-full text-sm bg-primary-blue text-primary-blue-foreground hover:bg-primary-blue/90"
            onClick={() => handleAuth()}
          >
            {isLogin ? "Log in" : "Sign up"}
          </Button>

          {/* -------------------OR----------------- */}
          <div className="w-full flex items-center justify-center my-4 gap-1">
            <span className="grow-[2] h-px bg-foreground"></span>
            <span className="font-bold mx-1">OR</span>
            <span className="grow-[2] h-px bg-foreground"></span>
          </div>
          {/* -------------------------------------- */}

          <Button asChild className="cursor-pointer">
            <p className="flex justify-center">
              <img src="/google.png" className="h-5" alt="google logo" />
              <span className="mx-2">Log in with Google</span>
            </p>
          </Button>
        </div>
      </div>

      <div className="border border-border rounded-lg p-5 mt-2">
        <div className="flex items-center justify-center">
          <div className="mx-2 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </div>
          <Button
            variant="link"
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary-blue p-0"
          >
            {isLogin ? "Sign up" : "Log in"}
          </Button>
        </div>
      </div>
    </>
  );
}
