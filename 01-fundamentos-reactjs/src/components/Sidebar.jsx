import {PencilLine} from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"/>

            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/juliomcz.png" />
                <strong>Julio Gabriel</strong>
                <span>Web Developer</span>
            </div>
            
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}