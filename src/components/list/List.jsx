import css from './List.module.css'
import FormAddNewTask from '../forms/FormAddNewTask';
import { useState } from 'react';
import { LIST_TYPES } from '../../config'
import { Link } from 'react-router-dom';

const List = props => {
	const {title, type, tasks, addNewTask, filterTasks} = props;
	const [isFormViible, setFormViible] = useState(false);
	const isNullFilter = filterTasks.length === 0;

	const handleClick = () => {
		setFormViible(!isFormViible)
	};

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.map(task => {
				return(
					<Link to={`/tasks/${task.id}`} className={css.taskLink}>
						<div key={task.id} className={css.task}>{task.title}</div>
					</Link>
				)
			})}
			
			{isFormViible && (
				<FormAddNewTask addNewTask={addNewTask} filterTasks={filterTasks} setFormViible={setFormViible}/>
			)}
			{!isFormViible && (
				<button 
					className={css.addButton} 
					onClick={handleClick} 
					disabled={isNullFilter && type !== LIST_TYPES.BACKLOG}>+ Add card
				</button>
			)}
		</div>
	)
}

export default List
