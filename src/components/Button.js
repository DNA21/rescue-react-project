import { Button } from "reactstrap"

const Buttons = ({buttonType, filter}) => {
    return (
        <div className='buttons'>
            {
                buttonType.map((animalType, i)=>{
                    return (
                        <Button
                            className='btn'
                            onClick={()=>filter(animalType)}
                        >
                            {animalType}
                        </Button>)
                })
            }
        </div>
    )
};

export default Buttons;
