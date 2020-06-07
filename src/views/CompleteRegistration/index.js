import React from 'react';
import PageHeader from '../../layout/PageHeader';
import { Container, Button } from 'reactstrap';

const CompleteRegistration = () => {
    return (
        <React.Fragment>
            <PageHeader />
            <section className="py-5">
                <Container fluid>
                    <div className="d-flex">
                        <Button>Back</Button>
                        <h4 className="app-title"><span>Complete</span> Registration</h4>
                        <Row></Row>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default CompleteRegistration