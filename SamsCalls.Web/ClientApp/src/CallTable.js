import React, { Component } from 'react';
import CallRow from './CallRow';


export default class CallTable extends Component {
    render() {
        const buttonStyle = {
            margin: 5
        }
        return (         
            <table className="table table table-hover table-striped table-bordered table-responsive "> 
                
                <thead>
                    <tr>
                        <th style={{width:'5%'}} className='success'>

                            <div class="btn-group-vertical btn-group-sm">
                                <button onClick={this.props.onDeleteClicked} style={buttonStyle} className="btn btn-danger btn-block">Delete</button>
                                <button onClick={this.props.onCheckAllClicked} style={buttonStyle} className="btn btn-info">Check All</button>
                                <button onClick={this.props.onClearAllClicked} style={buttonStyle} className="btn btn-success">Clear All</button>
                            </div>                                                     
                        </th>                  
                        <th className='success'>Name</th>
                        <th style={{ width: '5%' }} className='success'>Address</th>
                        <th style={{ width: '5%' }} className='success'>Zip Code </th>
                        <th className='success'>Neighborhood</th>
                        <th className='success'>Landlord</th>
                        <th className='success'>Appliance</th>
                        <th className='success'>Brand</th>
                        <th className='success'>Appliance Location</th>
                        <th className='success'>Type</th>
                        <th className='success'>Work Preformed</th>
                        <th style={{ width: '5%' }} className='success'>Additional Work And Notes</th>
                        <th className='success'>Calls</th>
                        <th className='success'>Reason For Return</th>
                        <th className='success'>Amount</th>
                        <th className='success'>Method Of Payment</th>
                        <th style={{ width: '3%' }} className='success'>Date</th>
                        <th className='success'>Click to Edit</th>
                    </tr>
                </thead>                  
                <tbody>
                    {this.props.calls.map(call => <CallRow onDeleteCheckChanged={this.props.onDeleteCheckChanged}
                        call={call} key={call.id} />)}
                </tbody>                          
            </table>
                        
        )
    }
}