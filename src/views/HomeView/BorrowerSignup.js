import React from 'react';
import { Modal, ModalBody, Row, Col, Form, Input, FormGroup, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const BorrowerSignup = props => {
    const { isOpen, toggle } = props
    return (
        <Modal className="singin-modal" isOpen={isOpen} toggle={toggle} centered size="xl">
            <ModalBody className="p-0">
                <Row noGutters className="align-items-center">
                    <Col sm={4}>
                        <div className="banner">
                            <h2>Broker Signup</h2>
                            <img src="./assets/images/logo-lg-inverse.png" alt="" />
                        </div>
                    </Col>
                    <Col sm={8}>
                        <Form className="px-4">
                            <Row>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Input type="text" placeholder="First Name" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Input type="text" placeholder="Last Name" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Input type="email" placeholder="Email" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>+91</InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Phone Number" />
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Input type="password" placeholder="Passwoord" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Input type="password" placeholder="Confirm Passwoord" />
                                    </FormGroup>
                                </Col>
                                <Col sm={12}>
                                    <FormGroup>
                                        <Input placeholder="UEN Number - Registered Name of the Compan" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Input type="select" >
                                            <option>Industry - ISIC code</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Input type="select" >
                                            <option>Number of Employees</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Input type="select" >
                                            <option>Annual Turnover</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Input placeholder="Have a Broker Code? If Yes Enter" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <div className="text-center">
                                <Button color="light" className="mr-2">Cancel <i className="fas fa-times-circle ml-2"></i></Button>
                                <Button>Singup <i className="fas fa-edit ml-2"></i></Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    )
}

export default BorrowerSignup;