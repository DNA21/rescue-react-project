import { Row, Col } from "reactstrap";
import AnimalCard from "./AnimalCard";

const AnimalList = ({ setAnimalId, menuItem }) => {
    const animals = menuItem;

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
