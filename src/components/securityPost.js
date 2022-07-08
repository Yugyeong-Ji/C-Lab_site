import React, { Component } from 'react';

class securityPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crwal: []
        }
    }
    componentWillMount() {
        fetch('api/crwal')
            .then(res => res.json())
            .then(data => this.setState({
                crwal: data
            }));
    }
    render() {
        const { crawl } = this.state;
        const postsList = crawl.map((post) => (
            <div key={post.id} id={post.id}>
                
                <h4>{post.text}</h4>
            </div>
        ));

        return()