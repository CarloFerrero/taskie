import { useTask } from "../../context/taskContext";

const CardData = () => {
    const { form } = useTask();
    return (
        <div className='card' style={{border: "1px solid #000", marginTop:"20px", padding: "20px"}}>
            <div>
                <h1>Card Context</h1>
            </div>
            Email: {form.email}
        </div>
    );
}

export default CardData;