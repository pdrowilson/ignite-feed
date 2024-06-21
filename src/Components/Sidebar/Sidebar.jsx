import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.image}
				src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>

			<div className={styles.profile}>
				<img
					className={styles.avatar}
					src="https://github.com/pdrowilson.png"
				/>
				<strong>Pedro Wilson</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}

export default Sidebar;
