import React from 'react'

const InputField = (props) => {
  return (
    <div className='inputField'>
        <input
            className='input'
            type={props.type}
            placeholder={props.placeholder}
            value={props.value
            }
        
        />

    </div>
  )
}

export default InputField