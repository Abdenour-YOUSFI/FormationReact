import React from 'react'
import cat from "./chat.png" // importé une image avec un nom "cat"
export default function Service() {
    let existe=false
  return (
    <React.Fragment>
        <div className='general'>
    <img src={cat} alt="image" /> 
    {/* faire un appel au "cat"  */}
   <div className='container'>
   <h2>le premier titre react</h2>
    <p>React est une bibliothèque JavaScript libre. Elle est maintenue 
    par Meta ainsi que par une communauté de développeurs individuels et d'entreprises depuis</p>
   </div>
    </div>
   { existe?<h5>je m'appelle Abdenour</h5>: <h4>je suis un developeur </h4>
}
   
    </React.Fragment>

    
  )
}
