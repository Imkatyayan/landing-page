import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export class SocialProfiles extends Component {
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
 type={values.showPassword ? 'text' : 'password'}
            value={values.pass}
              placeholder="Enter Password"
              label="Passowrd"
              onChange={inputChange('pass')}
              defaultValue={values.pass}
              margin="normal"
              fullWidth

            />
				      <TextField id="outlined-basic" label="Outlined" variant="outlined" color="#fff"
 type={values.showPassword ? 'text' : 'password'}
            value={values.passcon}
              placeholder="Confirm Password"
              label="Confirm Passowrd"
              onChange={inputChange('passcon')}
              defaultValue={values.passcon}
              margin="normal"
              fullWidth

            />
				      <TextField id="outlined-basic" label="Outlined" variant="outlined" color="#fff"
 type={values.showPassword ? 'number' : 'number'}
            value={values.contact}
              placeholder="Enter Your Contact Number"
              label="Contact No"
              onChange={inputChange('contact')}
              defaultValue={values.contact}
              margin="normal"
              fullWidth

            /> <br />
			
             

                <br />

                 <div className="row">
                    <div className="col-6">
						<Button variant="contained" color="secondary" disableElevation onClick={this.back}>
  Back 
</Button>
                        
                    </div>
                    <div className="col-6 text-right">
						<Button variant="contained" color="primary" disableElevation onClick={this.continue}>
  Proceed
</Button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialProfiles
