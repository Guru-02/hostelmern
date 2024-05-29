import { useState } from "react";
import { Input } from "../../LandingSite/AuthPage/Input";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Settings() {
  const navigate = useNavigate();
  const changePassword = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("student"));
    
    const data = {
      email: user.email,
      password: oldPass,
      newPassword: pass,
    };
    
    let result = await fetch("http://localhost:3000/api/auth/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    result = await result.json();

    if (result.success) {
      navigate("/student-dashboard");
    } else {
      toast.error(
        result.errors[0].msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };


  const [pass, setPass] = useState("");
  const [oldPass, setOldPass] = useState('');
  const chngPassField = {
    name: "New Password",
    type: "password",
    placeholder: "New Password",
    req: true,
    onChange: chngPass,
  };
  const chngOldPassField = {
    name: "Old Password",
    type: "password",
    placeholder: "Old Password",
    req: true,
    onChange: chngOldPass,
  };

  function chngPass(e) {
    setPass(e.target.value);
  }

  function chngOldPass(e) {
    setOldPass(e.target.value);
  }

  return (
    <div className="w-full h-screen pt-20 flex flex-col items-center justify-center" style={{ backgroundImage: 'url(https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/06/soft_blue_mosaic_pattern_background-e1655909204819.jpg?resize=1000%2C750&ssl=1)' }}>
      <h1 className="text-black font-bold text-5xl mb-10 text-center">Settings</h1>
      <form method="POST" onSubmit={changePassword} >
        <div className="w-96 flex flex-col justify-between gap-5 bg-neutral-950 p-5 rounded">
          <h2 className="text-3xl text-white font-bold mb-5">
            Change Password
          </h2>
          <Input field={chngOldPassField} />
          <Input field={chngPassField} />
          <button
            type="submit"
            className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 mt-5 text-center"
          >
            Change Password
          </button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </form>
    </div>
  );
}

export default Settings;
