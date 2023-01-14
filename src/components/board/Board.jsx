import css from './Board.module.css'
import { LIST_TYPES, LIST_COPY, LIST_FILTER } from '../../config'
import List from '../list/List';
import uniqid from 'uniqid'

const Board = props => {
	const { tasks, setTasks } = props;

	const addNewTask = (title) => {
		const newTask = {
			id: uniqid(),
			title,
			description: '',
			status: LIST_TYPES.BACKLOG
		}

		setTasks([...tasks, newTask])
	}

	const updateStatus = (taskId, newStatus) => {
		const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
				return {...task, status: newStatus}
			}
			return task
		})
		setTasks(updatedTasks)
	}

	return (
		<div className={css.board}>
			{Object.values(LIST_TYPES).map(type => {
				const listTasks = tasks.filter(tasks => tasks.status === type)
				const filterTasks = tasks.filter(tasks => tasks.status === LIST_FILTER[type])
				return (
					<List 
						key = { LIST_COPY[type] } 
						type = { type } 
						title = { LIST_COPY[type] } 
						tasks = { listTasks }
						updateStatus = { updateStatus }
						addNewTask = { addNewTask }
						filterTasks = {filterTasks}/>
				)
			})}
		</div>
	)
}

export default Board
