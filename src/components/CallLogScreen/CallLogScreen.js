import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCallLog } from "../../store/callLogSlice";
import "./CallLogScreen.css";
import { Link } from "react-router-dom";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import DeleteIcon from "@mui/icons-material/Delete";
const CallLogScreen = () => {
  const callLog = useSelector((state) => state.callLog.log);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteCallLog(index));
  };

  return (
    <div className="call-log-screen-container">
      <h2>Recents</h2>

      <ul className="call-log-list">
        {callLog.map((log, index) => (
          <li key={index} className="call-log-item">
            <div>
              <p>{log.dialedNumber}</p>
            </div>
            <div>
              <span
                onClick={() => handleDelete(index)}
                className="delete-icon"
                role="button"
              >
                <DeleteIcon />
              </span>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/" className="Keypad-icon">
        <KeyboardHideIcon />
      </Link>
    </div>
  );
};

export default CallLogScreen;
