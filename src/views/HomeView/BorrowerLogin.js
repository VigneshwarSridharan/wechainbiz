import React from 'react';
import { Modal, ModalBody, Row, Col, Form, Input, FormGroup, Button, CustomInput } from 'reactstrap';

const BorrowerLogin = props => {
    const { isOpen, toggle } = props
    return (
        <Modal className="singin-modal" isOpen={isOpen} toggle={toggle} centered size="xl">
            <ModalBody className="p-0">
                <Row noGutters className="align-items-center">
                    <Col sm={6}>
                        <div className="banner">
                            <h2>Borrower Login</h2>
                            <img src="./assets/images/logo-lg-inverse.png" alt="" />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="px-4">
                            <Form className="mb-5">
                                <FormGroup>
                                    <Input type="email" placeholder="Email" />
                                </FormGroup>
                                <FormGroup className="mb-4">
                                    <Input type="password" placeholder="Password" />
                                </FormGroup>
                                <FormGroup className="d-flex justify-content-between mb-4">
                                    <CustomInput type="checkbox" id="rememberMe" label="Remember me" />
                                    <div>Forgot Password?</div>
                                </FormGroup>
                                <Button color="secondary" block>Login <i className="fas fa-sign-in-alt ml-2"></i></Button>
                            </Form>
                            <p className="text-center">New to Wechainbiz ?   <span className="anchor">Sign up</span> </p>
                        </div>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    )
}

export default BorrowerLogin;