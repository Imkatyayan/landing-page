import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export class Details extends Component {
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
              placeholder="House No"
              label="Address Line 1"
              onChange={inputChange('house')}
              defaultValue={values.house}
              margin="normal"
              fullWidth
            />
				  	 <TextField id="outlined-basic" label="Outlined" variant="outlined" color="#fff"
              placeholder="Street/Lane"
              label="Address Line 2"
              onChange={inputChange('lane')}
              defaultValue={values.lane}
              margin="normal"
              fullWidth
            />
				  	 <TextField id="outlined-basic" label="Outlined" variant="outlined" color="#fff"
              placeholder="Landmark"
              label="Address Line 3"
              onChange={inputChange('land')}
              defaultValue={values.land}
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

export default Details
