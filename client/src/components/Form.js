import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { addUser, getCountries } from '../request/index';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const Form = (props) => {

    const classes = useStyles();

	useEffect(() => {
		getCountries().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setCountryList(data.countries);
			}
		});
    }, []);
    

	const [ countryList, setCountryList ] = useState([]);

	const [ name, setName ] = useState('');
	const [ birthdate, setBirthDate ] = useState(new Date());
	const [ country, setCountry ] = useState('');

	const onBirthDateHandler = (date) => {
		setBirthDate(date);
	};

	const onFormSubmit = (e) => {
		e.preventDefault();

        const countryNames=countryList.map(country=>{
            return country.name
        })

		if (name.length < 6) {
			props.setShowAlert(true);
			props.setAlertMessage('Name should be atleast 6 characters');
			props.setAlertType('danger');
			setTimeout(() => {
				props.setShowAlert(false);
			}, 3000);
		} else if (name.length >= 6 && countryNames.includes(country)) {
			addUser({ name, birthdate, country }).then((data) => {
				if (data.error) {
					console.log(data.error);
				} else {
					props.setAlertMessage(data.message);
                    props.setShowAlert(true);
                    props.setAlertType('success');
					setTimeout(() => {
						props.setShowAlert(false);
					}, 3000);
					setName('');
					setBirthDate(new Date());
					setCountry('');
				}
			});
		} else {
			props.setShowAlert(true);
			props.setAlertMessage('Please choose a valid Country');
			props.setAlertType('danger');
			setTimeout(() => {
				props.setShowAlert(false);
			}, 4000);
		}
	};

	return (
		<form onSubmit={onFormSubmit}>
			<div className='form-group'>
				<label>Name</label>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type='text'
					name='name'
					className='form-control'
				/>
			</div>
			<div className='form-group'>
				<label>Birth Date</label>
				<br />
				<DatePicker selected={birthdate} onChange={onBirthDateHandler} className='form-control' />
			</div>
			<div className='form-group'>
				<label>Country</label>
				<Autocomplete
                    id="country-select"
                    style={{ width: 300 }}
                    options={countryList}
                    classes={{
                        option: classes.option,
                    }}
                    country={country}
                    onInputChange={(event,newInputValue)=>{
                        setCountry(newInputValue)
                    }}
                    autoHighlight
                    getOptionLabel={(option) => option.name}
                    renderOption={(option) => (
                        <React.Fragment>
                        ({option.code}) {option.name} 
                        </React.Fragment>
                    )}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        label="Choose a country"
                        variant="outlined"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                        />
                    )}
    />
			</div>
			<button className='btn btn-primary btn-lg'>Submit</button>
		</form>
	);
};

export default Form;
