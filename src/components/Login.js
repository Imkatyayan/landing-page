import React, { Component } from 'react'
import loginImg from "./book.svg";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Login extends Component {
     continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

  

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">

			 <div className="image">
            <img src={loginImg} />
          </div>
			  <TextField id="outlined-basic" label="Outlined" variant="outlined" color="#fff"
              placeholder="Enter Your Username"
              label="Username"
              onChange={inputChange('username')}
              defaultValue={values.username}
              margin="normal"
              fullWidth
            />
				    <TextField id="outlined-basic" label="Outlined" variant="outlined" color="#fff"
 type={values.showPassword ? 'text' : 'password'}
            value={values.password}
              placeholder="Enter Your Password"
              label="Passowrd"
              onChange={inputChange('password')}
              defaultValue={values.password}
              margin="normal"
              fullWidth

            />
			
			
            

<Button   href="https://www.google.com/">
  Forgot Password ?
</Button> <br />
               <br />

                <div className="row">
                    <div className="col-6">
                       <Button variant="contained" color="primary">
 Login
</Button>
                    </div>
                    <div className="col-6 text-right">
	<Button variant="contained" color="secondary" disableElevation onClick={this.continue}>
  Register
</Button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
