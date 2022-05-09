import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleFeedback = (userFeedback) => {
    userFeedback.id = uuidv4();
    setFeedback([...feedback, userFeedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(
        feedback.filter((item) => {
          console.log(item);
          return item.id !== id;
        })
      );
    } else {
      console.log("No feedback deleted!");
    }
  };

  return (
    <>
      <Header />
      <FeedbackForm addFeedback={handleFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
}

export default App;
