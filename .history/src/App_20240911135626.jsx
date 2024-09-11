function App() {
  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn">
                <span>&#129293;</span>
                <span className="badge">3</span>
              </button>
              <button className="icon-btn">
                <span>&#128722;</span>
                <span className="badge">1</span>
              </button>
            </div>
          </div>
          <div>
            <nav>
              <button>home</button>
              <button>catalog</button>
              <button>all products</button>
              <button>wish list</button>

            </nav>
            <form>
              <input type="search" ></input>
            </form>
          </div>
        </header>

        <main></main>
      </section>
      <footer>
        <div>
          <h3>Our Store</h3>
          <ul>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Sell with us</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Our Policies</h3>
          <ul>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Sell with us</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Our Products</h3>
          <ul>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Sell with us</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
