import React from 'react';
import { produce } from 'immer';
import axios from 'axios';
import CallForm from './CallForm';


class AddCallPage extends React.Component {
    state = {
        name: '',
        address: '',
        zip: '',
        neighborhood: '',
        landlord: '',
        appliance: '',
        brand: '',
        applianceLocation: '',
        type: '',
        workPreformed: '',
        additionalWorkAndNotes: '',
        calls: '',
        reasonForReturn: '',
        ammout: '',
        methodOfPayment: '',
        date: ''
 
    }

    onInputChange = e => {
        const nextState = produce(this.state, draft => {
            draft[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onSubmit = () => {
        axios.post('/api/calls/add', this.state).then(() => {
            this.props.history.push('/');
        });
    }

    render() {
        const { name, address, zip, neighborhood, landlord, appliance, brand, applianceLocation, type, workPreformed, additionalWorkAndNotes, calls, reasonForReturn, ammout, methodOfPayment, date } = this.state;
        return (

            <div>
                <h1>Add Call</h1>
                <CallForm
                 name={name}
                 address={address}
                 zip={zip}
                    neighborhood={neighborhood}
                    landlord={landlord}
                    appliance={appliance}
                    brand={brand}
                    applianceLocation={applianceLocation}
                    type={type}
                    workPreformed={workPreformed}                    
                    additionalWorkAndNotes={additionalWorkAndNotes}
                    calls={calls}
                    reasonForReturn={reasonForReturn}
                    ammout={ammout}
                    methodOfPayment={methodOfPayment}
                    date={date}

                    onInputChange={this.onInputChange}
                    onSubmit={this.onSubmit}
                />
            </div>);
    }
}

export default AddCallPage;


