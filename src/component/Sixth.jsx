import React from 'react'

const Sixth = () => {
    const applicants = [ {
        name: 'Joe', work: 'freelance-developer',
        blogs: '54', websites: '32',
        hackathons: '6', location: 'morocco', id: '0',
      },
      {
        name: 'janet', work: 'fullstack-developer', 
        blogs: '34', websites: '12', 
        hackathons: '8', location: 'Mozambique', id: '1',
      },
    
    ]
  return (
    <div>
        <Showcaseapp applicants = {applicants}/>
    </div>
  )

   function Showcaseapp (props){
    const applications = props.applications
    return(
        <div>
            {
                applications.map ((data)=>
                {
                    <div key = {data.id}>
                        <p>name : {data.name}</p>
                        <p>website build :{data.websites}</p>
                        <p> location : {data.location}</p>
                    </div>
                })
            }
        </div>
    )
  }
}

export default Sixth