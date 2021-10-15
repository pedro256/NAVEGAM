import { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
} from 'reactstrap';
import NavUser from "./NavUser";
import NavDefault from "./NavDefault";
import logo from '../../assets/logo-dark.svg'
import './Header.css'

export class Header extends Component {
    state = {
        isOpen: false,
        logged: false
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
                        {
                            this.state.logged ? <NavUser /> : <NavDefault />
                        }
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}