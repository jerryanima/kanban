import css from './Footer.module.css'
import { LIST_TYPES } from '../../config'

const Footer = props => {
	const { tasks } = props
	const listCountBacklog = tasks.filter(task => task.status === LIST_TYPES.BACKLOG)
	const listCountFinished = tasks.filter(task => task.status === LIST_TYPES.FINISHED)
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
				<div className={css.count}>Active tasks: {listCountBacklog.length}</div>
				<div className={css.count}>Finished tasks: {listCountFinished.length}</div>
			</div>
			<div className={css.copy}>
				Kanban board by Lapina Maria, 2023
			</div>
		</footer>
	)
}

export default Footer
