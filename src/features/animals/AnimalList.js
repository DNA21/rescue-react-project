import { Row, Col } from "reactstrap";
import AnimalCard from "./AnimalCard";
import { selectAllAnimals } from "./animalSlice";

const AnimalList = ({ setAnimalId }) => {
    const animals = selectAllAnimals();

    return (
        <Row className='ms-auto'>
            {animals.map((animal) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={animal.id}
                        onClick={() => setAnimalId(animal.id)}
                    >
                        <AnimalCard animal={animal} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default AnimalList;
