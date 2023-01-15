import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

function App() {
	const init = JSON.parse(window.localStorage.getItem('tasks')) || [];
	const [tasks, setTasks] = useState(init);

	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	},[tasks])

	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Header />
				<Main tasks = { tasks } setTasks = { setTasks } />
				<Footer tasks = { tasks } />
			</div>
		</BrowserRouter>

	)
}

export default App
