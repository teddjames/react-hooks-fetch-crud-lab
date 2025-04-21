import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  // Creating state

  const [questions, setQuestions] = useState([]);

  // useEffect to fetch the data after the DOM loads

  useEffect(() => {
      fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then((questions) => setQuestions(questions))
    },[]
  )

  function handleDeleteQuestion(deletedId) {
    const updatedQuestions = questions.filter((q) => q.id !== deletedId);
    setQuestions(updatedQuestions);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} onDelete={handleDeleteQuestion}/> 
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
