import React from 'react'
import { Col, Nav, NavItem, NavLink, Row } from 'reactstrap'
import './NavDefault.css'

function NavDefault() {
    return (
        <>
            <Row className="row-navbar">
                <Col md={6}>
                    <Nav className="justify-content-center" navbar >
                        <NavItem className="navItem">
                            <NavLink href="/#" style={{ color: 'Menu' }}>Início</NavLink>
                        </NavItem>
                    </Nav>
                </Col>
                <Col md={6}>
                    <Nav className="justify-content-end" navbar >
                        <NavItem className="navItem">
                            <NavLink href="/#" style={{ color: 'Menu' }}>Login</NavLink>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
        </>
    )
}

export default NavDefault
