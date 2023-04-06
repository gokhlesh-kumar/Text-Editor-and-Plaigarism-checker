import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  //const [count, setCount] = useState("0");

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const convertUp = () => {
    setText(text.toUpperCase());
    if(text.length !== 0){
      props.alert("Conveted to Uppercase", "success");
    }
  }

  const convertLo = () => {
    setText(text.toLowerCase());
    if(text.length !== 0){
      props.alert("Conveted to Lowercase", "success");
    }
  }

  const handleCapitalize = () => {
    //setText(text.toLowerCase());
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(" ");
    setText(newText);
    if(text.length !== 0){
      props.alert("Conveted to Capitalize", "success");
    }
  }
  
  const extraSpace = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    if(text.length !== 0){
      props.alert("Conveted to Extra space Removed", "success");
    }
  }
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.alert("Text Copied", "success");
  }

  return (
    <>
    <div>
        <h1 style={{color: props.theme === 'dark' ? 'white' :'#051f36'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.theme === 'dark' ? '#2f405a' : 'white' , color: props.theme === 'dark' ? 'white' : '#051f36'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-outline-${props.theme === 'dark' ? 'light' : 'dark'} ${text.length === 0 ? 'disabled' : ''} my-1`} onClick={convertUp}>UpperCase</button>
        <button className={`btn btn-outline-${props.theme === 'dark' ? 'light' : 'dark'} ${text.length === 0 ? 'disabled' : ''} mx-2 my-1`} onClick={convertLo}>LowerCase</button>
        <button className={`btn btn-outline-${props.theme === 'dark' ? 'light' : 'dark'} ${text.length === 0 ? 'disabled' : ''} my-1`} onClick={handleCapitalize}>Capitalize</button>
        <button className={`btn btn-outline-${props.theme === 'dark' ? 'light' : 'dark'} ${text.length === 0 ? 'disabled' : ''} mx-2 my-1`} onClick={extraSpace}>Remove Extra Space</button>
        <button className={`btn btn-outline-${props.theme === 'dark' ? 'light' : 'dark'} ${text.length === 0 ? 'disabled' : ''} mx-2`} onClick={copyText}>Copy</button>
    </div>

    <div className="container" style={{color: props.theme === 'dark' ? 'white' :'#051f36'}}>
        <h3 className="my-3">Summary</h3>
        {/* <p>Word: {text.trim() === '' ? 0 : text.match(/\S+/g).length}, Character: {text.replace(/\s+/g, '').length} </p> */}
        <p>Word: {text.split(/\s+/).filter((element) => {return element.length !== 0}).length}, Character: {text.replace(/\s+/g, '').length} </p>
        
    </div>
    </>
  )
}
