import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsroomHome from './components/NewsroomHome/NewsroomHome';
import SecurityList from './components/NewsroomHome/SecurityList';
import ITList from './components/NewsroomHome/ITList';
import MobileList from './components/NewsroomHome/MobileList';
import ComputerList from './components/NewsroomHome/ComputerList';

class App extends Component {
  render() {
    return (
    <div className="App">
        <Header></Header>
        <NewsroomHome></NewsroomHome>
        <ITList></ITList>
        <SecurityList></SecurityList>
        <MobileList></MobileList>
        <ComputerList></ComputerList>
        <Footer></Footer>
    </div>
    );
  }
}

export default App;