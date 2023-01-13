import css from './Header.module.css'
import LkPerson from '../lk-person/lk-person'

const Header = () => {
	return (
		<header className={css.header}>
			<h1 className={css.title}>Awesome Kanban Board</h1>
			<LkPerson/>
		</header>
	)
}

export default Header
