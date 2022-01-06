import { MoviesGrid } from "./moviesgrid";
import styles from "./App.module.css";

export function App() {
  return <div>
    <header>
    <h1 className={styles.title}>CINEMA CLUB</h1>
    </header>
    <main>
      <MoviesGrid />
    </main>
    </div>
}