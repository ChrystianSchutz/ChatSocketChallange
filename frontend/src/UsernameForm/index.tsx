import React, { useState } from "react";
import './index.css'

type UsernameFormProps = {
  setUsername: Function;
}


export const UsernameForm = ({ setUsername } : UsernameFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSettingUsername = (event: React.FormEvent<EventTarget>) => {
    setUsername(inputValue)
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSettingUsername} className="UsernameForm">
      <label>
        Username: 
        <input
          type="text"
          name="name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
