import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = ()=>{
        //console.log('Upper case was clicked: '+ text);
        let newText  = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!','success');
  }

  const handleLowClick = ()=>{
    //console.log('Upper case was clicked: '+ text);
    let newText  = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase!','success');
  }
  
  const handleTextClear = ()=>{
    //console.log('Upper case was clicked: '+ text);
    let newText  = '';
    setText(newText);
    props.showAlert('Text removed!','success');
  }
  
  const handleOnChange = (event)=>{
     //console.log('On change');
     setText(event.target.value);
  }

  const [text, setText] = useState('');
  //text = "New Text"; // Wrong way to change the state
  //setText("new text"); // Correct way to change the state
  return (
    <>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleTextClear}>Clear text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text===''?0:text.trim().split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something in the text area to preview it here.'}</p>
    </div>
    </>
  )
}
