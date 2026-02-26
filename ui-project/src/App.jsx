import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  
  const users =  [

        {
      img:'https://plus.unsplash.com/premium_photo-1661284828052-ea25d6ea94cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro:' Effective work requires a professional attitude, including punctuality, accountability, ethical behavior, and clear communication.',
      color:'royalblue',
      tag:'Working'
          },
          {
            img:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
            intro:'Teamwork is the collaborative effort of a group of individuals working together to achieve a common goal or complete a task in the most efficient and effective way.',
            color:'lightseagreen',
            tag:'Team Work'

          },
          {
            img:'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
            intro:'Discipline leads to increase the level of your skills and boost your performance',
            color:'orange',
            tag:'Levelling'

          },
  
         {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'We prior our customers and make sure that every customer should be fully satisfied by our service.',
      color:'lightpink',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1633113215719-e9cc39f594b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHx3b3JraW5nfGVufDB8fDB8fHww',
      intro:'True professionals blend skill, integrity, and dedication to deliver excellence and inspire trust in others.',
      color:'yellow',
      tag:'Underserved'
    },
    
   {
      img:'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHx3b3JraW5nfGVufDB8fDB8fHww',
      intro:'These services may include payday loans, pawn shops, money orders, or check-cashing outlets.',
      color:'gray',
      tag:'Underbanked'
    }
  ]
  
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
