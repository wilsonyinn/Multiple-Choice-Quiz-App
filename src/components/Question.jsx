import RadioButtonOption from './RadioButtonOption'
export default function Page({ prompt, choices, correctAnswer, selection, nextQuestion, handleClick }) {

    function checkAnswer() {
      if (selection[correctAnswer]) {
        alert("This answer is correct.");
        nextQuestion();
      } else {
        alert("This answer is incorrect.");
      }
    }
  
    const options = choices.map((val, num) => 
      <RadioButtonOption value={val} selected={selection[num]} onButtonClick={() => handleClick(num)} />);
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Exercise: React Components</h1>
          <p>{prompt}</p>
          {options}
          <br />
          <button onClick={checkAnswer}>Submit Answer</button>
        </header>
      </div>
    );
  }