import React, { useState } from "react";
import { createUser } from "../../services/users";

function CreateUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);

  const handleChange = () => {
    setAdmin(admin ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser([username, password, admin])
    console.log(admin)
  };

  return (
    <div className="h-full flex flex-col justify-evenly items-center">
        <h1>Create a new user</h1>
        <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label className="m-2">
                <p>Username</p>
                <input type="text" onChange={event => setUsername(event.target.value)} />
              </label>
              <label className="m-2">
                <p>Password</p>
                <input type="text" onChange={event => setPassword(event.target.value)} />
              </label>
              
              {/* Radio buttons */}
              {/* <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="true"                  
                    onChange={event => setAdmin(event.target.value)}
                  />
                  Admin
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="false"                  
                    onChange={event => setAdmin(event.target.value)}
                  />
                  User
                </label>
              </div> */}

              {/* Checkbox */}
              <div className="flex justify-center">
                <label>
                  <input 
                    type="checkbox"
                    checked={admin}
                    onChange={handleChange} 
                  />
                  <span className="ml-1">Admin</span>
                </label>
              </div>
              
              
              <input type="submit" value="Create" className="h-10 px-5 m-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 font-bold" />
            </form>
        </div>
    </div>
  )
}

export default CreateUser