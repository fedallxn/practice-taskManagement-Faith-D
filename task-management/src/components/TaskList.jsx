import mockTasks from './mock-task-data'
import { Link } from 'react-router'

function TaskList() {
    const data = mockTasks;
    return (
        <>
        <h1>Task List</h1>
        <ul>
            {data.map((task) => (
                //This was giving me trouble bc the link to HAD to be a template literal and couldn't just be wrapped in "" to work!
                <div key={task.id}>
                    <li className='task'>{task.title} <br/>
                    <Link to={`/task/${task.id}`}>Details</Link>
                    </li>
                </div>
            ))}
        </ul>
        </>
    );
}

export default TaskList;