import React,{useEffect,useState} from 'react';
import {getUsers,deleteUser} from '../request/index'
import Row from './Row'


const UserList = (props) => {

     const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
       
        getUsers().then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                setUsers(data)
                setLoading(false);
            }
        })
    },[])


    const fetchUsers=()=>{
          getUsers().then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                setUsers(data)
                setLoading(false);
                
            }
        })
    }

    const removeUser=(id)=>{
        deleteUser(id).then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                props.setAlertMessage(data.message);
                props.setShowAlert(true);
                props.setAlertType('success');
                fetchUsers()
				setTimeout(() => {
					props.setShowAlert(false);
				}, 3000);
            }
        })
    }


    const sortByName=()=>{
        const sortedDataByName = [].concat(users)
    .sort((a, b) => a.name > b.name ? 1 : -1)
        setUsers(sortedDataByName)
    }


    const sortByDate=()=>{
        const sortedDataByDate = [].concat(users)
    .sort((a, b) => a.created > b.created ? -1 : 1)
        setUsers(sortedDataByDate)
    }

    return ( 
        <div>
            {
               loading ?(
                   <div>
                       <h4 className='disply-4 mt-3'>Loading....</h4>
                   </div>
               ):(
                    <div>
                         {
                users.length>0?(
                    <div>
                         <div className="row mt-4 align-items-center">
                            <div className="col-md-4">
                                <p className='display-4'>Sort By: </p>
                            </div>
                            <div className="col-md-4">
                                <button onClick={sortByDate} className='btn btn-lg btn-primary'>Created At</button>
                            </div>
                            <div className="col-md-4">
                                <button onClick={sortByName} className='btn btn-lg btn-success'>Name</button>
                            </div>
                    </div>
            
                        <table className='table mt-4'>
                            <thead>
                                <tr>
                                <th scope='col'>Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Birth Date</th>
                                <th scope="col">Country</th>
                                <th scope='col'>Created At</th>
                                <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user=>{
                                        return (
                                            <Row removeUser={removeUser} key={user._id} user={user}></Row>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                   
                ):(
                    <h3 className='display-4'>No Users Present</h3>
                )
            }
                    </div>
               )
            }
           
            </div>
          
     );
}
 
export default UserList;