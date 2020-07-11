import React, { Component } from 'react';
import Login from './Login';
import AccountSetup from './AccountSetup';
import SocialProfiles from './SocialProfiles';
import Details from './Details';
import PersonalDetails from './PersonalDetails';
import Address from './Address';
import Success from './Success';

export class Form extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        phone: '',
        password: '',
        facebook: '',
        twitter: '',
        github: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { name, email, phone, password, facebook, twitter, github } = this.state;
        const values = { name, email, phone, password, facebook, twitter, github };

        switch (step) {
				case 1:
                return (
                    <Login
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <AccountSetup
                        nextStep={this.nextStep}
					prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <SocialProfiles
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
				 case 4:
                return (
                    <Details
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
				 case 5:
                return (
                    <Address
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
				 case 6:
                return (
                    <PersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
           
            case 7:
                return (
                    <Success />
                );
        }
    }
}

export default Form
