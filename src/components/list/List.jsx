import css from './List.module.css'
import FormAddNewTask from '../forms/FormAddNewTask';
import { useState } from 'react';

const List = props => {
	const {title, type, tasks, addNewTask} = props;
	const [isFormViible, setFormViible] = useState(false);

	const handleClick = () => {
		setFormViible(!isFormViible)
	};

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.map(task => {
				return(

					<div key={task.id} className={css.task}>{task.title}</div>
					
				)
			})}
			{isFormViible && (
				<FormAddNewTask addNewTask={addNewTask} setFormViible={setFormViible}/>
			)}
			<button className={css.addButton} onClick={handleClick}>+ Add card</button>
		</div>
	)
}

export default List
