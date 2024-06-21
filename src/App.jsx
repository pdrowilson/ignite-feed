import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

import styles from './App.module.css';
import './global.css';

function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>Post</main>
			</div>
		</div>
	);
}

export default App;
