import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CallTable from './CallTable';
import { produce } from 'immer';


class HomePage extends React.Component {

    state = {
        calls: []
    }

    componentDidMount() {
        axios.get('/api/calls/get').then(({ data }) => {
            data.forEach(p => p.markedForDeletion = false);
            this.setState({ calls: data });
        });
    }

    onDeleteCheckChanged = call => {
        const nextState = produce(this.state, draftState => {
            const callThatChanged = draftState.calls.find(p => p.id === call.id);
            callThatChanged.markedForDeletion = !callThatChanged.markedForDeletion;
        });

        this.setState(nextState);
    }

    onDeleteClicked = () => {
        axios.post('/api/calls/delete',
            { callIds: this.state.calls.filter(p => p.markedForDeletion).map(p => p.id) })
            .then(() => {
                axios.get('/api/calls/get').then(({ data }) => {
                    data.forEach(p => p.markedForDeletion = false);
                    this.setState({ calls: data });
                });
            });
    }


    onCheckAllClicked = () => {
        const nextState = produce(this.state, draftState => {
            draftState.calls.forEach(p => p.markedForDeletion = true);
        });
        this.setState(nextState);
    }

    onClearAllClicked = () => {
        const nextState = produce(this.state, draftState => {
            draftState.calls.forEach(p => p.markedForDeletion = false);
        });
        this.setState(nextState);
    }
  
   
    render() {
        return (
            <div>
                <h1 className="text-success">Sam's Appliance Call Center</h1>
                <div class="btn-group">
                <Link to='/addcall'>
                    <button className="btn btn-primary">Add Call</button>
                </Link>

                <Link to={`/editcall`}>
                    <button className='btn btn-warning'>Search</button>
                    </Link>
                    </div>
           
                <CallTable
                    onDeleteCheckChanged={this.onDeleteCheckChanged}
                    calls={this.state.calls}
                    onDeleteClicked={this.onDeleteClicked}
                    onCheckAllClicked={this.onCheckAllClicked}
                    onClearAllClicked={this.onClearAllClicked} />
            </div>);
    }
}

export default HomePage;