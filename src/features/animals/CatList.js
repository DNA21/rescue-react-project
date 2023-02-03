import { Row, Col } from "reactstrap";
import AnimalCard from "./AnimalCard";
import { selectAllCats } from "../adopt/catSlice";

const CatList = ({ setAnimalId }) => {
    const cats = selectAllCats();

    return (
        <Row className='ms-auto'>
            {cats.map((cat) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={cat.id}
                        onClick={() => setAnimalId(cat.id)}
                    >
                        <AnimalCard animal={cat} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CatList;
