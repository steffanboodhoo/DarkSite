import React, {Component} from 'react';

import AdminForm from './AdminForm';
import AdminInfo from './AdminInfo';

class Admin extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Dark Site</h1>
                <div className='row'>
                    <div className='col m6 s12'> <AdminForm /> </div>
                    <div className='col m6 s12'> <AdminInfo/> </div>
                </div>
                
            </div>
        )
    }

}

export default Admin;