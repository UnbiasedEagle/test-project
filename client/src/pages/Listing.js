import React,{useState} from 'react';
import UserList from '../components/UserList'


const Listing = () => {

    const [ showAlert, setShowAlert ] = useState(false);

	const [ alertMessage, setAlertMessage ] = useState('');

	const [ alertType, setAlertType ] = useState('');

    return ( 
        <div className='container'>
           <h1 className='text-center display-3'>Listings</h1>
           {showAlert && <div className={`alert alert-${alertType}`}>{alertMessage}</div>}
           <UserList setShowAlert={setShowAlert} setAlertMessage={setAlertMessage} setAlertType={setAlertType}></UserList>
        </div>
     );
}

export default Listing;