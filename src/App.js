// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
    from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Route,
  Routes, Link } from "react-router-dom";

// Import other React Component
import CreateTask from
  "./Components/create-task.component";
import TaskList from
  "./Components/task-list.component";

// App Component
const App = () => {
return (
  <Router>
  <div className="App">
    <header className="App-header">
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>
        <Link to={"/task-list"}
        className="nav-link">
        React Task Board App
        </Link>
      </Navbar.Brand>

      <Nav className="justify-content-end">
        <Nav>
        <Link to={"/create-task"}
          className="nav-link">
          Create Task
        </Link>
        </Nav>

        <Nav>
        <Link to={"/task-list"}
          className="nav-link">
          Task List
        </Link>
        </Nav>
      </Nav>
      </Container>
    </Navbar>
    </header>

    <Container>
    <Row>
      <Col md={12}>
      <div className="wrapper">
        <Routes>
        <Route exact path="/"
          element={<TaskList/>} />
        <Route path="/create-task"
          element={<CreateTask/>} />
        <Route path="/task-list"
          element={<TaskList/>} />
        </Routes>
      </div>
      </Col>
    </Row>
    </Container>
  </div>
  </Router>
);
};

export default App;
