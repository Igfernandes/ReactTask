import { useParams } from 'react-router-dom';
import './detailsTask.css';
import {useNavigate} from 'react-router-dom';
import Button from '../button/_button';

const Details = () =>{

    const param = useParams();

    const navigate = useNavigate();

    const handleBtn = ()=>{
    
        navigate("/");
    }

    return (
      <>
        <div className="task-btn">
            <Button handleBtn={handleBtn} text={"Voltar"}/>
        </div>
        <div className="task-info">
            <div className="task-info--title">
                <h3><strong>{param.task}</strong></h3>
            </div>
            <div className="task-info--text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis optio rem magnam quis cumque esse expedita nihil fugit impedit ullam cum itaque ea dolorum, error temporibus quas omnis totam?</p>
            </div>
        </div>
      </>
    )
}

export default Details;