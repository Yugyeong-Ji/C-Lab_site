import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsroomHome from './components/NewsroomHome/NewsroomHome';
import SecurityList from './components/NewsroomHome/SecurityList';

class App extends Component {
  render() {
    return (
    <div className="App">
        <Header></Header>
        <NewsroomHome></NewsroomHome>
        <SecurityList></SecurityList>
        <Footer></Footer>
    </div>
    );
  }
}

export default App;