import { useState } from "react";

const Question = (props) => {
const [disableOptions, setdisableOptions] = useState(false)
console.log("current score is :" ,props.score);

    //store correct answer inside a variable
  const correctAnswer = props.ans;
  
  // store options object    console.log(option);
  const option = props.opt;
  // transform option from object to new array because we can put map,filter,reduce on array and it is easy to work with array   console.log(optionArray);
  const optionArray = Object.entries(option);

  //handle correct click on options functions
  const handleOptionClick = (eve, isCorrect)=>
    {   // console.log(eve);
        // console.log(eve.currentTarget.disabled = true);
        if(isCorrect){
            
            eve.target.classList.remove("bg-slate-400");
            eve.target.classList.add("bg-green-400");
            //console.log(eve.target.classList)
        }
        else{
                 eve.target.classList.remove("bg-slate-400");
                 eve.target.classList.add("bg-red-400");
        }
   
    }


  return (
    <div className="p-10 w-full m-auto">
        <h2 className="font-bold text-xl pb-[5vh] text-amber-50 ">{props.q_id}. {props.que}</h2>
        
        <div className="grid grid-cols-2 gap-4 ">
            {optionArray.map((ele, idx) => {
                const option_id = ele[0];
                const option_ans = ele[1];
                return (
                    <button disabled={disableOptions} className="bg-slate-400 p-3 font-bold rounded-xl transition-all ease-in-out hover:transform hover:scale-101 hover:cursor-pointer" 
                    onClick={(eve)=>{
                        setdisableOptions(!disableOptions);
                        let crct = false;
                        if (correctAnswer === option_id) {
                            crct = true;
                            handleOptionClick(eve,crct);
                            console.log("You choose the right answer");
                            props.setScore(props.score+1);
                        }
                        else{
                            handleOptionClick(eve,crct);
                            console.log(`Right answer is ${correctAnswer}`)
                        }
                    }} key={idx}>
                        {option_id}. {option_ans}
                    </button>
                )
            })}
        </div>
    </div>
)
}

export default Question;