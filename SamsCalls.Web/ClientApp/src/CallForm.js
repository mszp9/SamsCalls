import React from 'react';
import 'react-day-picker/lib/style.css';

const CallForm = ({name, address, zip, neighborhood, landlord, appliance, brand, applianceLocation, type, workPreformed, additionalWorkAndNotes, calls, reasonForReturn, ammout, methodOfPayment, date, onInputChange, onSubmit}) => {
    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3 well">
                <input type="text"
                name="name"
                value={name}
                onChange={onInputChange}
                placeholder="Name"
                className="form-control"
                />
                <br/>
                <input type="text"
                name="address"
                value={address}
                onChange={onInputChange}
                placeholder="Address"
                className="form-control"
                />
                <br />
                <input type="text"
                    name="zip"
                    value={zip}
                    onChange={onInputChange}
                    placeholder="Zip Code"
                    className="form-control"
                />
                <br />
                <input type="text"
                    name="neighborhood"
                    value={neighborhood}
                    onChange={onInputChange}
                    placeholder="Neighborhood"
                    className="form-control"
                />
                <br />
                <input type="text"
                    name="landlord"
                    value={landlord}
                    onChange={onInputChange}
                    placeholder="Landlord"
                    className="form-control"
                />
                <br />
                <input type="text"
                    name="appliance"
                    value={appliance}
                    onChange={onInputChange}
                    placeholder="Appliance"
                    className="form-control"
                />
                <br />
                <input type="text"
                    name="brand"
                    value={brand}
                    onChange={onInputChange}
                    placeholder="Brand"
                    className="form-control"
                />
                <br />
                <input type="text"
                    name="applianceLocation"
                    value={applianceLocation}
                    onChange={onInputChange}
                    placeholder="Appliance Location and Details"
                    className="form-control"
                />
                <br />
                <input type="text"
                    name="type"
                    value={type}
                    onChange={onInputChange}
                    placeholder="Type"
                    className="form-control"
                />
                <br />
                <input type="text"
                    name="workPreformed"
                    value={workPreformed}
                    onChange={onInputChange}
                    placeholder="Work Preformed"
                    className="form-control"
                />
                <br />
                <input type="text"
                    name="additionalWorkAndNotes"
                    value={additionalWorkAndNotes}
                    onChange={onInputChange}
                    placeholder="Additional Work And Notes"
                    className="form-control"
                />
                <br />
                <input type="text"
                    name="calls"
                    value={calls}
                    onChange={onInputChange}
                    placeholder="Calls"
                    className="form-control"
                />
                <br />
                <input type="text"
                    name="reasonForReturn"
                    value={reasonForReturn}
                    onChange={onInputChange}
                    placeholder="Reason For Return"
                    className="form-control"
                />
                <br />
                <input type="text"
                    name="ammout"
                    value={ammout}
                    onChange={onInputChange}
                    placeholder="Ammount"
                    className="form-control"
                />
                <br />
                <input type="text"
                    name="methodOfPayment"
                    value={methodOfPayment}
                    onChange={onInputChange}
                    placeholder="Method Of Payment"
                    className="form-control"
                />
                <br />
                <input type="date"
                    name="date"
                    value={date}
                    onChange={onInputChange}
                    placeholder="Date"
                    className="form-control"
                />
                <br />
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default CallForm;