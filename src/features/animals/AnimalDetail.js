import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const AnimalDetail = ( {animal} ) => {
    const { image, name, background } = animal;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{background}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default AnimalDetail;
