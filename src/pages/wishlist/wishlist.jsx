import '../wishlist/wishlist.css'
export default function Wishlist(){
    return(

        <div className="wishlisted-container">
        <h1>My Wishlist</h1>
        <div className="wishlist-cards">
            <div className="card-col basic-card">
                <div>
                    <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />
                    <header>
                        <h4>Rs. 1000</h4>
                        <p>by SharkyStore</p>
                    </header>
                </div>
                <footer className="card-footer">
                    <button className="btn btn-primary">Add to Cart</button>
                    <button className="btn btn-secondary">Remove</button>
                </footer>
            </div>

            <div className="card-col basic-card">
                <div>
                    <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />
                    <header>
                        <h4>Rs. 1000</h4>
                        <p>by SharkyStore</p>
                    </header>
                </div>
                <footer className="card-footer">
                    <button className="btn btn-primary">Add to Cart</button>
                    <button className="btn btn-secondary">Remove</button>
                </footer>
            </div>

            <div className="card-col basic-card">
                <div>
                    <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />
                    <header>
                        <h4>Rs. 1000</h4>
                        <p>by SharkyStore</p>
                    </header>
                </div>
                <footer className="card-footer">
                    <button className="btn btn-primary">Add to Cart</button>
                    <button className="btn btn-secondary">Remove</button>
                </footer>
            </div>
        </div>
</div>
    )
}