import  React from 'react';
import { Link } from 'react-router-dom';


export default function CallRow({ call, onDeleteCheckChanged }) {
    return (
        <tr className={call.markedForDeletion ? 'danger' : ''}>
            <td><input checked={call.markedForDeletion} onChange={() => onDeleteCheckChanged(call)} type="checkbox" className="form-control" /></td>
            <td>{call.name}</td>
            <td>{call.address}</td>
            <td>{call.zip}</td>
            <td>{call.neighborhood}</td>
            <td>{call.landlord}</td>
            <td>{call.appliance}</td>
            <td>{call.brand}</td>
            <td>{call.applianceLocation}</td>
            <td>{call.type}</td>
            <td>{call.workPreformed}</td>
            <td>{call.additionalWorkAndNotes}</td>
            <td>{call.calls}</td>
            <td>{call.reasonForReturn}</td>
            <td>{call.ammout}</td>
            <td>{call.methodOfPayment}</td>
            <td input type={Date}>{call.date.substring(5, 10)}</td>
                <td>
                    <Link to={`/editcall/${call.id}`}>
                        <button className='btn btn-warning'>Edit</button>
                    </Link>
                </td>         
        </tr>
    )
}