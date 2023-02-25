import { format ,formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, publishedAt}) {
    
    
    const publishedDateFormatted = format(publishedAt,  {locale:ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR,
        addSuffix: true,
    })
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

                <time title="{publishedDateFormatted}" dateTime={publishedAt.toISOString}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento daRocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}<a href=""> Julio.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
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