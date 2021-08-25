import React from 'react'

const User = ({ users }) => {
  return (
    <div>
      <hr />
      <p>{`id: ${users.id}`}</p>
      <p>{`Full Name: ${users.first_name} ${users.last_name}`}</p>
      <p>{`Email: ${users.email}`}</p>
      
    </div>
  )
}

export default User