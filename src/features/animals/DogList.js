import { Row, Col } from "reactstrap";
import { DOGS } from "../../app/shared/DOGS";
import AnimalCard from "./AnimalCard";

const DogList = () => {
    return (
        <Row className='ms-auto'>
            {DOGS.map((dog) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={dog.id}
                    >
                        <AnimalCard animal={dog} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DogList;
