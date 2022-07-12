import React, {Component} from 'react';
import SecurityNewsOption from './SecurityNewsOption';

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
        const response = await fetch("/api/crawl");
        const body = await response.json();
        return body;
    };

    render(){
        const { Security_data } = this.state;

        return(
            <div class="overflow-x-auto">
                <table class="table w-full">
                <br></br>
                <tbody>
                { Security_data.map(post=>{
                    return <SecurityNewsOption image_url= {post.image_url} image_alt={post.image_alt} href={post.url} 
                    title={post.title}
                    summary={post.summary} date={post.date}/>
                })
                }
                </tbody>
                </table>
            </div>
        );
    }
}
export default SecurityNews;