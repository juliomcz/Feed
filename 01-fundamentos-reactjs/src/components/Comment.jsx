import { Trash } from 'phosphor-react';
import { Thumbslip } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/juliomcz.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Julio Gabriel</strong>
                            <time title="22 de fevereiro às 20:40" dateTime="2023-02-22">Cerca de 1h atrás
                            </time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, Parabéns!</p>
                </div>
                <footer>
                    <button>
                        <Thumbslip />
                        Aplaudir <span> 20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}