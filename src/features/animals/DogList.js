import { Row, Col } from "reactstrap";
import AnimalCard from "./AnimalCard";
import { selectAllDogs } from "../adopt/dogSlice";

const DogList = ({ setAnimalId }) => {
    const dogs = selectAllDogs();

    return (
        <Row className='ms-auto'>
            {dogs.map((dog) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={dog.id}
                        onClick={() => setAnimalId(dog.id)}
                    >
                        <AnimalCard animal={dog} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DogList;
