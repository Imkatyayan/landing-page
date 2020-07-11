import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
export class PersonalDetails extends Component {
continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5"></h1>
			
					  	 <TextField id="outlined-basic" label="Outlined" variant="outlined" color="#fff"
type={values.showPassword ? 'date' : 'date'}
            value={values.date}
              placeholder=""
              label=""
              onChange={inputChange('land')}
              defaultValue={values.land}
              margin="normal"
              fullWidth
            />
		<br />
               
<br />
	<FormLabel component="legend">Gender</FormLabel>
	 <RadioGroup row aria-label="Gender" name="position" defaultValue="">
	 <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
	 <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
     <FormControlLabel value="Others" control={<Radio color="primary" />} label="Others" />
      </RadioGroup>
 <div className="form-group">
                 
			<input type="checkbox"/> I Agree To The Terms and Conditions
		
                    
                </div>
                <br />
<div className="row">
                    <div className="col-6">
						<Button variant="contained" color="secondary" disableElevation onClick={this.back}>
  Back 
</Button>
                        
                    </div>
                    <div className="col-6 text-right">
						<Button variant="contained" color="primary" disableElevation onClick={this.continue}>
  Submit
</Button>
</div>
                </div>
            </div>
        )
    }
}

export default PersonalDetails
