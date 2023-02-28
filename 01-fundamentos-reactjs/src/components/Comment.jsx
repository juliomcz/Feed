import { Trash } from 'phosphor-react'
import { ThumbsUp} from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
    //    setLikeCount(likeCount + 1);
    //() => setLikeCount(likeCount + 1)
        setLikeCount((state) => {
            return state + 1;
        })
    }
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/juliomcz.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Julio Gabriel</strong>
                            <time title="22 de fevereiro às 20:40" dateTime="2023-02-22">Cerca de 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{ likeCount }</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}