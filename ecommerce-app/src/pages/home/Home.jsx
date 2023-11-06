import Cards from "@/components/cards/Cards"


const Home = () => {
  return (
    <>
    <div className="products mt-24">
      <div className="left">
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
      </div>
      <div className="right">
      <div className=" mt-24 container mx-auto">
        <h1 className="text-4xl font-bold text-center mt-10">Bienvenido a la tienda</h1>
        <p className="text-xl text-center mt-5">Aquí encontrarás los mejores productos</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
           <Cards /> 
        </div>
      </div>

      </div>
    </div>
    </>



  )
}

export default Home