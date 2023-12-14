import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { endCall } from "../../store/callLogSlice";
import "./DialedNumberScreen.css";

const DialedNumberScreen = () => {
  const [countdown, setCountdown] = useState(10);
  const dialedNumber = useSelector((state) => state.callLog.dialedNumber);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      dispatch(endCall());
      navigate("/call-log");
    }
  }, [countdown, dispatch, navigate]);

  useEffect(() => {
    if (!dialedNumber) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="dialed-number-screen-container">
      <div className="dialed-number-display">
        <p>{dialedNumber}</p>
        <p>Call ending in {countdown} seconds...</p>
        <button
          className="End-call"
          onClick={() => {
            navigate("/call-log");
            dispatch(endCall());
          }}
        >
          End
        </button>
      </div>
    </div>
  );
};

export default DialedNumberScreen;
