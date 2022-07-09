import { response } from 'express';
import React, {Component} from 'react';
import NewsroomHome from './NewsroomHome';

class SecurityNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Security_data: [],
        };
    }

    componentWillMount(){
        this.callApi().then((res)=>{
            this.setState({
                Security_data: res,
            });
        });
    }

    callApi = async() => {
        const reponse = await fetch("/api/security");
        const body = await response.json();
        return body;
    };
    render(){
        const { Security_data } = this.state;

        return(
            <div>
                <h2>Security News🔒</h2>
                <br></br>
                
            </div>
        )
    }
}