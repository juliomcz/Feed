//JSX JAVASCRITP + XML
import { Header } from "./components/Header";
import { Post } from './Post';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import './global.css';

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Julio Gabriel"
            content="Lorem du lorem ipsum dolor amet consectetur adipisicing elit."
          />
          <Post
            author="Dra. Katiane Santos"
            content="Lorem du lorem ipsum dolor amet consectetur adipisicing elit."
          />
        </main>
      </div>
    </div>
  )
}

