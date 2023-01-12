import css from './Forms.module.css'
import { useState } from 'react';


const FormAddNewTask = props => {
	const { addNewTask, setFormViible} = props;
	const [values, setValues] = useState({
		title:''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (values.title) {
			addNewTask(values.title)
			setFormViible(false)
		}
		
		// обработать пустое поле
	}

	const handleChange = (e) => {
		setValues({...values, title: e.target.value})
	}

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input
				className={css.input}
				id='taskTitle'
				name='title'
				type='text'
				placeholder='Enter task title'
				value={values.title}
				onChange={handleChange}
			/>
			<button className={css.submit} type='submit'>Add</button>
		</form>
	)
}

export default FormAddNewTask
