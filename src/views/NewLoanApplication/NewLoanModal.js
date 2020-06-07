import React from 'react'
import { Modal, ModalHeader, ModalBody, FormGroup, Input, Label, ModalFooter, Button } from 'reactstrap'

const NewLoanModal = props => {
    return (
        <Modal {...props} centered>
            <ModalHeader toggle={props.toggle} className="bg-primary text-white">
                New Loan Application
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label>Choose Financing Product</Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>Invoice Financing </Label>
                    <Input type="textarea" />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" className="mr-2">Cancel <i className="fas fa-times-circle ml-2"></i></Button>
                <Button color="success">Select <i className="fas fa-edit ml-2"></i></Button>
            </ModalFooter>
        </Modal>
    )
}

export default NewLoanModal