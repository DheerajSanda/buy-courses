import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Coursesales from './Coursesales.js';

class App extends Component {
  render() {
    var courses = [
      { name: 'Complete iOS10', price: 199 },
      { name: 'Complete pentesting', price: 299 },
      { name: 'Complete front end dev course', price: 180 },
      { name: 'Bug Bounty and web app pentesting', price: 190 },
    ]
    return (
      <div className="App">
        <Navbar/>


        <Header />


        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-preview">

                <Coursesales items={courses}/>

              </div>

              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
                  </h2>
                </a>
                <p className="post-meta">Posted by
                  <a href="#">Start Bootstrap</a>
                  on September 18, 2017</p>
              </div>

              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    Science has not yet mastered prophecy
                  </h2>
                  <h3 className="post-subtitle">
                    We predict too much for the next year and yet far too little for the next ten.
                  </h3>
                </a>
                <p className="post-meta">Posted by
                  <a href="#">Start Bootstrap</a>
                  on August 24, 2017</p>
              </div>

              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    Failure is not an option
                  </h2>
                  <h3 className="post-subtitle">
                    Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                  </h3>
                </a>
                <p className="post-meta">Posted by
                  <a href="#">Start Bootstrap</a>
                  on July 8, 2017</p>
              </div>


              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
              </div>
            </div>
          </div>
        </div>


        <Footer />


      </div>
    );
  }
}

export default App;
