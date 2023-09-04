import React from 'react'

const Third = (props) => {
  return (
    <div style={{
        background:"black",
        display:"flex",
        justifyContent:"center",
        height:"100vh",
        alignItems:"center",
        display:"flex"
    }}>
    <div style={{backgroundColor:"white",border:"solid skyblue 4px" , padding:"10px"}}>
        <h1>Welcome in prop concept  </h1>
        <p> this is my pratice of {props.lang} this is my {props.file}file</p>
    </div>
    

    </div>
  )
}

export default Third