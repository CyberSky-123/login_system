import React from 'react'
import "./SubmitButton.css"

const SubmitButton = (props) => {
  return (
    <div className='submitButton'>
        <button>
            {props.text}
        </button>

    </div>
  )
}

export default SubmitButton