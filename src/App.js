import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialerScreen from "./components/DialerScreen/DialerScreen";
import DialedNumberScreen from "./components/DialedNumberScreen/DialedNumberScreen";
import CallLogScreen from "./components/CallLogScreen/CallLogScreen";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<DialerScreen />} />
          <Route path="/dialed" element={<DialedNumberScreen />} />
          <Route path="/call-log" element={<CallLogScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
