import React, {Component} from 'react';
import ComplainForm from './ComplainForm';
import About from './About';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Dark Site</h1>
                <div className='row'>
                    <div className='col m6 s12'> <ComplainForm /> </div>
                    <div className='col m6 s12'> <About/> </div>
                </div>
                
            </div>
        );
    }
    submit_customer_email = (params) => {

        // Axios.post('http://localhost:5000/email/cust/help',params).then( resp => {
        //     console.log(resp);
        // })
    }


    submit_admin_email = (params) => {

        // Axios.post('http://localhost:5000/email/admin/help', params).then( resp => {
        //     console.log(resp);
        // })
    }
}

export default Home;