import React from 'react'
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

];
const Fifth = () => {
  return (
    <>
   {
    applicants.map((data)=>{
        return(
            <div key={data.id}>
            <p> Application Name :{data. name}</p>
            <p> Application location : {data. location}</p>
            <p> Application participated : {data.hackathons}</p>

            </div>
        ) })
      }
   </>
  )
}

export default Fifth
