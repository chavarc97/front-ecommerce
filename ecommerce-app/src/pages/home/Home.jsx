import Cards from "@/components/cards/Cards"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <>
        <div className="products mt-24 flex w-full h-full ">
          {/* <div className="left mt-24 w-full  lg:w-1/4">
            <div className="filter-item">
              <h2>Product Categories</h2>
              <div className="input-item">
                <input type="checkbox" id="1" value={1} />
                <label htmlFor="1">kids</label>
              </div>
            </div>
            <div className="filter-item">
              <h2>Filter by Price</h2>
            </div>
            <div className="filter-item">
              <h2>Sort by</h2>
              <div className="input-item">
                <input type="radio" id="asc" value="asc" name="price" />
                <label htmlFor="asc">(Lowest first)</label>
              </div>
              <div className="input-item">
                <input type="radio" id="desc" value="desc" name="price" />
                <label htmlFor="desc">(Highest first)</label>
              </div>
            </div>
          </div> */}
          
            <div className=" mt-24 w-full flex flex-wrap items-center justify-center gap-10">
                <Link to={`/product/${product.id}`}>
                  <Cards />
                </Link>
                

            </div>

          
        </div>

    </>



  )
}

export default Home