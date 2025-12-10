import { useState } from "react";
import quizQuestionsData from "./Quiz/QuizData"
import Question from "./Quiz/Question"

const App = () => {
  // console.log(quizQuestionsData);
  const [currQuesIdx, setCurrQuesIdx] = useState(0);
  const curr = (quizQuestionsData[currQuesIdx]);
  const currQue = curr.question;
  const currOpt = curr.options;
  const currAns = curr.correct_answer;
  const currExplain = curr.explanation;
  const currQId = curr.question_number;
  // console.log(currQue);
  // console.log(currOpt);
  // console.log(currAns);
  // console.log(currExplain);


  return (
    <div className="app_div_main  min-h-screen bg-slate-800 flex flex-col  items-center ">
      <h1 className="text-5xl text-center font-extrabold text-slate-500 py-[10vh]">Quiz world</h1>

      <div className="w-[70%] min-h-full ">
        <Question
          key={currQId}
          que={currQue}

          opt={currOpt}
          ans={currAns}
          exp={currExplain}
          q_id={currQId}
        />
      </div>


      <div className="btn  w-[70%] flex justify-between text-slate-950 font-semibold">
        <button disabled={currQuesIdx === 0} className={`prevButton p-2 rounded-lg transition-all ease-in-out ${currQuesIdx === 0
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-gray-500 hover:bg-gray-400 hover:cursor-pointer"
          }`}
          onClick={() => {
            setCurrQuesIdx(prev => prev - 1)
          }}>Previous</button>
        <button disabled={currQuesIdx === quizQuestionsData.length - 1} className={`nextButton p-2 rounded-lg transition-all ease-in-out ${currQuesIdx === quizQuestionsData.length - 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-500 hover:bg-gray-400 hover:cursor-pointer"
          }`}
          onClick={() => {
            setCurrQuesIdx(prev => prev + 1)
          }}>Next</button>
      </div>

    </div>
  )
}

export default App