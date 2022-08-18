import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Accordions = () => {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header > Recruiters use this Login</Accordion.Header>
                <Accordion.Body style={{ color: 'whitesmoke', backgroundColor: 'black', opacity: '0.8' }}>
                    username: jays@cmail.com <br />
                    password: test
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Admin Login</Accordion.Header>
                <Accordion.Body style={{ color: 'whitesmoke', backgroundColor: 'black', opacity: '0.8' }} >
                    username: jayd@cmail.com <br />
                    password: test
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Accordions