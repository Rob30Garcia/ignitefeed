import styles from './App.module.scss';

import './styles/global.scss';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati sunt quia aperiam alias accusantium dicta totam culpa a odio, temporibus nihil itaque ipsam labore quos eveniet iure reprehenderit unde!
        </main>
      </div>
    </div>
  )
};

export default App;
