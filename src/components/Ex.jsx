import React from 'react'
import Ex2 from './Ex2' 

const Ex = (props) => {
  return (
    <>
      <div>Main hoon Example {props.user} </div>
      <Ex2  name={props.user} />
    </>
    
  )
}

export default Ex