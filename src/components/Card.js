import React from 'react'

const Card = ({id,name,address,phone,email}) => {
  return (
    // card
    <div className="card" key={id}>
    <div className="card-header">
      <h3 className="card-title">{name}</h3>
    </div>
    <div className="card-content">
      <p>I am a digital designer in love with<br/> 
      photography, painting and discovering <br/> 
      new worlds and culture.</p>
    </div>
    <div className="general-info">
      <h4 className="general-info">General Info</h4>
      <div className='general-info-inner'>
        <p><span>Date of Birth:</span>{""} 19th August 1990</p>
         <p><span>Address:</span>{""} {address.suite} {address.street}, {address.city }</p> 
        <p><span>Email:</span> {""} {email}</p>
        <p><span>Phone:</span> {""} {phone}</p>
      </div>
      </div>
   
  </div>

  )
}

export default Card