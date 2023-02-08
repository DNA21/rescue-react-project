import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AnimalDetail from '../features/animals/AnimalDetail';
import AnimalList from '../features/animals/AnimalList';
import { selectAllAnimals, selectAnimalById, } from '../features/animals/animalSlice';
import Buttons from '../components/Button';

const AdoptPage = () => {
    const [animalId, setAnimalId] = useState(0);
    const selectedAnimal = useSelector(selectAnimalById(animalId));
    const allAnimals = useSelector(selectAllAnimals);

    const [menuItem, setMenuItem] = useState(allAnimals);

    const filter = (button) => {
        const filteredAnimals = allAnimals.filter(animal => animal.animal === button);
        setMenuItem(filteredAnimals);
    };

    return (
        <Container>
            <Buttons filter={filter} />
            <Row>
                <Col sm='5' md='7'>
                    <AnimalList menuItem={menuItem} setAnimalId = {setAnimalId} />
                </Col>
                <Col sm='7' md='5'>
                    <AnimalDetail animal={selectedAnimal} />
                </Col>
            </Row>
        </Container>
    );
};

export default AdoptPage;
