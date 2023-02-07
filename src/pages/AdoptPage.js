import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AnimalDetail from '../features/animals/AnimalDetail';
import AnimalList from '../features/animals/AnimalList';
import { selectAnimalById } from '../features/animals/animalSlice';

const AdoptPage = () => {
    const [animalId, setAnimalId] = useState(0);
    const selectedAnimal = selectAnimalById(animalId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <AnimalList setAnimalId = {setAnimalId}/>
                </Col>
                <Col sm='7' md='5'>
                    <AnimalDetail animal={selectedAnimal} />
                </Col>
            </Row>
        </Container>
    );
};

export default AdoptPage;
