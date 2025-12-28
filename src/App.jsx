import { useState } from "react";
import quizQuestionsData from "./Quiz/QuizData"
import Question from "./Quiz/Question"
import Result from "./Quiz/Result";

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

  //state for storing scores during the quiz(ye parent component(app) me isliye hai kuki agar isko child component me rakhenge ek question keliye sahi se kaam karega pr jaise hi question change krenge states sare rerender/remount honge aur score wapis se 0 par reset hojayega isliye isko as a prop hmlog send kr rhe hai child recieve krlega)
  const [score, setScore] = useState(0);

  //another state to show result after all the question is finished
  const [showResult, setshowResult] = useState(false)
  return (
    <div className="app_div_main  min-h-screen bg-slate-800 flex flex-col  items-center ">

      {showResult ? (
        <Result 
          score = {score}
          total = {quizQuestionsData.length}
          showResult = {showResult}
          setshowResult = {setshowResult}
        />
      ) : (
        // {/* main section */}
        <>
      <h1 className="text-5xl text-center font-extrabold text-slate-500 py-[10vh]">Quiz world</h1>

      <div className="w-[70%] min-h-full ">
        <Question
          key={currQId}
          que={currQue}
          opt={currOpt}
          ans={currAns}
          exp={currExplain}
          q_id={currQId}

          score = {score}
          setScore = {setScore}
        />
      </div>


      <div className="btn  w-[70%] flex justify-between text-slate-950 font-semibold">
                  {/* next button */}

        <button disabled={currQuesIdx === 0} className={`prevButton p-2 rounded-lg transition-all ease-in-out ${currQuesIdx === 0
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-gray-500 hover:bg-gray-400 hover:cursor-pointer"
          }`}
          onClick={() => {
            setCurrQuesIdx(prev => prev - 1)
          }}>Previous</button>

          {/* next button */}
        <button  className="nextButton p-2 rounded-lg transition-all ease-in-out 
            bg-gray-500 hover:bg-gray-400 hover:cursor-pointer"
          
          onClick={() => {
            if(currQuesIdx === quizQuestionsData.length-1){
              setshowResult(true);
            }else{

              setCurrQuesIdx(prev => prev + 1)
            }
          }}>
            {currQuesIdx === quizQuestionsData.length-1 ? "Show Result" : "Next"}</button>
      </div>
      </>
      )}

    </div>
  )
}

export default App