import { useParams } from 'react-router'
import mockTasks from './mock-task-data';

function TaskDetail() {
    const {id} = useParams();
    //since id from the URL is a string, I had to convert it back to a number
    const task = mockTasks.find(target => target.id === Number(id));

    //There are two types on conditionals in here! one's a '?' and the other is a '??'
    return (
        <div>
            <h1>Details</h1>
            <h2>Task #{id}: {task.title}</h2>
            <h3><i>{task.details.priority} Priority!</i></h3>
            <p>Description -- {task.details.description}</p>
            <p>Due on {task.details.dueDate ?? <i>NO DUE DATE</i>}<br/>
            Completed: {task.details.completed ? '\u2705' : '\u274C'}</p>
        </div>
    )
}

export default TaskDetail;