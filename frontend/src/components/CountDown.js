import React, { useState, useEffect } from "react";

const CountDown = ({ resendOTP, setVerifying, verifying }) => {
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div className="countdown-text">
      {seconds > 0 || minutes > 0 ? (
        <p className="font-thin">
          Expires in :{" "}
          <span className="font-bold ">
            {" "}
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </p>
      ) : (
        <p className="font-thin">
          Didn't recieve code?{" "}
          <span
            className="text-blue-500 underline cursor-pointer"
            onClick={(e) => {
              resendOTP(e);
              setMinutes(0);
              setSeconds(10);
              // setVerifying(!verifying);
            }}
          >
            Resend OTP
          </span>{" "}
        </p>
      )}
    </div>
  );
};
export default CountDown;
