// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Form from './Component/Form';
import ToDoList from './ToDoList';

function Headersection() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Sushma G.
          </h1>
          <p className="mb-8 leading-relaxed">
            i am sushma G.i am final year BE student.stream ECE.
            i have a knowledge of c,java,python,SQL.
          </p>
        </div>
        </div>
    </section>
  );
}


  function About() {
    return (
      <div>
        Skills:
        java ,c,python
      </div>
    ); 
  }
  function Contact() {
    return (
      <div>
        contact;432312233
      </div>
    )
  }

    function Footersection() {
      return (
        <div>
          Certification:
          Q spider
        </div>
      );
    }
    function NavBar() {
      return (
          <div>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/teams">Teams</Link>
              <Link to="/add-student">Add-student</Link>
              <Link to="/to do list">To do list</Link>

          </div>
      );
  }
  function Teams() {
    return (
      <div>
        <h1>our team members</h1>
        sushma
        deepa
        paddu
        joshi
      </div>
    )
  }
    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <BrowserRouter>
            <NavBar />
            <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/teams" element={<Teams />}></Route>
            <Route path="/add-student" element={<Form />}></Route>
            <Route path="/to do list" element={<ToDoList />}></Route>
            
            </Routes>
            </BrowserRouter>
          </header>
        </div>
      );
    }
    export default App;
