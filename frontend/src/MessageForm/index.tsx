import React, { useState } from "react";
import "./index.css"

type MessageFormProps = {
  connection: any;
  username: string;
}

export const MessageForm = ({ connection , username } : MessageFormProps) => {
  const [message, setMessage] = useState("");

  const sendMessage = (event: React.FormEvent<EventTarget>) => {
    connection.send(JSON.stringify({ message, username }));
    setMessage('')
    event.preventDefault();
  };

  return (
    <form onSubmit={sendMessage} className="MessageForm">
      <label>
        Message:
        <input
          type="text"
          name="name"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
