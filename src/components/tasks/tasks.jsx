import './tasks.css';
import Task from '../task/task';

const Tasks = ({$tasks, handleClickIT, handleClickRemove}) =>{


    return (
        <div className="task-box">
            {$tasks.map( (task) => (
                task.title ? <Task key={task.id} task={task} handleClickRemove={handleClickRemove} handleClickIT={handleClickIT}></Task> : false
            ))}
        </div>
    );
}

export default Tasks;