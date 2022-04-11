import '../productlisting/productlisting.css'
import MobileFilter from "../../components/filters/mobilefilter";
import DesktopFilter from "../../components/filters/desktopfilter";

export default function ProductListing(){
    return(
        <>
        <div className="sidebar-product-container">
        <MobileFilter/>
         <DesktopFilter/>
            <main className="content-wrapper">
                <div className="card-col basic-card"  onclick="location.href='/Components/ProductDetails/productdetails.html'">
                    <div>
                        <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />
                        <header>
                            <h4>Rs.1000</h4>
                            <p>by SharkyStore</p>
                        </header>
                    </div>
                    <footer className="card-footer">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-secondary">Add to Wishlist</button>
                    </footer>
                </div>
                <div className="card-col basic-card" onclick="location.href='/Components/ProductDetails/productdetails.html'">
                    <div>
                        <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />
                        <header>
                            <h4>Rs.1000</h4>
                            <p>by SharkyStore</p>
                        </header>
                    </div>
                    <footer className="card-footer">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-secondary">Add to Wishlist</button>
                    </footer>
                </div>
                <div className="card-col basic-card" onclick="location.href='/Components/ProductDetails/productdetails.html'">
                    <div>
                        <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />
                        <header>
                            <h4>Rs.1000</h4>
                            <p>by SharkyStore</p>
                        </header>
                    </div>
                    <footer className="card-footer">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-secondary">Add to Wishlist</button>
                    </footer>
                </div>
                <div className="card-col basic-card" onclick="location.href='/Components/ProductDetails/productdetails.html'">
                    <div>
                        <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />
                        <header>
                            <h4>Rs.1000</h4>
                            <p>by SharkyStore</p>
                        </header>
                    </div>
                    <footer className="card-footer">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-secondary">Add to Wishlist</button>
                    </footer>
                </div>
                <div className="card-col basic-card" onclick="location.href='/Components/ProductDetails/productdetails.html'">
                    <div>
                        <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />
                        <header>
                            <h4>Rs.1000</h4>
                            <p>by SharkyStore</p>
                        </header>
                    </div>
                    <footer className="card-footer">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-secondary">Add to Wishlist</button>
                    </footer>
                </div>
                <div className="card-col basic-card" onclick="location.href='/Components/ProductDetails/productdetails.html'">
                    <div>
                        <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />
                        <header>
                            <h4>Rs.1000</h4>
                            <p>by SharkyStore</p>
                        </header>
                    </div>
                    <footer className="card-footer">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-secondary">Add to Wishlist</button>
                    </footer>
                </div>
                <div className="card-col basic-card" onclick="location.href='/Components/ProductDetails/productdetails.html'">
                    <div>
                        <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />
                        <header>
                            <h4>Rs.1000</h4>
                            <p>by SharkyStore</p>
                        </header>
                    </div>
                    <footer className="card-footer">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-secondary">Add to Wishlist</button>
                    </footer>
                </div>
                <div className="card-col basic-card" onclick="location.href='/Components/ProductDetails/productdetails.html'">
                    <div>
                        <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />
                        <header>
                            <h4>Rs.1000</h4>
                            <p>by SharkyStore</p>
                        </header>
                    </div>
                    <footer className="card-footer">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-secondary">Add to Wishlist</button>
                    </footer>
                </div>


            </main>

        </div>

        </>
    )
}