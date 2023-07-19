import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'; 
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/PauloRRRRR.png',
      name: 'Paulo Ricardo',
      role: 'QA Analyst'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio'},
      {type: 'link', content: 'jane.desing/doctorcare'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lauraandrade00.png',
      name: 'Laura Andrade',
      role: 'Frontend Dev'
    },
    content: [
      {type: 'paragraph', content: 'Hihi, eu sou Laura'},
      {type: 'paragraph', content: 'Dá uma sacada no meu projeto'},
      {type: 'link', content: 'jane.desing/doctorcare'},
    ],
    publishedAt: new Date('2023-06-03 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/PauloRRRRR.png',
      name: 'Paulo Ricardo',
      role: 'QA Analyst'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio'},
      {type: 'link', content: 'jane.desing/doctorcare'},
    ],
    publishedAt: new Date('2023-05-10 20:00:00'),
  },
];

export function App(){
  return(
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/> 
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