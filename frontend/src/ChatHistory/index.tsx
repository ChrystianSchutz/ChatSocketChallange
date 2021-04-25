import React, { useState, useEffect } from "react";
import './index.css'

type ChatHistory = {
  connection: any;
}
type ChatData = {
  data: string;
}

export const ChatHistory = ({ connection } : ChatHistory) => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    if (connection)
      connection.onmessage = ({ data }  : ChatData ) => {
        const json = JSON.parse(data);
        if (json.length) {
          setChatHistory(json);
        } else {
          setChatHistory([...chatHistory, json] as any);
        }
      };
  }, [connection, chatHistory]);

  return (
    <div>
      <p>Chat history: </p> 
      {chatHistory.map(({ username, message }) => (
        <div className="message">
          {username} : {message}
        </div>
      ))}
    </div>
  );
};
