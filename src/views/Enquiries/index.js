import React from 'react';
import PageHeader from '../../layout/PageHeader';
import { Container, Button, Row, Col, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const Enquiries = () => {
    return (
        <React.Fragment>
            <PageHeader />
            <section className="p-5 animate-fadeInUp">
                <Container fluid>
                    <div className="d-flex align-items-center  mb-3">
                        <Button className="mr-2"><i className="fas fa-long-arrow-alt-left mr-2" ></i>Back</Button>
                        <h4 className="app-title m-0">Enquiries</h4>
                    </div>
                    <div className="px-5 py-3 shadow rounded bg-white">
                        <div className="p-2 bg-light mb-3 mx-n3">
                            <h6 className="m-0">General Information</h6>
                        </div>
                        <Row>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Directors First Name </Label>
                                    <Input />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Directors Last Name </Label>
                                    <Input />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Company Name </Label>
                                    <Input />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>UEN Number</Label>
                                    <Input />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Industry-ISIC code </Label>
                                    <Input type="select" >
                                        <option>Select</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Number of Employees </Label>
                                    <Input type="select" >
                                        <option>Select</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Annual Turnover </Label>
                                    <Input type="select" >
                                        <option>Select</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <div className="p-2 bg-light mb-3 mx-n3">
                            <h6 className="m-0">Contact Information </h6>
                        </div>
                        <Row className="align-items-end">
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Email </Label>
                                    <Input type="email" placeholder="Enter Email Address" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>+91</InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Phone Number" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <div className="p-2 bg-light mb-3 mx-n3">
                            <h6 className="m-0">Enquiry </h6>
                        </div>
                        <Row>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Enquiry Title </Label>
                                    <Input placeholder="Enter Title " />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8}>
                                <FormGroup>
                                    <Label>Description </Label>
                                    <Input type="textarea" rows={6} placeholder="Enter Description " />
                                </FormGroup>
                            </Col>
                        </Row>
                        <div className="text-right">
                            <Button color="danger" className="mr-3">Cancel <i className="fas fa-times-circle ml-2"></i></Button>
                            <Button color="success">Submit <i className="fas fa-arrow-right ml-2"></i></Button>
                        </div>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Enquiries