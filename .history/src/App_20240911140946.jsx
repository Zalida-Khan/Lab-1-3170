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
              <button>wishlist</button>

            </nav>
            <form>
              <input type="search" placeholder="search"></input>
              <button type="button">Go</button>
            </form>
          </div>
        </header>

        <main>
          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Reebok_Royal_Glide_Ripple_Clip_shoe.jpg" alt="shoes"></img>
            <p className="">Shoes</p>
            <p className="pr-price">$40</p>
          </div>
        </main>
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
