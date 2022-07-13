import React, {Component} from 'react';
import SecurityNewsOption from './components/NewsroomHome/SecurityNewsOption';

class SecurityNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SecurityData: [],
        };
    }

    static getDerivedStateFromProps(){
        this.callApi().then((res)=>{
            this.setState({
                SecurityData: res,
            });
        });
    }

    callApi = async() => {
        const response = await fetch("/api/SecurityNews");
        const body = await response.json();
        return body;
    };

    render(){
        const { SecurityData } = this.state;

        return(
            <div class="overflow-x-auto">
                <table class="table w-full">
                <br></br>
                <tbody>
                { SecurityData.map(post=>{
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
    componentDidMount(){
        console.log('componentDidMount[Class]');
    }
}
export default SecurityNews;