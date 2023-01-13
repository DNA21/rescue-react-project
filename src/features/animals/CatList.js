import { Row, Col } from "reactstrap";
import { CATS } from "../../app/shared/CATS";
import AnimalCard from "./AnimalCard";

const CatList = () => {
    return (
        <Row className='ms-auto'>
            {CATS.map((cat) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={cat.id}
                    >
                        <AnimalCard animal={cat} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CatList;
