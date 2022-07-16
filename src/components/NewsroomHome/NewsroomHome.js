import React, { Component } from 'react';

class NewsroomHome extends Component {
    render() {
        return (
            <section className="News-Room">
                
            <div className="newsroomhome-wapper">
                <div className="h-screen bg-gradient-to-r from-blue-400 to-indigo-400 text-white content-center">
                    <h1 className="pt-80 align-middle text-center text-6xl font-bold text-white">📺NEWS ROOM</h1>
                    <p className="pt-5 text-center text-xl text-white"><span className="font-bold">AI, Security, Big Data, 기업 채용 정보</span>까지 카테고리별로 제공하는 <span className="font-bold">C-Lab News Room</span></p>
                </div>
                <div className="c-container mx-auto">
                <div className="text-center">
                    <h1 className="pt-32 text-4xl font-bold">카테고리</h1>
                </div>
                <div className="cotent-center align-middle mb-32">
                    <div className="mx-auto flex pt-16 content-center">
                        <span className="h-64 w-1/3 bg-lime-400 inline-block text-center text-white pt-28 text-4xl rounded-lg hover:bg-lime-700">IT🤖</span>
                        <span className="ml-16 h-64 w-2/3 bg-green-400 inline-block text-center text-white pt-28 text-4xl rounded-lg hover:bg-green-700">Security🔒</span>
                    </div>
                    <div className="mx-auto flex pt-8 content-center">
                        <span className="h-64 w-3/5 bg-yellow-400 inline-block text-center text-white pt-28 text-4xl rounded-lg hover:bg-yellow-700">Mobile📲</span>
                        <span className="ml-16 h-64 w-2/5 bg-violet-400 inline-block text-center text-white pt-28 text-4xl rounded-lg hover:bg-violet-700">Computer🖥️</span>
                    </div>
                    <div className="mx-auto pt-8 cotent-center">
                        <span className="h-64 w-full bg-pink-300 inline-block text-center text-white pt-28 text-4xl rounded-lg hover:bg-pink-700">채용 정보✍️</span>
                    </div>
                </div>   
            </div>
            </div>
            </section>
        );
    }
}
export default NewsroomHome;