import React from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'
import { BsPerson } from 'react-icons/bs'

function NavUser() {
    return (
        <>
            <Nav className="nav-items" navbar>
                <NavItem className="navItem">
                    <NavLink href="/#" style={{ color: 'Menu' }}>Passagens</NavLink>
                </NavItem>
                <NavItem className="navItem">
                    <NavLink href="/#" style={{ color: 'Menu' }}>Embarcações</NavLink>
                </NavItem>
            </Nav>
            <Nav className="justify-content-end" style={{ width: "65%", color: '#FFFFFF' }} navbar >

                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="profile-dropdown">
                        <BsPerson size={24} />Celeste Maria
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Perfil
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </>
    )
}

export default NavUser
