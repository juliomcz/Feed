import { format ,formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


// estado = variaveis que eu quero que o componente monitore.

export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([
        'Post muuito bacana, hein!?'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    //console.log(newCommentText);
       
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
      })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(){
        event.preventDefault()

        //const newCommentText = event.target.comment.value;
        //imutabilidade
        //event.target.comment.value = '';
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }
    function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }
    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete){
        // imutabilidade => as variáveis não sofrem mutação, nós criamos um novo valor( um novo espaço na memória)
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line=>{
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    }else if (line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                name='comment'
                value={newCommentText}
                placeholder="Deixe um comentário"
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return (
                        <Comment
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>

        </article>
    )
}



















/* 

HTML > ESTILIZAÇÃO > FUNÇÃO
 {author: "", content: ""} 
export function Post({
    console.log(;
  return( 
  <div><strong>{author}</strong> 
  <p>{content}</p></div>)
}




Default Exports vs Named Exports
Default Exports = function e no final um export default Post.
Named Exports = já declara na função o export : export function <nome> (){}

default exports
function Post(){     return <p>Post</p>
}

export default Post11

-----------------------

named exports 

export funcion Button(){  <p>Button<p>
}

melhor para não esquecer mudanças no codigo.

*/