import { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import logo from '../../assets/logo.png'
import './Header.css'
import { BsPerson } from "react-icons/bs";

export class Header extends Component {
    state = {
        isOpen: false
    }

    toggle(): void {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div>
                <Navbar className="mnavbar" dark expand="md">
                    <NavbarBrand href="/">
                        <img src={logo} className="logo-header" alt="logo" />
                    </NavbarBrand>
                    <NavbarToggler onClick={() => this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar>
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

                    </Collapse>
                </Navbar>
            </div>
        )
    }
}