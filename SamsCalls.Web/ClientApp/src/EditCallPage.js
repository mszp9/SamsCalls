import React from 'react';
import axios from 'axios';
import CallForm from './CallForm';
import { produce } from 'immer';

export default class EditPage extends React.Component {

    state = {
        call: {
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
        },
        calls: []
    }

    componentDidMount = () => {
        if (this.props.match.params.callId) {
            axios.get(`/api/calls/getbyid/${this.props.match.params.callId}`)
                .then(({ data }) => {
                    this.setState({ call: data });
                });
        } else {
            axios.get('/api/calls/get').then(({ data }) => {
                this.setState({ calls: data });
            });
        }
    }

    onInputChange = e => {
        const nextState = produce(this.state, draft => {
            draft.call[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onSubmit = () => {
        axios.post('/api/calls/update', this.state.call).then(() => {
            this.props.history.push('/');
        });
    }

    onSelectChange = e => {
        const id = e.target.value;
        axios.get(`/api/calls/getbyid/${id}`)
            .then(({ data }) => {
                this.setState({ call: data });
            });
    }

    render() {
        const  { name, address, zip, neighborhood, landlord, appliance, brand, applianceLocation, type, workPreformed, additionalWorkAndNotes, calls, reasonForReturn, ammout, methodOfPayment, date } = this.state.call;
        let content;
        if (name) {
            content = <CallForm
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
        }
        else {
            content = (
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 well">
                        <h3>Start typing to search by Name</h3>
                        <select className="form-control" onChange={this.onSelectChange}>
                           
                            <option value="0" ><input type="text" />-- Search By Name--</option>

                            {this.state.calls.sort((a, b) => (a.name > b.name) ? 1 : -1).map(p => <option key={p.id}
                                value={p.id}>{p.name + ' ' + p.appliance}</option>)}
                        </select>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 well">
                            <h3>Start typing to search by Address</h3>
                            <select className="form-control" onChange={this.onSelectChange}>
                                < option value="0" ><input type="text"/>-- Search By Address--</option>

                                {this.state.calls.map(p => <option key={p.id}
                                    value={p.id}>{p.address + ' ' + p.name}</option>)}
                            </select>
                        </div> 
                    </div>)
                </div>)


        }
        return (
            <div>
                <h1>Edit call</h1>
               {content}
            </div>
        )
    }
}
