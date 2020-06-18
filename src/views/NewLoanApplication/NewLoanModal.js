import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, FormGroup, Input, Label, ModalFooter, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom';

const NewLoanModal = ({ products, ...restProps }) => {

    const [defaultProduct = {}] = products;
    const [selectedProduct, setSelectedProduct] = useState(defaultProduct.id || '')

    const [name, setName] = useState(defaultProduct.name || '')
    const [description, setDescription] = useState(defaultProduct.description || '')

    const handleOnChange = ({ target }) => {
        setSelectedProduct(target.value);
        let option = products.find(f => f.id === Number(target.value)) || {};
        setName(option.name)
        setDescription(option.description)
    }

    const history = useHistory();

    if (products.length === 0) return '';
    return (
        <Modal {...restProps} centered tag="form">
            <ModalHeader toggle={restProps.toggle} className="bg-info text-white">
                New Loan Application
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label>Choose Financing Product</Label>
                    <Input type="select" value={selectedProduct} onChange={handleOnChange}>
                        {
                            products.map((product, inx) => {
                                return (
                                    <option value={product.id} key={inx} >{product.name}</option>
                                )
                            })
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>{name} </Label>
                    <textarea className="form-control" disabled={true} rows={6} value={description || ''} onChange={null}></textarea>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" className="mr-2">Cancel <i className="fas fa-times-circle ml-2"></i></Button>
                <Button color="success" onClick={() => history.push('/new-loan/' + selectedProduct)}>Select <i className="fas fa-edit ml-2"></i></Button>
            </ModalFooter>
        </Modal>
    )
}

export default NewLoanModal