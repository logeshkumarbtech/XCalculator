import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] =useState(null);


  const handleSubmit =((e)=>{  
     
    try{      
      const total = eval("(" + input + ")");
      setOutput(total);  
      setInput("")   
      
    }catch(err){
      setOutput("Error");
    } 
  });

  const handleClear = ()=>{
    setInput("");
    setOutput(null);
  } 

  return (
    <div className={styles.App}>
      <h1>React Calculator</h1>
      <div>
      <input type="text" value={input} readOnly></input></div> 
        
        {output && <div className={styles.output}>{output}</div>}
        <div className={styles.buttons}>
          <button value="7" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>7</button>
          <button value="8" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>8</button>
          <button value="9" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>9</button>
          <button value="+" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>+</button>
        </div>
        <div className={styles.buttons}>
          <button value="4" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>4</button>
          <button value="5" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>5</button>
          <button value="6" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>6</button>
          <button value="-" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>-</button>
        </div>
        <div className={styles.buttons}>
          <button value="1" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>1</button>
          <button value="2" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>2</button>
          <button value="3" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>3</button>
          <button value="*" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>*</button>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleClear}>C</button>
          <button value="0" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>0</button>
          <button onClick={handleSubmit}>=</button>
          <button value="/" onClick={(e)=>{e.preventDefault();setInput((prevState)=>prevState+e.target.value)}}>/</button>
        </div>      
    </div>
  );
}

export default App;
