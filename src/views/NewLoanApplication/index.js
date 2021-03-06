import React, { useState, useMemo, useEffect } from 'react'
import PageHeader from '../../layout/PageHeader'
import { Container, Row, Col, Button, Table } from 'reactstrap'
import SidebarNavigation from '../../layout/SidebarNavigation'
import NewLoanModal from './NewLoanModal'
import { useTable } from 'react-table'
import moment from 'moment'
import { LoanApplicationService, productsService } from "../../APIService";

const NewLoanApplication = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [products, setProducts] = useState([])

    useEffect(() => {
        LoanApplicationService.list().then(res => {
            console.log(res)
        })

        productsService.list().then(res => {
            if (res.success === 1) {
                setProducts(res.data)
            }
        })
    }, [])

    const columns = useMemo(() => ([
        {
            Header: 'Loan ID',
            accessor: 'loanId'
        },
        {
            Header: 'Application Date',
            accessor: 'applicationDate',
            Cell: ({ value }) => {
                return moment(value).format('DD/MM/YYYY')
            }
        },
        {
            Header: 'Product',
            accessor: 'product'
        },
        {
            Header: 'Lender Name',
            accessor: 'lenderName'
        },
        {
            Header: 'Loan Amount($)',
            accessor: 'loanAmount'
        },
        {
            Header: 'Loan Tenor',
            accessor: 'loanTenor'
        },
        {
            Header: 'Pending Status',
            accessor: 'pendingStatus'
        },
        {
            Header: 'Status',
            accessor: 'status'
        },
        {
            Header: 'Action',
            // accessor: 'action',
            Cell: (columnProps) => {
                return (
                    <div>A</div>
                )
            }
        },
    ]), [])

    const data = useMemo(() => [], [])
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    return (
        <React.Fragment>
            <PageHeader />
            <section className="py-5 animate-fadeInUp">
                <Container fluid>
                    <h4 className="app-title mb-4"><span>New Loan</span> Application</h4>
                    <Row>
                        <Col sm={3}>
                            <SidebarNavigation />
                        </Col>
                        <Col sm={9}>
                            <div className="shadow-sm bg-white rounded h-100 p-3">
                                <div className="text-right mb-3">
                                    <Button color="success" onClick={() => setIsOpen(!isOpen)}>New Loan Application <i className="fas fa-plus-circle ml-2"></i></Button>
                                </div>
                                <Table className="app-table" {...getTableProps()}>
                                    <thead>
                                        {headerGroups.map(headerGroup => {
                                            return (
                                                <tr {...headerGroup.getHeaderGroupProps()}>
                                                    {
                                                        headerGroup.headers.map(column => {
                                                            return (
                                                                <th {...column.getHeaderProps()}>
                                                                    {column.render('Header')}
                                                                </th>
                                                            )
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })}
                                    </thead>
                                    <tbody {...getTableBodyProps()}>
                                        {
                                            rows.map((row, i) => {
                                                prepareRow(row)
                                                return (
                                                    <tr {...row.getRowProps()}>
                                                        {row.cells.map(cell => {
                                                            return (
                                                                <td {...cell.getCellProps()}>
                                                                    {cell.render('Cell')}
                                                                </td>
                                                            )
                                                        })}
                                                    </tr>
                                                )
                                            })
                                        }
                                        {
                                            rows.length === 0 && (
                                                <tr>
                                                    <td colSpan="9" ><div className="no-data">No Records Found</div></td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {isOpen && <NewLoanModal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} products={products} />}
        </React.Fragment>
    )
}


export default NewLoanApplication;