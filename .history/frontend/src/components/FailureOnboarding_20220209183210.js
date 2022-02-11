import React, {useState} from "react";
import {Container, Row, Col, Card} from 'react-bootstrap'

export const FailureOnBoard = () => {
    <Container>
        <Row className="mt-5">
            <Col lg={5} sm={12} className="p-5 m-auto">
                <Card>
                    <h1>Failure onboarding</h1>
                    <p>Unfortunately, you have been not been successfully authenticated.</p>
                </Card>
            </Col>
        </Row>
    </Container>
}

export default FailureOnBoard;