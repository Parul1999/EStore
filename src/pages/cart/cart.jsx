import '../cart/cart.css'
export default function Cart(){
    return(
        <>
        <h1 className="mycart">My Cart</h1>
    <main className="items-amount-wrapper">
      {/* <!-- Cart Container --> */}
      <div className="items-container">
        <div className="card-col basic-card card-horizontal">
          <div>
            <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />

            <header>
              <h2>Rs.1000</h2>
              <p>by SharkyStore</p>
              <span className="quant-size">
                <label htmlFor="quantity">Quant:</label>
                <select name="quantity" id="quantity">
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                  <option value="four">4</option>
                  <option value="five">5</option>
                </select>
                <label htmlFor="size">Size:</label>
                <select name="size" id="size">
                  <option value="xs">XS</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                </select>
              </span>
            </header>
          </div>

          <footer className="card-footer">
            <button className="btn btn-primary">Add to Wishlist</button>
            <button className="btn btn-secondary">Remove from Cart</button>
          </footer>
        </div>

        <div className="card-col basic-card card-horizontal">
          <div>
            <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />

            <header>
              <h2>Rs.1000</h2>
              <p>by SharkyStore</p>
              <span className="quant-size">
                <label htmlFor="quantity">Quant:</label>
                <select name="quantity" id="quantity">
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                  <option value="four">4</option>
                  <option value="five">5</option>
                </select>
                <label htmlFor="size">Size:</label>
                <select name="size" id="size">
                  <option value="xs">XS</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                </select>
              </span>
            </header>
          </div>

          <footer className="card-footer">
            <button className="btn btn-primary">Add to Wishlist</button>
            <button className="btn btn-secondary">Remove from Cart</button>
          </footer>
        </div>
      </div>

      {/* <!-- Total Price --> */}
      <div className="amount-container">
        <h4>COUPONS</h4>
        <div className="coupon-wrap">
          <span className="coupon-inp-wrap">
            <p>Coupon Code</p>
            <input id="coupon-code"/>
          </span>
          <button className="btn btn-primary apply-btn">APPLY</button>
        </div>
        <div className="horiz-line-thin"></div>
        <h3>Price Details</h3>
        <p>No. of Items: <span>2</span></p>
        <p>Total MRP: <span>Rs.2000</span></p>
        <p>Discount on MRP: <span>- Rs.500</span></p>
        <p>Delivery Charges: <span className="success">FREE</span></p>
        <div className="horiz-line-thin"></div>
        <h4>TOTAL AMOUNT: <span>Rs.1500</span></h4>
        <p>You will save Rs.500 on your order</p>
        <button className="btn btn-primary">PLACE ORDER</button>
        <button className="btn btn-secondary sharecart">
          Share Your Cart<span className="material-icons-outlined"> share </span>
        </button>
      </div>
    </main>
        </>
    )
}