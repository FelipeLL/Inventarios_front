import product from '../images/profile_2.jpg'

const CardProduct = () => {
  return (
    <>

        <div className="card" >
        <img src= {product} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">Description</p>
            <a href="" className="btn btn-primary">Comprar</a>
            
        </div>
        </div>
        

    </>
  )
}

export default CardProduct