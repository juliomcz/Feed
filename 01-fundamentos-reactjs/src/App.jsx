//JSX JAVASCRITP + XML
import { Header } from "./components/Header";
import { Post } from './components/Post';
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';
import './global.css';

// Author { avatar_url:"", name:"",role:""  }
//PublishAt: Date
//Content: String
//iteração
const posts = [
  {id: 1,
  author:{
    avatarUrl: "https://github.com/juliomcz.png",
    name: "Julio Gabriel",
    role: "Juniorzin"
  },
  content:[
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento daRocketseat. O nome do projeto é DoctorCare 🚀'},{
      type: 'link', content: 'Julio.design/doctorcare'
    }
  ],
  publishedAt: new Date('2023-02-22 20:00:00'),
}
]


export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return(
            <Post
            author={post.author}
            content={post.content}
            publishedAT={post.publishedAt}
            />

          )})}
        </main>
      </div>
    </div>
  )
}

