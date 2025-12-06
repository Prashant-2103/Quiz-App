import { useState } from "react";
  import quizQuestionsData from "./Quiz/QuizData"
  import Question from "./Quiz/Question"

  const App = () => {
    // console.log(quizQuestionsData);
    const [currQuesIdx, setCurrQuesIdx] = useState(0);
    const curr =(quizQuestionsData[currQuesIdx]);
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
      <>
      <h1>Quiz world</h1>
     
         <div >
          <Question 
          key={currQId}
         que = {currQue}
         
         opt = {currOpt}
         ans = {currAns}
         exp = {currExplain}
         q_id = {currQId}
         />
         </div>

        
         <button disabled={currQuesIdx=== 0} className="prevButton" onClick={()=>{
          setCurrQuesIdx(prev=>prev-1)
         }}>Previous</button>
         <button disabled={currQuesIdx=== quizQuestionsData.length-1} className="nextButton" onClick={()=>{
          setCurrQuesIdx(prev=>prev+1)
         }}>Next</button>
      
      </>
    )
  }

  export default App