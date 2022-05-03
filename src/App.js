import React, { useState } from "react";
import "./App.css"
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import Card from "./components/common/Card";

function App() {
const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} />
      <Card>Hello this is me</Card>
    </>
  );
}

export default App;
