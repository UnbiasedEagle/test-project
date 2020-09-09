import React, { useState } from 'react';
import Form from '../components/Form';

const Input = () => {
	const [ showAlert, setShowAlert ] = useState(false);

	const [ alertMessage, setAlertMessage ] = useState('');

	const [ alertType, setAlertType ] = useState('');

	return (
		<div className='container'>
			<h1 className='text-center display-3'>Create User</h1>
			{showAlert && <div className={`alert alert-${alertType}`}>{alertMessage}</div>}
			<Form setAlertType={setAlertType} setShowAlert={setShowAlert} setAlertMessage={setAlertMessage} />
		</div>
	);
};

export default Input;
