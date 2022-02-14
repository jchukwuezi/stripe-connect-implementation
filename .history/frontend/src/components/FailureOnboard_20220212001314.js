import React, {useState} from "react";
import {Container, Row, Col, Card, Button} from 'react-bootstrap'

export const FailureOnBoard = () => {
    <Container>
        <Row className="mt-5">
            <Col lg={5} sm={12} className="p-5 m-auto">
                <Card>
                    <h1>Failure onboarding</h1>
                    <p>Unfortunately, you have been not been successfully authenticated. It is probabably because your redirect link has expired</p>
                    <Button>Attempt Login Again</Button>
                </Card>
            </Col>
        </Row>
    </Container>
}

export default FailureOnBoard;