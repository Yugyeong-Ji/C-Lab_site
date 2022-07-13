import React, {Component} from 'react';

class SecurityNewsOption extends Component {
    render() {
        return(
            <table>
            <tbody>
                <tr>
                    <td><img src={this.props.image_url} width = "80px" height="80px" alt={this.props.image_alt}/></td>
                    <td><a href={this.props.url}>{this.props.title}</a></td>
                    <td>{this.props.summary}</td>
                    <td>{this.props.date}</td>
                </tr>
            </tbody>
        </table>
        );
    }
}
export default SecurityNewsOption;