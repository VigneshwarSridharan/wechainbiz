import React from 'react';
import PageHeader from '../../layout/PageHeader';
import { Container, Button, Row, Col, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Form, FormFeedback } from 'reactstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Enquiries = () => {

    const validationSchema = yup.object({
        first_name: yup.string().required('First Name is a required field'),
        last_name: yup.string().required('Last Name is a required field'),
        company_name: yup.string().required('Company Name is a required field'),
        uen_number: yup.string().required('Uen Number is a required field'),
        ifsc_code: yup.string().required('Ifsc Code is a required field'),
        no_of_employess: yup.string().required('No Of Employess is a required field'),
        annual_tunover: yup.string().required('Annual Tunover is a required field'),
        email: yup.string().required('Email is a required field'),
        mobile_no: yup.string().required('Mobile No is a required field'),
        enquiry_title: yup.string().required('Enquiry Title is a required field'),
        discription: yup.string().required('Discription is a required field')
    })

    const { errors, touched, getFieldProps, handleSubmit } = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            company_name: '',
            uen_number: '',
            ifsc_code: '',
            no_of_employess: '',
            annual_tunover: '',
            email: '',
            mobile_no: '',
            enquiry_title: '',
            discription: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema
    })

    return (
        <React.Fragment>
            <PageHeader />
            <section className="p-5 animate-fadeInUp">
                <Container fluid>
                    <div className="d-flex align-items-center  mb-3">
                        <Button className="mr-2"><i className="fas fa-long-arrow-alt-left mr-2" ></i>Back</Button>
                        <h4 className="app-title m-0">Enquiries</h4>
                    </div>
                    <Form className="px-5 py-3 shadow rounded bg-white" onSubmit={handleSubmit}>
                        <div className="p-2 bg-light mb-3 mx-n3">
                            <h6 className="m-0">General Information</h6>
                        </div>
                        <Row>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Directors First Name </Label>
                                    <Input {...getFieldProps('first_name')} invalid={Boolean(errors.first_name && touched.first_name)} />
                                    {errors.first_name && touched.first_name && <FormFeedback valid={false} >{errors.first_name}</FormFeedback>}
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Directors Last Name </Label>
                                    <Input {...getFieldProps('last_name')} invalid={Boolean(errors.last_name && touched.last_name)} />
                                    {errors.last_name && touched.last_name && <FormFeedback valid={false} >{errors.last_name}</FormFeedback>}
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Company Name </Label>
                                    <Input {...getFieldProps('company_name')} invalid={Boolean(errors.company_name && touched.company_name)} />
                                    {errors.company_name && touched.company_name && <FormFeedback valid={false} >{errors.company_name}</FormFeedback>}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>UEN Number</Label>
                                    <Input {...getFieldProps('uen_number')} invalid={Boolean(errors.uen_number && touched.uen_number)} />
                                    {errors.uen_number && touched.uen_number && <FormFeedback valid={false} >{errors.uen_number}</FormFeedback>}
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Industry-ISIC code </Label>
                                    <Input type="select" {...getFieldProps('ifsc_code')} invalid={Boolean(errors.ifsc_code && touched.ifsc_code)} >
                                        <option>Select</option>
                                        <option value="value1">value1</option>
                                    </Input>
                                    {errors.ifsc_code && touched.ifsc_code && <FormFeedback valid={false} >{errors.ifsc_code}</FormFeedback>}
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Number of Employees </Label>
                                    <Input type="select" {...getFieldProps('no_of_employess')} invalid={Boolean(errors.no_of_employess && touched.no_of_employess)} >
                                        <option>Select</option>
                                        <option value="value1">value1</option>
                                    </Input>
                                    {errors.no_of_employess && touched.no_of_employess && <FormFeedback valid={false} >{errors.no_of_employess}</FormFeedback>}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label>Annual Turnover </Label>
                                    <Input type="select" {...getFieldProps('annual_tunover')} invalid={Boolean(errors.annual_tunover && touched.annual_tunover)} >
                                        <option>Select</option>
                                        <option value="value1">value1</option>
                                    </Input>
                                    {errors.annual_tunover && touched.annual_tunover && <FormFeedback valid={false} >{errors.annual_tunover}</FormFeedback>}
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
                                    <Input type="email" placeholder="Enter Email Address" {...getFieldProps('email')} invalid={Boolean(errors.email && touched.email)} />
                                    {errors.email && touched.email && <FormFeedback valid={false} >{errors.email}</FormFeedback>}
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <InputGroup className={Boolean(errors.mobile_no && touched.mobile_no) ? 'is-invalid border-danger' : ''}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>+91</InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Phone Number" {...getFieldProps('mobile_no')} invalid={Boolean(errors.mobile_no && touched.mobile_no)}/>
                                    </InputGroup>
                                    {errors.mobile_no && touched.mobile_no && <FormFeedback valid={false} >{errors.mobile_no}</FormFeedback>}
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
                                    <Input placeholder="Enter Title" {...getFieldProps('enquiry_title')} invalid={Boolean(errors.enquiry_title && touched.enquiry_title)} />
                                    {errors.enquiry_title && touched.enquiry_title && <FormFeedback valid={false} >{errors.enquiry_title}</FormFeedback>}

                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8}>
                                <FormGroup>
                                    <Label>Description </Label>
                                    <Input type="textarea" rows={6} placeholder="Enter Description " {...getFieldProps('discription')} invalid={Boolean(errors.discription && touched.discription)} />
                                    {errors.discription && touched.discription && <FormFeedback valid={false} >{errors.discription}</FormFeedback>}
                                </FormGroup>
                            </Col>
                        </Row>
                        <div className="text-right">
                            <Button color="danger" className="mr-3">Cancel <i className="fas fa-times-circle ml-2"></i></Button>
                            <Button color="success" type="submit">Submit <i className="fas fa-arrow-right ml-2"></i></Button>
                        </div>
                    </Form>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Enquiries