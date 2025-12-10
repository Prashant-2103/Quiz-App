const Question = (props) => {
  // console.log(props.que)
  
  const option = props.opt;
  // console.log(option);
  const optionArray = Object.entries(option);
  // console.log(typeof optionArray);
  

  return (
    <div className="p-10 w-full m-auto">
        <h2 className="font-bold text-xl pb-[5vh] text-amber-50 ">{props.q_id}. {props.que}</h2>
        
        <div className="grid grid-cols-2 gap-4 ">
            {optionArray.map((ele, idx) => {
                const option_id = ele[0];
                const option_ans = ele[1];
                return (
                    <button className="bg-slate-400 p-3 font-bold rounded-xl transition-all ease-in-out hover:transform hover:scale-101 hover:cursor-pointer" key={idx}>
                        {option_id}. {option_ans}
                    </button>
                )
            })}
        </div>
    </div>
)
}

export default Question;