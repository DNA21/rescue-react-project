import { Container, Col, Row } from "reactstrap";


const ContactPage = () => {
    return (
        <Container>
            <Row>
                <Col xs='12'>
                    <h2>Contact Us</h2>
                    <hr />
                </Col>
            </Row>
            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                        123 Main Street
                        <br />
                        Bloomfield Hills, MI 48302
                    </address>
                </Col>
                <Col>
                <a
                    role='button'
                    className='btn btn-link'
                    href='tel:+15555555555'
                >
                    <i className='fa fa-phone' />(555) 555-5555
                </a>
                <br />
                <a
                    role='button'
                    className='btn btn-link'
                    href='mailto:rescue@rescue.com'
                >
                    <i className='fa fa-envelope-o' /> rescue@rescue.com
                </a>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Contact Us</h2>
                    <hr />
                </Col>
                <Col md='10'>Contact Form</Col>
            </Row>
        </Container>
    )
};

export default ContactPage;
