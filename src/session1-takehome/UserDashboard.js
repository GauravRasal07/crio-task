import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { fetchUserData } from "../utils/index";
import Card from "react-bootstrap/Card";
import fav from "../images/favicon.png";
import PreLoader from "./Preloader";

const UserDashboard = () => {
  const [user, setUser] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const handleClick = (u_id) => {
    setisLoading(true);
    fetchUserData(u_id)
      .then((res) => {
        // console.log(res.data);

        setUser(res.data.data);
        setisLoading(false);
      })
      .catch((e) => {
        // console.log(e);
        setisLoading(false);
        alert("Failed to fetch user data!");
      });
  };

  useEffect(() => {
    handleClick(1);
  }, []);

  return (
    <div className="user_dashboard">
      <Navbar
        className="py-3"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={fav}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{" "}
            User Dashboard
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="nav_link mx-2 px-4"
                onClick={() => {
                  handleClick(1);
                }}
              >
                One
              </Nav.Link>
              <Nav.Link
                className="nav_link mx-2 px-4"
                onClick={() => {
                  handleClick(2);
                }}
              >
                Two
              </Nav.Link>
              <Nav.Link
                className="nav_link mx-2 px-4"
                onClick={() => {
                  handleClick(3);
                }}
              >
                Three
              </Nav.Link>
              <Nav.Link
                className="nav_link mx-2 px-4"
                onClick={() => {
                  handleClick(100);
                }}
              >
                Hundred
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isLoading ? (
        <PreLoader />
      ) : (
        <div className="dashboard_body text-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.avatar} />
            <Card.Body className="card_body">
              <Card.Title>
                <strong>Name: </strong>
                <p>
                  {user.first_name} {user.last_name}
                </p>
              </Card.Title>
              <Card.Title>
                <strong>Email: </strong>
                <p>{user.email}</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
