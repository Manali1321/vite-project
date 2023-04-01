import { useState, useEffect } from "react";

export default function Question() {
  const [Category, setCategory] = useState(null);
  const [Question, setQuestion] = useState(null);
  const [CorrectAns, setCorrectAns] = useState(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const fechInfo = async () => {
      let response = await fetch(
        "https://opentdb.com/api.php?amount=1&type=boolean",
        {
          method: "get",
        }
      );
      const data = await response.json();
      setCategory(data.results[0].category);
      setQuestion(data.results[0].question);
      setCorrectAns(data.results[0].correct_answer);
    };
    fechInfo();
  }, []);

  return (
    <div>
      <div>
        <h1>Welcome to Trivia</h1>
        <p>Here's your random Question</p>
        <h2>True or False</h2>
      </div>
      <div>
        <div> {Category}</div>
        <h3>{Question}</h3>
        <button type="button" onClick={() => setRevealed(true)}>
          Reveal Answer
        </button>
        {revealed ? <div>{CorrectAns}</div> : <div></div>}
      </div>
    </div>
  );
}
