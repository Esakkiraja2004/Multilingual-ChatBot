// File: src/App.js
import React from "react";
import ChatBot from "./components/ChatBot";
import "./styles/ChatBot.css";

function App() {
  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #d0e6f6, #fce3ec)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
    background: "linear-gradient(to right, #4f9aff, #ff66c4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Naan Muthazhvan - Multi Language ChatBot 🤖</h1>
      <ChatBot />
    </div>
  );
}

export default App;
