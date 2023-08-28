import React from 'react'

const List = () => {

    const data=[
        {id:1,name:"surya"},
        {id:2,name:"janu"}

    ];
  return (
    <div>
      <h1> List of users</h1>
      <ul>
        {data.map(user=>(
            <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List
