import './index.css'

const SamsungBrandProducts = props => {
  const {samsungProductsInfo} = props
  const {name, image, price} = samsungProductsInfo
  return (
    <li>
      <div>
        <div>
          <img src={image} alt="productImage" className="product-image" />
          <div>
            <h1 className="product-name">{name}</h1>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SamsungBrandProducts
