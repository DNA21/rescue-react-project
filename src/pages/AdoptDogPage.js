import { Container, Row, Col, Button } from 'reactstrap';
import AnimalDetail from '../features/animals/AnimalDetail';
import DogList from '../features/animals/DogList';
import { selectRandomDog } from '../features/adopt/dogSlice';

const AdoptDogPage = () => {
    const selectedAnimal = selectRandomDog();

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <DogList />
                </Col>
                <Col sm='7' md='5'>
                    <AnimalDetail animal={selectedAnimal} />
                </Col>
            </Row>

        </Container>
    );
};

export default AdoptDogPage;
