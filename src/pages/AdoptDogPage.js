import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AnimalDetail from '../features/animals/AnimalDetail';
import DogList from '../features/animals/DogList';
import { selectDogById } from '../features/adopt/dogSlice';

const AdoptDogPage = () => {
    const [animalId, setAnimalId] = useState(0);
    const selectedAnimal = selectDogById(animalId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <DogList setAnimalId = {setAnimalId}/>
                </Col>
                <Col sm='7' md='5'>
                    <AnimalDetail animal={selectedAnimal} />
                </Col>
            </Row>

        </Container>
    );
};

export default AdoptDogPage;
