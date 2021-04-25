import React, { useState, useEffect } from "react";
import "./App.css";
import { UsernameForm } from "./UsernameForm";
import { MessageForm } from "./MessageForm";
import { ChatHistory } from "./ChatHistory";

function App() {
  const [username, setUsername] = useState("");
  const [connection, setConnection] = useState();

  const handleErrors = (event) =>
    alert(`There was an error with conection : ${event}` );

  useEffect(() => {
    window.WebSocket = window['WebSocket'] || window['MozWebSocket'];
    var connection = new WebSocket("ws://127.0.0.1:8080");
    setConnection(connection);
    connection.onerror  = handleErrors;
  }, []);

  return (
    <div className="App">
      <ChatHistory connection={connection} />
      {username ? (
        <MessageForm connection={connection} username={username} />
      ) : (
        <UsernameForm setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
