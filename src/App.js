import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

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
      <FeedbackForm />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      <FeedbackStats feedback={feedback} />
    </>
  );
}

export default App;
