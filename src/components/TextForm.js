import React, { useState } from 'react'

function MyComponent() {
    // Using the useState hook inside the functional component
    const [text, setText] = useState('Enter text here');
    console.log(text);
  
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Current text: {text}</p>
      </div>
    );
}

export default function
    TextForm(props) {
    return (
        <div>
            <form>
                <h1>{props.heading}</h1>
                <div className ="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary"> Convert to Uppercase</button>
            </form>
        </div>
    )
}
