import { Container, Row, Col, Table } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='bg-dark text-white pt-5 pb-5'>
            <Container className='text-center text-md-left'>
                <Row className='text-center text-md-left mb-4'>

                    <Col className='md-4 mx-auto'>
                        <h5 className='text-uppercase font-weight-bold text-warning'>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, error maxime. Facere voluptatum dolorum voluptates odit nostrum distinctio alias laboriosam commodi enim, neque eos accusamus cupiditate tempore quas, rem magni!</p>
                    </Col>

                    <Col className='md-4 mx-auto text-center'>
                        <h5 className='text-uppercase font-weight-bold text-warning'>links</h5>
                        <p><a href='' className='text-white'>Adopt</a></p>
                        <p><a href='' className='text-white'>Volunteer</a></p>
                        <p><a href='' className='text-white'>About Us</a></p>
                        <p><a href='' className='text-white'>Contact Us</a></p>
                    </Col>

                    <Col className='md-4 mx-auto'>
                        <h5 className='text-uppercase font-weight-bold text-warning'>Where to find us</h5>
                        <Table borderless className='text-white'>
                            <tr>
                                <td>
                                    <i className='fa fa-home ml-3'></i>
                                </td>
                                <td className='text-start'>
                                    123 Main Street <br />Bloomfield Hills, MI 48302
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className='fa fa-phone'></i>
                                </td>
                                <td className='text-start'>
                                    (555) 555-5555
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className='fa fa-envelope'></i>
                                </td>
                                <td className='text-start'>
                                    rescue@rescue.com
                                </td>
                            </tr>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className='list-unstyled list-inline text-center'>
                            <li className='list-inline-item'><i className='fa fa-facebook fa-lg'></i></li>
                            <li className='list-inline-item'><i className='fa fa-instagram fa-lg'></i></li>
                            <li className='list-inline-item'><i className='fa fa-twitter fa-lg'></i></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
