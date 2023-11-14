import React, { useState } from 'react'

export default function Text(props) {
      const Handlebtn=()=>{
        const newt=text.toUpperCase();
        settext(newt);
        props.showalert("Converted to Uppercase","success");
      }
      const Handlelobtn=()=>{
        const newt=text.toLowerCase();
        settext(newt);
        props.showalert("Converted to Lowercase","success");
      }
      const cleartext=()=>{
        const newt='';
        settext(newt);
        props.showalert("Your Text has been Cleared","warning");
      }
      
      const handlechange=(event)=>{
            settext(event.target.value);
      }
    const [text, settext] = useState("")
    return (
        <>
        <div style={{color:props.mode ==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        </div>
            
            <div className="mb-3">
                <textarea className="form-control" id="text" style={{backgroundColor:props.mode ==='light'?'white':'grey',color:props.mode ==='light'?'black':'white'}} value={text} onChange={handlechange} rows="9"></textarea><br></br>
                <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2`} onClick={Handlebtn} >UpperCase</button>
                <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2`}onClick={Handlelobtn} >LowerCase</button>
                <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2`} onClick={cleartext} >Clear</button>
                
            </div>
            <div className='container' style={{color:props.mode ==='light'?'black':'white'}}>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} <b>words</b> and {text.length} <b>characters</b></p>
            <p>{0.08*text.split(" ").length} <b>time to read</b></p>
            
                   

            </div>
        </>
    )
}
