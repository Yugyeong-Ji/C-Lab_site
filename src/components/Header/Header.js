import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <div class="navbar bg-base-100 fixed z-50 border-b">
        <div class="navbar-start text-base-content">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="https://clab.gwansik.dev/" target="_self" class="link link-hover">소개</a></li>
                    <li><a href="https://clab.gwansik.dev/" target="_self" class="link link-hover">커뮤니티</a></li>
                    <li><a href="https://clab.gwansik.dev/" target="_self" class="link link-hover">뉴스룸</a></li>
                    <li><a href="https://clab.gwansik.dev/" target="_self" class="link link-hover">자료실</a></li>
                    <li><a href="https://clab.gwansik.dev/" target="_self" class="link link-hover">지원</a></li>
                </ul>
            </div>
            <div className="ml-atuo">
                <a href="https://clab.gwansik.dev/" target="_self" class="btn btn-ghost normal-case text-xl">C-Lab</a>
            </div>
        </div>
        
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
                <li><a href="https://clab.gwansik.dev/" target="_self" class="link link-hover">소개</a></li>
                <li><a href="https://clab.gwansik.dev/" target="_self" class="link link-hover">커뮤니티</a></li>
                <li><a href="https://clab.gwansik.dev/" target="_self" class="link link-hover">뉴스룸</a></li>
                <li><a href="https://clab.gwansik.dev/" target="_self" class="link link-hover">자료실</a></li>
                <li><a href="https://clab.gwansik.dev/" target="_self" class="link link-hover">지원</a></li>
            </ul>
        </div>
        
        <div class="navbar-end mr-auto">
            <a href="https://clab.gwansik.dev/" target="_self" class="btn">회원</a>
        </div>
    </div>
      );
    }
}
export default Header;