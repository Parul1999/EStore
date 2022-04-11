import { Link ,NavLink} from 'react-router-dom'
import '../navbar/navbar.css'
export default function Navbar(){
    return(
        <nav className="desktop-nav navbar sticky">
        <div className="nav-headings">
        <h1> <Link to="/">Sharky Store</Link></h1>
        </div>
        <input name="name" type="search" value="Search Products"  id="searchBar" autocomplete="off"
            onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;"/>
        <ul className="desktop-nav-list">
          <li >
            <NavLink to="/signup"
              className="desktop-list-item"
              data-title="SignUp"
            >
            <span className="material-icons-outlined">
              person
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink className="desktop-list-item" to="/wishlist"  data-title="Wishlist">
              <span className="material-icons-outlined"> favorite_border </span>
              </NavLink>
          </li>
          <li>
            <NavLink className="desktop-list-item" to="/cart" data-title="cart">
              <span className="material-icons-outlined" > shopping_cart </span></NavLink>
          </li>
        </ul>
        <ul class="mobile-view hamburger">
                <span class="material-icons-outlined" onclick="openSidebar()">
                    menu
                </span>
            </ul>
      </nav>
    )
}