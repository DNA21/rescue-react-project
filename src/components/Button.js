import { Col, Button } from "reactstrap"

const Buttons = ({filter}) => {
    return (
        <>
            <Button onClick={() => filter('dog')}>Dogs</Button>
            <Button onClick={() => filter('cat')}>Cats</Button>
        </>
    )
}

export default Buttons;
