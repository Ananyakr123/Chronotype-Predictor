import { useState } from "react";
import "../css/landing.css";
import questions from "../data/questionaire";
import  resultTemplates from "../data/result";

const Landing = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [cQuestion, setCQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result,setResult]=useState({});

  const question = questions[cQuestion];
  const selectedAnswer = answers[question?.id];

  const handleAnswer = (score) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: score,
    }));
  };

  const handleNext = () => {
    if (selectedAnswer === undefined) return;

    if (cQuestion < questions.length - 1) {
      setCQuestion((prev) => prev + 1);
    } else {
      getResult(totalScore);
      setShowResult(true);
    }
  };
  const getResult = (score) => {
    const matchedResult = resultTemplates.find(
      (r) => score >= r.minScore && score <= r.maxScore
    );
  
    if (matchedResult) {
      setResult(matchedResult);
      setShowResult(true);
    }
  };
  const handlePrevious = () => {
    if (cQuestion > 0) {
      setCQuestion((prev) => prev - 1);
    }
  };

  const handleRetake = () => {
    setCQuestion(0);
    setAnswers({});
    setResult({});
   
    setShowResult(false);
  };

  const totalScore = questions.reduce((total, q) => {
    return total + (answers[q.id] ?? 0);
  }, 0);

  return (
    <div className="backpage w-full min-h-screen flex flex-col justify-center items-center gap-8 px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold">
        Curious about your chronotype?
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl">
        <button
          className="w-full sm:w-auto px-6 py-3 rounded-lg"
          onClick={() => {
            setStartQuiz(true);
            setShowInfo(false);
          }}
        >
          Take quiz
        </button>

        <button
          className="w-full sm:w-auto px-6 py-3 rounded-lg"
          onClick={() => setShowInfo(true)}
        >
          I don't know what a chronotype means!
        </button>
      </div>

      {showInfo && (
        <div className="w-full max-w-3xl min-h-40 p-5 sm:p-8 text-white rounded-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            What Is a Chronotype? 🌙
          </h2>

          <p className="text-sm sm:text-base leading-7">
            Your chronotype is your body's natural preference for sleeping,
            waking up, and being active at different times of the day.
            Understanding your chronotype can help you understand your sleep
            patterns, energy levels, and daily habits so you can plan a
            routine that works with your natural rhythm.
          </p>

          <div className="flex justify-center mt-6">
            <button
              className="px-6 py-2 rounded-lg"
              onClick={() => setShowInfo(false)}
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {startQuiz && (
        <div className="w-full max-w-2xl rounded-2xl bg-white text-gray-800 p-5 sm:p-8 shadow-xl">
          {!showResult ? (
            <>
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-gray-500">
                  Question {cQuestion + 1} of {questions.length}
                </p>

                <button
                  onClick={() => setStartQuiz(false)}
                  className="text-gray-500 text-xl"
                  aria-label="Close quiz"
                >
                  ×
                </button>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
                <div
                  className="h-2 bg-blue-600 rounded-full transition-all"
                  style={{
                    width: `${((cQuestion + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              <h2 className="text-lg sm:text-2xl font-semibold mb-6">
                {question.text}
              </h2>

              <div className="flex flex-col gap-3">
                <label
                  htmlFor={`question-${question.id}`}
                  className="font-medium text-gray-700"
                >
                  Select your answer
                </label>

                <select
                  id={`question-${question.id}`}
                  value={selectedAnswer === undefined ? "" : selectedAnswer}
                  onChange={(e) => handleAnswer(Number(e.target.value))}
                  className="w-full rounded-xl border border-gray-300 bg-white p-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="" disabled>
                    Choose an option
                  </option>

                  {question.options.map((option) => (
                    <option key={option.text} value={option.score}>
                      {option.text}
                    </option>
                  ))}
                </select>
               
              </div>

              <div className="flex justify-between gap-3 mt-8">
  <button
    onClick={handlePrevious}
    disabled={cQuestion === 0}
    className="rounded-lg border border-gray-400 bg-gray-200 text-gray-800 px-5 py-2 disabled:opacity-100 disabled:cursor-not-allowed"
  >
    Previous
  </button>

  <button
    onClick={handleNext}
    disabled={selectedAnswer === undefined}
    className="rounded-lg bg-blue-600 text-white px-5 py-2 disabled:bg-blue-600 disabled:text-white disabled:opacity-100"
  >
    {cQuestion === questions.length - 1
      ? "Show Result"
      : "Next"}
  </button>
</div>
            </>
          ) : (
            <div className="text-center py-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Quiz Completed!
              </h2>

              <p className="mb-3">
                Your total score is{" "}
                <span className="font-bold">{totalScore}</span>
              </p>

              <p className=" text-black-500 mb-6">
                Based on your score your Chronotype is <strong className="text-lg font-semibold font-sans">{result.title}</strong>
              </p>
<p className="font-light">{result.subtitle}</p>

<p><strong>Description : </strong>{result.description}</p>
<p><strong>Sleep Pattern : </strong>{result.sleepPattern}</p>
<p><strong>Energy Pattern: </strong>{result.energyPattern}</p>
<div className="mt-6 text-left">
  <h3 className="text-lg font-bold mb-3">Recommendations</h3>

  <ul className="list-disc pl-6 space-y-2">
    {result.recommendations?.map((r, id) => (
      <li key={id}>{r}</li>
    ))}
  </ul>
</div>      
 <div className="flex justify-center gap-3">
                <button
                  onClick={handleRetake}
                  className="rounded-lg border px-5 py-2"
                >
                  Retake Quiz
                </button>

                <button
                  onClick={() => setStartQuiz(false)}
                  className="rounded-lg bg-blue-600 text-white px-5 py-2"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Landing;