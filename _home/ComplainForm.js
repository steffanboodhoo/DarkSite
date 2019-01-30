import React from 'react';
const ComplainForm = (props) => {

    const handle_submit = (ev) => {
        let params = {
            message: document.getElementById('message'),
            email:document.getElementById('email')
        }
        props.submit(params)
    }

    return(
        <div>
            <div className='row'>
                <div className="input-field col s12">
                    <input id="email" type="text" className="validate"/>
                    <label htmlFor="email">your@email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="message" className="materialize-textarea"></textarea>
                    <label htmlFor="message">Comment/Concerns</label>
                </div>
            </div>
            <div className='row'>
                <a className="waves-effect waves-light btn">
                    <i className="material-icons right" onClick={handle_submit}>keyboard_arrow_right</i>Submit
                </a>
            </div>
        </div>
    );
}
export default ComplainForm;