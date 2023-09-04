import React from 'react'

const first = () => {
    const isBackgroundColor = false
    // not change color without usestate 
  return (
    <div style={{
        width:"100%",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    }}>
    <div style={{
        width:"200px",
        height:"200px",
        backgroundColor:isBackgroundColor ? 'red':'black'
  
    }}>
    </div>
    </div>
  )
}

export default first