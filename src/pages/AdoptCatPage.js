import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AnimalDetail from '../features/animals/AnimalDetail';
import CatList from '../features/animals/CatList';
import { selectCatById } from '../features/adopt/catSlice';

const AdoptCatPage = () => {
    const [animalId, setAnimalId] = useState(0);
    const selectedAnimal = selectCatById(animalId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CatList setAnimalId = {setAnimalId}/>
                </Col>
                <Col sm='7' md='5'>
                    <AnimalDetail animal={selectedAnimal} />
                </Col>
            </Row>
        </Container>
    );
};

export default AdoptCatPage;
