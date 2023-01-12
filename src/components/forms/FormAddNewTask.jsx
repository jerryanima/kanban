import css from './Forms.module.css'
import { useState, useRef } from 'react';


const FormAddNewTask = props => {
	const { addNewTask, setFormViible} = props;
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

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			{isNotValidate &&(
				<div className={css.error}>Поле обязательно для заполнения</div>
			)}
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
		</form>
	)
}

export default FormAddNewTask
