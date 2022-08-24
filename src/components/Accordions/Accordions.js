import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Accordions = () => {
    return (
        <Accordion className="accord" defaultActiveKey="0" flush>
            <Accordion.Item eventKey="1">
                <Accordion.Header style={{ fontSize: '14px' }}> Click For Admin Login</Accordion.Header>
                <Accordion.Body style={{ color: 'whitesmoke', backgroundColor: 'black', opacity: '0.8' }} >
                    username: jayd@cmail.com <br />
                    password: test
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Accordions