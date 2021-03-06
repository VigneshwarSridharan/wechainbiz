import React from 'react';
import PageHeader from '../../layout/PageHeader';
import { Container, Button, Row, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Form, FormFeedback } from 'reactstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useFocusError from '../../utils/useFocusError';
import FormField from '../../components/FormField';
import { EnquiryService } from '../../APIService';
import Swal from 'sweetalert2'

const Enquiries = () => {

    const validationSchema = yup.object({
        first_name: yup.string().required('First Name is a required field'),
        last_name: yup.string().required('Last Name is a required field'),
        company_name: yup.string().required('Company Name is a required field'),
        uen_number: yup.string().required('Uen Number is a required field'),
        ifsc_code: yup.string().required('Ifsc Code is a required field'),
        no_of_employess: yup.string().required('No Of Employess is a required field'),
        annual_tunover: yup.string().required('Annual Tunover is a required field'),
        email: yup.string().required('Email is a required field').email('Enter valid email'),
        mobile_no: yup.string().required('Mobile No is a required field'),
        enquiry_title: yup.string().required('Enquiry Title is a required field'),
        discription: yup.string().required('Discription is a required field')
    })

    const { errors, touched, getFieldProps, handleSubmit, isSubmitting, handleReset, isValidating } = useFormik({
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
        onSubmit: (values, { resetForm }) => {
            EnquiryService.create(values).then(res => {
                console.log({ res })
                Swal.fire(
                    "Done!",
                    res.message,
                    "success"
                )
                resetForm();
            }).catch(err => {
                console.log(err)
            })
        },
        validationSchema,
    })

    useFocusError(errors, isSubmitting, isValidating)

    const fieldProps = name => {
        const isError = errors[name];
        const isTouched = touched[name];
        return {
            ...getFieldProps(name),
            isError,
            isTouched
        }
    }

    return (
        <React.Fragment>
            <PageHeader />
            <section className="p-5 animate-fadeInUp">
                <Container fluid>
                    <div className="d-flex align-items-center  mb-3">
                        <Button className="mr-2"><i className="fas fa-long-arrow-alt-left mr-2" ></i>Back</Button>
                        <h4 className="app-title m-0">Enquiries</h4>
                    </div>
                    <Form className="px-5 py-3 shadow rounded bg-white" onSubmit={handleSubmit} onReset={handleReset}>
                        <div className="p-2 bg-light mb-3 mx-n3">
                            <h6 className="m-0">General Information</h6>
                        </div>
                        <Row>
                            <Col sm={4}>
                                <FormField label="Directors First Name" {...fieldProps('first_name')} />
                            </Col>
                            <Col sm={4}>
                                <FormField label="Directors Last Name" {...fieldProps('last_name')} />
                            </Col>
                            <Col sm={4}>
                                <FormField label="Company Name" {...fieldProps('company_name')} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <FormField label="UEN Number" {...fieldProps('uen_number')} />
                            </Col>
                            <Col sm={4}>
                                <FormField label="Industry-ISIC code" type="select" {...fieldProps('ifsc_code')}>
                                    <option>Select</option>
                                    <option value="321565">321565</option>
                                </FormField>
                            </Col>
                            <Col sm={4}>
                                <FormField label="Number of Employees" type="select" {...fieldProps('no_of_employess')} >
                                    <option>Select</option>
                                    <option value="400">400</option>
                                </FormField>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <FormField label="Annual Turnover" type="select" {...fieldProps('annual_tunover')} >
                                    <option>Select</option>
                                    <option value="25,00,000">25,00,000</option>
                                </FormField>
                            </Col>
                        </Row>
                        <div className="p-2 bg-light mb-3 mx-n3">
                            <h6 className="m-0">Contact Information </h6>
                        </div>
                        <Row className="align-items-end">
                            <Col sm={4}>
                                <FormField label="Email" type="email" placeholder="Enter Email Address"  {...fieldProps('email')} />
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <InputGroup className={Boolean(errors.mobile_no && touched.mobile_no) ? 'is-invalid border-danger' : ''}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>+91</InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Phone Number" {...getFieldProps('mobile_no')} invalid={Boolean(errors.mobile_no && touched.mobile_no)} />
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
                                <FormField label="Enquiry Title" placeholder="Enter Title" {...fieldProps('enquiry_title')} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8}>
                                <FormField label="Description" type="textarea" rows={6} placeholder="Enter Description " {...fieldProps('discription')} />
                            </Col>
                        </Row>
                        <div className="text-right">
                            <Button color="danger" className="mr-3" type="reset">Cancel <i className="fas fa-times-circle ml-2"></i></Button>
                            <Button color="success" type="submit" disabled={isSubmitting}>Submit <i className="fas fa-arrow-right ml-2"></i></Button>
                        </div>
                    </Form>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Enquiries