import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Main_Layout from "./Pages/Main_Layout";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import { appStore, persist } from "./Redux/Store";
import { Provider } from "react-redux";
import Dashboard from "./Components/Dashboard";
import PrivetRoute from "./PrivetRoute";
import AuthPrivetRoute from "./AuthPrivetRoute";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <PersistGate loading={null} persistor={persist}>
          <Toaster richColors position="top-center" />
          <Router>
            <Routes>
              <Route path="/" element={<AuthPrivetRoute><Login /></AuthPrivetRoute>} />
              <Route path="register/" element={<AuthPrivetRoute><Registration /></AuthPrivetRoute>} />
              <Route path="dashboard/" element={<PrivetRoute><Main_Layout /></PrivetRoute >}>
                 <Route index element={<Dashboard />} />
              </Route>


            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
