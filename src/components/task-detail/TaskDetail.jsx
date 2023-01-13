import css from './TaskDetail.module.css'
import { useRouteMatch } from 'react-router-dom'
import { LIST_COPY } from '../../config';

const TaskDetail = props => {
	const match = useRouteMatch();
	const {taskId} = match.params; 
	const {tasks} = props;

	const task = tasks.find(task => task.id === taskId)
	
	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<h2 className={css.title}>{task.title}</h2>
				<div className={css.status}>{LIST_COPY[task.status]}</div>
			</div>
			<p>{task.description || 'This task has no description'}</p>
		</div>
	)
}


export default TaskDetail
