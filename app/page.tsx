import './style.css';

export default function Page() {
  return (
    <main className="container">
      <section className="cart-section">

        <button className="back-button"> <strong>&lt;</strong> &nbsp; Shopping Continue </button>
        <hr />
        <div className='txt2'>
          <h2>Shopping cart</h2>
          <p>You have 3 items in your cart</p>
        </div>
        

        <div className="cart-item">
          <img src="/pizza.png" alt="Italy Pizza" />
          <div className="item-info">
            <h4>Italy Pizza</h4>
            <p>Extra cheese and topping</p>
          </div>
          <div className="item-actions">
            <input type="number" value={1} min={1} />
            <span>$681</span>
            <button className="delete-btn">🗑️</button>
          </div>
        </div>

        <div className="cart-item">
          <img src="/combo.png" alt="Combo Plate" />
          <div className="item-info">
            <h4>Combo Plate</h4>
            <p>Extra cheese and topping</p>
          </div>
          <div className="item-actions">
            <input type="number" value={1} min={1} />
            <span>$681</span>
            <button className="delete-btn">🗑️</button>
          </div>
        </div>

        <div className="cart-item">
          <img src="/rice.png" alt="Spanish Rice" />
          <div className="item-info">
            <h4>Spanish Rice</h4>
            <p>Extra garlic</p>
          </div>
          <div className="item-actions">
            <input type="number" value={1} min={1} />
            <span>$681</span>
            <button className="delete-btn">🗑️</button>
          </div>
        </div>
      </section>

      <section className="card-section">
        <h3>Card Details</h3>
        <div className="card-types">
          <a href=""><img src="/master-card.png" alt="mastercard" /></a>
          <a href=""><img src="/visa.png" alt="visa" /></a>
          <a href=""><img src="/rupay.png" alt="ru pay" /></a>
          <a href=""><img src="/see all.png" alt="see all" /></a>
        </div>
        <input type="text" placeholder="Name on card" />
        <input type="text" placeholder="Card Number" />
        <div className="card-bottom">
          <input type="text" placeholder="mm/yy" />
          <input type="text" placeholder="CVV" />
        </div>
        <div className='linha'>
          < hr />
        </div>
        
        <div className="summary">
          <p>Subtotal: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  $1,668</p>
          <p>Shipping: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $4</p>
          <p>Total: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;$1,672</p>
        </div>
        <button className="checkout-btn">Checkout →</button>
      </section>
    </main>
  );
}
