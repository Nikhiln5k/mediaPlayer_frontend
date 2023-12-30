import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
          <Link to={'/'} style={{textDecoration: "none", color: "white", fontSize: "30px"}}>
            <h3>
              <i class="fa-solid fa-video fa-beat-fade me-3 text-warning"></i>Media Player
            </h3>
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header