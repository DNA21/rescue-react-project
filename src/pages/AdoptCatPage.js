import { Container, Row, Col, Button } from 'reactstrap';
import AnimalDetail from '../features/animals/AnimalDetail';
import CatList from '../features/animals/CatList';
import { selectRandomCat } from '../features/adopt/catSlice';

const AdoptCatPage = () => {
    const selectedAnimal = selectRandomCat();

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CatList />
                </Col>
                <Col sm='7' md='5'>
                    <AnimalDetail animal={selectedAnimal} />
                </Col>
            </Row>

        </Container>
    );
};

export default AdoptCatPage;
