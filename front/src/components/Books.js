// Movies.js
import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Books() {
  
      const [books, setBooks] = useState([]);

      useEffect(() => {
          fetch('https://me.ethioprogrammers.com/books')
            .then(response => response.json())
            .then(data => setBooks(data));
        }, []);
  return (
    <div>
          <Navbar></Navbar>    
          <button type="button" class="btn btn-secondary "><a href='/newbook'>add New Movie</a></button>

          <section class="hero-section">
          <div class="container d-flex align-items-center justify-content-center fs-1 text-white flex-column">
          {/* <button type="button" class="btn btn-secondary "><a href='/newMovie'>add New Movie</a></button> */}
      
            <table id="example" class="table table-striped" >
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Rate</th>
                  <th>Year</th>
              </tr>
          
                </thead>
                <tbody>
                {books.map((book, index)=>(
                  <tr key={index}>
                      <td>{book.ID}</td>
                      <td>{book.Title}</td>
                      <td>{book.Genre}</td>
                      <td>{book.Rate}</td>
                      <td>{book.Year}</td>
                  </tr>
              ))}

                    </tbody>
             </table>
          </div>
      </section>      
    
          <table class="table  table-striped table-bordered">
              <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Rate /10</th>
                  <th>Date</th>
              </tr>
          
              {books.map((book, index)=>(
                  <tr key={index}>
                      <td>{book.ID}</td>
                      <td>{book.Genre}</td>
                      <td>{book.Title}</td>
                      <td>{book.Rate}</td>
                      <td>{book.Date}</td>
                  </tr>
              ))}

          </table>
          {/* <p>{movies}</p> */}
      </div>
  );
}

export default Books;
