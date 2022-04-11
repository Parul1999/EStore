import './products.css'
import MobileFilter from "../../components/filters/mobilefilter";
import DesktopFilter from "../../components/filters/desktopfilter";
import ProductCard from '../../components/card/productCart';

export default function Products(){
    return(
        <>
        <div className="sidebar-product-container">
        <MobileFilter/>
         <DesktopFilter/>
            <main className="content-wrapper">
              
             <ProductCard/>

            </main>

        </div>

        </>
    )
}