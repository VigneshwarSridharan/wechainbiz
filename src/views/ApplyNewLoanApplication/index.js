import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PageHeader from '../../layout/PageHeader';
import { productsService } from '../../APIService';
import { useHistory } from 'react-router-dom';
import useFocusError from '../../utils/useFocusError';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormField from '../../components/FormField';
import { numberOfEmployees } from '../../constants/DefaultOptions';
import './apply-new-loan-application.scss';

const ApplyNewLoanApplication = ({ match }) => {
    let { product } = match.params;

    let [productName, setProductName] = useState('')

    let loanItem = {
        "financier": "",
        "facilityType": "",
        "limit": "",
        "outstandingAmount": "",
        "monthlyInstallment": "",
        "tenor": "",
        "startDate": "",
        "endDate": "",
        "security": "",
        "latestValueOfSecurity": "",
    }

    let [existingLoans, setExistingLoans] = useState([loanItem])

    let addLoan = () => setExistingLoans([
        ...existingLoans, loanItem
    ])

    let removeLoan = inx => {
        existingLoans.splice(inx);
        setExistingLoans([...existingLoans])
    }

    let history = useHistory()

    const validationSchema = yup.object({
        "uenNumber": yup.string().required('Uen number is a required field.'),
        "companyName": yup.string().required('Company name is a required field.'),
        "numberOfEmployees": yup.string().required('Number of employees is a required field.'),
        "businessType": yup.string().required('Business type is a required field.'),
        "product": yup.string().required('Product is a required field.'),
        "preferredTenor": yup.string().required('Preferred tenor is a required field.'),
        "expectedLoanAmount": yup.string().required('Expected loan amount is a required field.'),
        "collaterals": yup.string().required('Collaterals is a required field.'),
        "industryType": yup.string().required('Industry type is a required field.'),
        "averageMonthlyBalance": yup.string().required('Average monthly balance is a required field.'),
        "businessCharacteristics": yup.string().required('Business characteristics is a required field.'),
        "directorsTotalAnnualIncome": yup.string().required('Directors total annual income is a required field.'),
        "customerTypes": yup.string().required('Customer types is a required field.'),
        "incorporationDate": yup.string().required('Incorporation date is a required field.'),
        "lenderWishlist": yup.string().required('Lender wishlist is a required field.'),
        "howHaveYouHeardOfUs": yup.string().required('How have you heard of us is a required field.'),
        "financialReports": yup.string().required('Financial reports is a required field.'),
        "existingLoans": yup.string().required('Existing loans is a required field.'),
    })

    const { errors, touched, getFieldProps, handleSubmit, isSubmitting, handleReset, isValidating } = useFormik({
        initialValues: {
            "uenNumber": "",
            "companyName": "",
            "numberOfEmployees": "",
            "businessType": "",
            "product": "",
            "preferredTenor": "",
            "expectedLoanAmount": "",
            "collaterals": "",
            "industryType": "",
            "averageMonthlyBalance": "",
            "businessCharacteristics": "",
            "directorsTotalAnnualIncome": "",
            "customerTypes": "",
            "incorporationDate": "",
            "lenderWishlist": "",
            "howHaveYouHeardOfUs": "",
            "financialReports": "",
            "existingLoans": "",
        },
        onSubmit: (values, { resetForm }) => {

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

    useEffect(() => {
        productsService.find(product).then(res => {
            if (res.success === 1) {
                setProductName(res.data.name)
            }
        })
    }, []) // eslint-disable-line
    return (
        <React.Fragment>
            <PageHeader />
            <section className="p-5 animate-fadeInUp">
                <Container fluid>
                    <div className="d-flex align-items-center  mb-3">
                        <Button className="mr-2" onClick={() => history.push('/new-loan')}><i className="fas fa-long-arrow-alt-left mr-2" ></i>Back</Button>
                        <h4 className="app-title m-0"><span>New Loan Application</span> - {productName}</h4>
                    </div>
                    <Form className="px-5 py-3 shadow rounded bg-white" onSubmit={handleSubmit} onReset={handleReset}>
                        <div className="p-2 bg-light mb-3 mx-n3">
                            <h6 className="m-0">General Information</h6>
                        </div>

                        <Row>
                            <Col sm={4}>
                                <FormField label="Uen Number" {...fieldProps('uenNumber')} />
                            </Col>
                            <Col sm={4}>
                                <FormField label="Company Name" {...fieldProps('companyName')} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <FormField label="Number Of Employees" type="select" {...fieldProps('numberOfEmployees')}>
                                    <option>Select</option>
                                    {
                                        numberOfEmployees.map((option, inx) => {
                                            return (
                                                <option value={option} key={inx}>{option}</option>
                                            )
                                        })
                                    }
                                </FormField>
                            </Col>
                            <Col sm={4}>
                                <FormField label="Business Type" {...fieldProps('businessType')} />
                            </Col>
                            <Col sm={4}>
                                <FormField label="Product" {...fieldProps('product')} />
                            </Col>
                            <Col sm={4}>
                                <FormField label="Preferred Tenor" {...fieldProps('preferredTenor')} />
                            </Col>
                            <Col sm={4}>
                                <FormField label="Expected Loan Amount" {...fieldProps('expectedLoanAmount')} />
                            </Col>
                            <Col sm={4}>
                                <FormField label="Collaterals" {...fieldProps('collaterals')} />
                            </Col>
                        </Row>
                        <div className="p-2 bg-light mb-3 mx-n3">
                            <h6 className="m-0">Organisation Information</h6>
                        </div>
                        <Row>
                            <Col sm={4}>
                                <FormField label="Industry Type" {...fieldProps('industryType')} />
                            </Col>
                            <Col sm={4}>
                                <FormField label="Average Monthly Balance" {...fieldProps('averageMonthlyBalance')} />
                            </Col>
                            <Col sm={4}>
                                <FormField label="Business Characteristics" {...fieldProps('businessCharacteristics')} />
                            </Col>
                            <Col sm={4}>
                                <FormField label="Directors Total Annual Income" {...fieldProps('directorsTotalAnnualIncome')} />
                            </Col>
                        </Row>
                        <FormGroup>
                            <label>Latest 2 years Financial Reports</label>
                            <div className="d-flex p-3 bg-light-info align-items-center rounded">
                                <Row noGutters>
                                    <Col className="px-1" sm={4}>
                                        <FormGroup>
                                            <Label>Year</Label>
                                            <Input />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-1" sm={4}>
                                        <FormGroup>
                                            <Label>Revenue</Label>
                                            <Input />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-1" sm={4}>
                                        <FormGroup>
                                            <Label>Profit</Label>
                                            <Input />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-1" sm={4}>
                                        <FormGroup>
                                            <Label>Year</Label>
                                            <Input />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-1" sm={4}>
                                        <FormGroup>
                                            <Label>Revenue</Label>
                                            <Input />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-1" sm={4}>
                                        <FormGroup>
                                            <Label>Profit</Label>
                                            <Input />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <div className="h5 m-0 px-3">(Or)</div>
                                <div className="border-dashed p-5 py-3 text-center">
                                    <label className="mb-3">Upload Financial Reports</label>
                                    <Button color="info">Choose File <i className="fas fa-upload"></i> </Button>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup className="m-0">
                            <Label>Existing Loans (If Any) </Label>
                            {
                                existingLoans.map((loan, inx) => {
                                    return (
                                        <div className="d-flex align-items-center mb-3" key={inx}>
                                            <div className="p-3 bg-light-info rounded" key={inx}>
                                                <Row noGutters>
                                                    <Col className="px-1" sm={3}>
                                                        <FormGroup>
                                                            <Label>Financier</Label>
                                                            <Input />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="px-1" sm={3}>
                                                        <FormGroup>
                                                            <Label>Facility Type</Label>
                                                            <Input />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="px-1" sm={3}>
                                                        <FormGroup>
                                                            <Label>Limit</Label>
                                                            <Input />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="px-1" sm={3}>
                                                        <FormGroup>
                                                            <Label>Outstanding Amount</Label>
                                                            <Input />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="px-1" sm={3}>
                                                        <FormGroup>
                                                            <Label>Monthly Installment</Label>
                                                            <Input />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="px-1" sm={3}>
                                                        <FormGroup>
                                                            <Label>Tenor</Label>
                                                            <Input />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="px-1" sm={3}>
                                                        <FormGroup>
                                                            <Label>Start Date</Label>
                                                            <Input />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="px-1" sm={3}>
                                                        <FormGroup>
                                                            <Label>End Date</Label>
                                                            <Input />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="px-1" sm={3}>
                                                        <FormGroup>
                                                            <Label>Security</Label>
                                                            <Input />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col className="px-1" sm={3}>
                                                        <FormGroup>
                                                            <Label>Latest Value Of Security</Label>
                                                            <Input />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </div>
                                            {
                                                inx === existingLoans.length - 1 ? (
                                                    <Button color="success" className="mx-2 text-nowrap" onClick={addLoan}>Add <i className="fas fa-plus-circle"></i> </Button>
                                                ) : (
                                                        <Button color="danger" className="mx-2 text-nowrap" onClick={() => removeLoan(inx)}>Remove <i className="fas fa-minus-circle"></i> </Button>
                                                    )
                                            }
                                        </div>
                                    )
                                })
                            }
                        </FormGroup>
                    </Form>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default ApplyNewLoanApplication