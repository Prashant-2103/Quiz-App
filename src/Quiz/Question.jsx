const Question = (props) => {
  // console.log(props.que)
  
  const option = props.opt;
  // console.log(option);
  const optionArray = Object.entries(option);
  // console.log(typeof optionArray);
  

  return (
    <>
    <h2>{props.q_id}. {props.que}</h2>
    
    {optionArray.map((ele,idx)=>{
    const option_id = ele[0];
    const option_ans = ele[1];
    return <button key={idx}>{option_id}. {option_ans}</button>
    // console.log(option_id,option_ans); 
  })}
   
    </>

  )
}

export default Question;