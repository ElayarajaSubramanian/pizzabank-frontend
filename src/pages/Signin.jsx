import React, { useState } from "react";
import AdminLogin from "../components/AdminLogin";
import UserLogin from "../components/UserLogin";

const Signin = () => {
  const [adminLogin, setAdminLogin] = useState(false);
  const changeToAdmin = () => {
    setAdminLogin(true);
  };
  const changeToCustomer = () => {
    setAdminLogin(false);
  };
  return (
    <div className="flex flex-col items-center justify-center py-32 mt-8 bg-red">
      <div className="flex flex-col items-center w-11/12 mx-auto">
        <div className="flex justify-center gap-6">
          <h1
            className="text-2xl font-bold text-center text-white cursor-pointer w-fit"
            onClick={changeToCustomer}
            style={{ borderBottom: !adminLogin ? "4px solid white" : "none" }}
          >
            Customer
          </h1>
          <h1
            className="text-2xl font-bold text-center text-white cursor-pointer w-fit"
            onClick={changeToAdmin}
            style={{ borderBottom: adminLogin ? "4px solid white" : "none" }}
          >
            Admin
          </h1>
        </div>
        {!adminLogin && <UserLogin />}
        {adminLogin && <AdminLogin />}
      </div>
    </div>
  );
};

export default Signin;
