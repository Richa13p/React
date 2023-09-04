import  React ,  {useState} from 'react'


const Second = () => {

  const [ishover ,setIshover ] = useState(false);

  return (
    <div 
    style={{width : "200px",
     height: "200px", 
     border: "solid black 1px" ,
     position:"absolute" ,
     display:"flex",
     flexDirection:'column',
     justifyContent:"center",
     alignItems:"center",
      top:"40%" ,
      backgroundColor:"rgba(0,0,0,.5)" ,
     left:"40%"
     }}>
      
        <button 
       style={{
         border:"none",
         backgroundColor:"black",
         width:"50%",
         height:"20%",
         fontSize:"15px",
         color:"#fff",



       }}
        onMouseEnter={()=>setIshover(true)}
        onMouseLeave={()=>setIshover(false)}
        >
            hover me
        </button>
        {
            ishover ? ( 
             <div> i'll appear when you hover me
             </div>
            ):(<div> plz hover</div>)
        }

    </div>
  )
}

export default Second