import './App.css';
import Question from './components/Question.jsx'
import { useState } from 'react';

export default function Quiz() {
  //dummy data 
  const questions = [
    { prompt: "How can you render a component called House in React?", choices: ["root.render(<House>);", "root.render(House);", "root.render(<House />);"], correctAnswer: 2 },
    { prompt: "Which of the following uses correct syntax for expressions in JSX?", choices: ["<h1>React is {5 + 5} times better with JSX</h1>", "<h1>React is [5 + 5] times better with JSX</h1>", "<h1>React is (5 + 5) times better with JSX</h1>"], correctAnswer: 0 },
    { prompt: "Which one is correct way of sending the value 'John' via the 'firstname' property to the Person component?", choices: ["root.render(<Person firstname='John' />);", "root.render(<Person propsIfirstname='John') />);", "root.render(Person(firstname='John'));"], correctAnswer: 0 }
  ]

  //state  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const numOptions = questions[currentQuestion].choices.length;
  const [selection, setSelection] = useState(Array(numOptions).fill(false));

  const { prompt, choices, correctAnswer } = questions[currentQuestion];
  const numQuestions = questions.length;
  
  function nextQuestion() {
    //next question
    if (currentQuestion === numQuestions - 1) {
      alert("You have completed the quiz!");
      return
    }
    setCurrentQuestion(currentQuestion + 1);
    //reset radio options
    const newSelections = Array(numOptions).fill(false);
    setSelection(newSelections);
  }

  function handleClick(i) {
    if (selection[i]){
      return
    }
    const newSelections = Array(numOptions).fill(false);
    newSelections[i] = true;
    setSelection(newSelections);
  }

  return <Question prompt={prompt} choices={choices} correctAnswer={correctAnswer} selection={selection} nextQuestion={nextQuestion} handleClick={handleClick}/>
}