import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'reactstrap';
import './Profile.css'
import nocontent from '../../assets/nocontent.png'

function Profile() {
    return (
        <>
            <Container className="profile-container" >
                <Row className="profile-row">
                    <div className="profile-header">
                        <h1>Meu Perfil</h1>
                    </div>
                    <Card className="profile-body">
                        <Form>
                            <Row className="row-profile">
                                <Col md={6}>
                                    <label className="label-title">
                                        DADOS DA CONTA
                                    </label>
                                    <Row>
                                        <Col md={8}>
                                            <div className="input">
                                                <label>Email</label>
                                                <input type="text" placeholder="celestemaria@email.com"></input>
                                            </div>

                                        </Col>
                                        <Col md={4} >

                                            <Button className="single-btn-action">Alterar senha</Button>

                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6} className="col-profile-img-user">
                                    <div className="actions">
                                        <div className="margin-right-10">
                                            <img alt="profile" src={nocontent} className="user-img-profile" title="Foto de Perfil"></img>
                                            <h5>Foto de Perfil</h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col md={12}>
                                    <label className="label-title">
                                        DADOS PESSOAIS
                                    </label>
                                </Col>
                                <Col md={8}>
                                    <div className="input">
                                        <label>Nome Completo</label>
                                        <input type="text" placeholder="Celeste Maria Soares do Carmo"></input>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="input">
                                        <label>Nacionalidade</label>
                                        <select>
                                            <option>Brasileira</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="row-profile">
                                <Col md={3}>
                                    <div className="input">
                                        <label>RG</label>
                                        <input type="tel" placeholder="1234567-8"></input>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="input">
                                        <label>CPF</label>
                                        <select>
                                            <option>Brasileira</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="input">
                                        <label>Gênero</label>
                                        <select>
                                            <option>Feminino</option>
                                            <option>Masculino</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="input">
                                        <label>Data de nascimento</label>
                                        <input type="date" />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="row-profile">
                                <Col md={1}>
                                    <div className="input">
                                        <label>DDD</label>
                                        <input type="number" className="w80" placeholder="(92)" />
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="input">
                                        <label>Celular</label>
                                        <input type="number" placeholder="9999-9999" />
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <div className="actions">
                                        <div>
                                            <Button className="btn-action btn-neutro">Cancelar</Button>
                                            <Button className="btn-action btn-primary">Salvar alterações</Button>
                                        </div>

                                    </div>
                                </Col>
                            </Row>

                        </Form>
                    </Card>
                </Row>
            </Container>

        </>
    )
}

export default Profile
