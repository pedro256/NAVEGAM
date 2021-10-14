import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import logo from '../../assets/logo.png'
import nothing from '../../assets/nocontent.png'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <Container fluid className="text-center text-md-left">
                <Row className="content-footer">
                    <Col md="3">
                        <h5 className="title">Institucional</h5>
                        <ul className="list-footer">
                            <li className="list-unstyled">
                                Sobre nós
                            </li>

                            <li className="list-unstyled">
                                Termos de uso
                            </li>
                            <li className="list-unstyled">
                                Política de privacidade
                            </li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <h5 className="title">Ajuda</h5>
                        <ul className="list-footer">
                            <li className="list-unstyled">
                                Dúvidas frequentes
                            </li>

                            <li className="list-unstyled">
                                Fale conosco
                            </li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <h5 className="title">Forma de pagamento</h5>
                        <div className="options">
                            <img src={nothing} alt="image1" />
                            <img src={nothing} alt="image2" />
                            <img src={nothing} alt="image3" />
                        </div>
                    </Col>
                    <Col md="3">
                        <h5 className="title">Siga-nos nas redes sociais!</h5>
                        <div className="options">
                            <img src={nothing} alt="image3" />
                            <img src={nothing} alt="image4" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
                <Container fluid className="copyright">
                    <div>
                        <Row className="copyright">
                            <img src={logo} className="logo-footer" alt="logo" />
                        </Row>
                        <Row>
                            &copy; {new Date().getFullYear()} - Soluções em Mobilidade.Todos os direitos reservados
                        </Row>
                    </div>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
