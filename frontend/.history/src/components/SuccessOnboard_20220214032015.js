import React, {useState} from "react";
import {Container, Row, Col, Card} from 'react-bootstrap'

export const SuccessOnBoard = () => {
    return(
        <Container>
            <Row className="mt-5">
                <Col lg={5} sm={12} className="p-5 m-auto">
                    <Card>
                        <h1>Successful onboarding!</h1>
                        <p>Congratulations, you have successfully been authenticated!</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SuccessOnBoard;