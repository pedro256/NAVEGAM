import React from 'react'
import { Button, Card, Col, Container, Input, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaRegEyeSlash } from 'react-icons/fa'
import logo from '../../assets/logo-dark.svg'
import './Login.css'

function Login() {
    return (
        <div className="login-body">
            <Container className="login-container">
                <Row className="row-login">
                    <div className="login-title">
                        <h1>Faça seu login para continuar.</h1>
                    </div>
                    <Card className="card-login">
                        <div className="logo">
                            <img src={logo} alt=" LOGO" />
                        </div>
                        <div className="input-card">
                            <Input type="email" className="input" placeholder="Login" />
                            <BsFillPersonFill size={30} className="ico" />
                        </div>
                        <div className="input-card">
                            <Input type="password" className="input" placeholder="Senha" />
                            <FaRegEyeSlash size={30} className="ico" />
                        </div>
                        <Row className="login-button-group">
                            <Col md={6} sm={6} className="button-col">
                                <Button className="mbutton-register">CADASTRAR</Button>
                            </Col>
                            <Col md={6} sm={6} className="button-col">
                                <Button className="mbutton-signin">ENTRAR</Button>
                            </Col>
                        </Row>
                        <Row className="row-forgot-password">
                            <Link to="#">Esqueci minha senha</Link>
                        </Row>

                    </Card>
                </Row>

            </Container>
        </div>
    )
}

export default Login
