import css from './TaskDetail.module.css'
import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TaskDetail = props => {
	const match = useRouteMatch();
	const {taskId} = match.params; 
	const {tasks, setTasks} = props;
	const [isButtonViible, setButtonViible] = useState(false);
	const [values, setValues] = useState({
		description:''
	});

	const task = tasks.find(task => task.id === taskId)

	const handleClick = (e) => {
		const typeButton = e.target.name
		setButtonViible(!isButtonViible);
		if (typeButton === 'save'){
			const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
				return {...task, description: values.description}
			}
			return task
			})
			console.log(updatedTasks);
			setTasks(updatedTasks)
		} 
	}

	const handleChange = (e) => {
		setValues({...values, description: e.target.value})
	}
	
	return (
		<div className={css.wrapper}>
			{task ? (
			<>
				<div className={css.header}>
					<h2 className={css.title}>{task.title}</h2>
				</div>
				<p>{task.description || 'This task has no description'}</p>
				
				{!isButtonViible && (<button className={css.btEdit} name='change' onClick={handleClick}>Edit task</button>)}
				{isButtonViible && (
					<div>
						<button className={css.btSave} name='save' onClick={handleClick}>Save</button>
						<p><textarea rows="10" cols="45" name="text"
							value={values.description}
							onChange={handleChange}>{task.description || 'This task has no description'}</textarea></p>
					</div>)}
			</>) : (
				<h2>Task with ID {taskId} not found</h2>
			)}
			<Link to={'/'} className={css.close}></Link>
		</div>
		
	)
}


export default TaskDetail
