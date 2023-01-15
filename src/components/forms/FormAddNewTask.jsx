import css from './Forms.module.css'
import { useState, useRef } from 'react';
import { LIST_TYPES } from '../../config'

const FormAddNewTask = props => {
	const { updateStatus, addNewTask, setFormViible, filterTasks, typeList } = props;
	const [values, setValues] = useState({
		title:''
	});
	const [isNotValidate, setError] = useState(false)
	const inputRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (values.title) {
			addNewTask(values.title)
			setFormViible(false)
			setError(false)
		} else {
			setError(true)
			inputRef.current.focus();
		}
	}

	const handleChange = (e) => {
		setValues({...values, title: e.target.value})
	}

	const handleStatusChange = (e) => {
		updateStatus(e.target.value, typeList)
		setFormViible(false)
	}

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			{isNotValidate &&(
				<div className={css.error}>Поле обязательно для заполнения</div>
			)}
			{(typeList === LIST_TYPES.BACKLOG) && (
			<div>
				<input
					className={css.input}
					id='taskTitle'
					name='title'
					type='text'
					placeholder='New task title...'
					value={values.title}
					onChange={handleChange}
					ref={inputRef}
				/>
				<button className={css.submit} type='submit'>Submit</button>
			</div>)}
			
			{(typeList !== LIST_TYPES.BACKLOG) && (
			<select className={css.select} value={filterTasks.title} name='status' defaultValue='0' onChange={handleStatusChange}>
				<option value='0' disabled>Select task...</option>
				{Object.values(filterTasks).map(task => {
					return (			
						<option key={task.id} value={task.id}>{task.title}</option>
					)
				})}
			</select>)}
		</form>
	)
}

export default FormAddNewTask
