import style from 'style.css'

export default function Home() {
  return (
    <main>
      <nav className="nav-bar">
        <img src="/flecha.png" alt="Ícone de flecha" />
        <h4>Shopping Continue</h4>
      </nav>

      <hr />

      <div className="sub-title">
        <h4>Shopping cart</h4>
        <p>Você tem 3 itens no seu carrinho</p>
      </div>





       <div className="cards">
        <div className="card">
          <img src="/pizza.png" alt="Italy Pizza" className="card-img" />
          <div className="card-info">
            <h3>Italy Pizza</h3>
            <p>Extra cheese and topping</p>
          </div>
          <div className="card-actions">
            <span className="quantity">1 ▲</span>
            <span className="price">$681</span>
            <button className="delete">🗑️</button>
          </div>
        </div>

        <div className="card">
          <img src="/combo.png" alt="Combo Plate" className="card-img" />
          <div className="card-info">
            <h3>Combo Plate</h3>
            <p>Extra cheese and topping</p>
          </div>
          <div className="card-actions">
            <span className="quantity">1 ▲</span>
            <span className="price">$681</span>
            <button className="delete">🗑️</button>
          </div>
        </div>

        <div className="card">
          <img src="/rice.png" alt="Spanish Rice" className="card-img" />
          <div className="card-info">
            <h3>Spanish Rice</h3>
            <p>Extra garlic</p>
          </div>
          <div className="card-actions">
            <span className="quantity">1 ▲</span>
            <span className="price">$681</span>
            <button className="delete">🗑️</button>
          </div>
        </div>
      </div>
    </main>
  );
}
