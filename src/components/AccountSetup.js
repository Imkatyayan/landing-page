import React, { Component } from 'react'
import loginImg from "./book3.svg";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export class AccountSetup extends Component {
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

			 <div className="image">
            <img src={loginImg} />
          </div>
			 <TextField id="outlined-basic" label="Outlined" variant="outlined" color="#fff"
              placeholder="Enter Your Name"
              label="Name"
              onChange={inputChange('Name')}
              defaultValue={values.Name}
              margin="normal"
              fullWidth
            />
				   <TextField id="outlined-basic" label="Outlined" variant="outlined" color="#fff"
              placeholder="Enter Your Email"
              label="Email"
              onChange={inputChange('Email')}
              defaultValue={values.Email}
              margin="normal"
              fullWidth
            /> <br />
              
               <br />

                   <div className="row">
                    <div className="col-6">
						<Button variant="contained" color="secondary" disableElevation onClick={this.back}>
  Back To Login
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

export default AccountSetup
