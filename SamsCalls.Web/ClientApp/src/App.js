import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import AddCallPage from './AddCallPage';
import EditCallPage from './EditCallPage';



class App extends React.Component {
    render() {
        return (
            <div className="container" style={{ width: '100%', marginTop: 40}}>
                <Route exact path='/' component={HomePage} />
                <Route path='/addcall' component={AddCallPage} />
                <Route path='/editcall/:callId?' component={EditCallPage} />   
            </div>);
    }
}

export default App;