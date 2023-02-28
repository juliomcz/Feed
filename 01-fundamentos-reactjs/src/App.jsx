import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';

export function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/juliomcz.png",
        name: "Julio Gabriel",
        role: "Juniorzin"
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento daRocketseat. O nome do projeto é DoctorCare 🚀' }, {
          type: 'link', content: 'Julio.design/doctorcare'
        }
      ],
      publishedAt: new Date('2023-02-22 20:20:00'),
    }, {
      id: 2,
      author: {
        avatarUrl: "https://github.com/maykbrito.png",
        name: "Mayk Brito",
        role: "Educator @Rocketseat"
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento daRocketseat. O nome do projeto é DoctorCare 🚀' }, {
          type: 'link', content: 'Mayk.design/doctorcare'
        }
      ],
      publishedAt: new Date('2023-05-03 20:30:00'),
    },
  ]
  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />  
            )        
          })}
        </main>
      </div>
    </div>    
  )
}  
// Author { avatar_url:"", name:"",role:""  }
//PublishAt: Date
//Content: String
//iteração
