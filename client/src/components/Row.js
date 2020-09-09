import React from 'react';

const User = ({user,removeUser}) => {

    const onRemoveClick=()=>{
        removeUser(user._id)
    }

    return ( 
        <tr>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{new Date(user.birthdate).toLocaleDateString()}</td>
            <td>{user.country}</td>
            <td>{new Date(user.created).toLocaleDateString()}</td>
            <td><button onClick={onRemoveClick} className='btn btn-danger'>Remove</button></td>
        </tr>
     );
}
 
export default User;