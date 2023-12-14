import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initiateCall } from "../../store/callLogSlice";
import BackspaceIcon from "@mui/icons-material/Backspace";
import CallIcon from "@mui/icons-material/Call";
import "./DialerScreen.css";
const DialerScreen = () => {
  const [dialedNumber, setDialedNumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNumberClick = (number) => {
    setDialedNumber((prevNumber) => prevNumber + number);
  };

  const handleRemove = () => {
    setDialedNumber((prevNumber) => prevNumber.slice(0, -1));
  };

  const handleCallClick = () => {
    if (dialedNumber) {
      dispatch(initiateCall(dialedNumber));
      navigate("/dialed");
    }
  };

  return (
    <div className="dialer-screen-container">
      <div className="dialed-number-display">
        <p>{dialedNumber}</p>
      </div>
      <div className="dialer-buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)}>
            {number}
          </button>
        ))}
      </div>
      <div className="call-Icon">
        <button onClick={handleCallClick}>
          <CallIcon />
        </button>
        <button onClick={handleRemove}>
          <BackspaceIcon />
        </button>
      </div>
    </div>
  );
};

export default DialerScreen;
