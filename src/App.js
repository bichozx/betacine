import { ListMovies } from './components/ListComponent/ListMovies';

function App() {
  return (
    <div className="layout">
      
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>BetaCine</h1>
      </header>

     
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      
      <section id="content" className="content">
        
        <ListMovies/>
      </section>

      {/* <!--Barra lateral--> */}
      {/* <aside className="lateral">
        <SearchComponent />
        <CreateComponent />
      </aside> */}

      
      <footer className="footer">
        &copy; Máster en React -{' '}
        <a href="https://fascinating-kringle-3cd555.netlify.app/inicio">
          Juan Camilo G
        </a>
      </footer>
    </div>
  );
}

export default App;
