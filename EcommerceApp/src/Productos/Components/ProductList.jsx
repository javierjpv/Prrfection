
import { ProductItem } from './ProductItem';



//Recibimos comop prop un array con objetos products y se recorre con un map
export const ProductList = ({products}) => {

  

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="h-100">

            {/* cada  producto se pasa a un ProductItem como prop */}
            <ProductItem product={product} />
          </div>
        </div>
      ))}
    </div>
  );
}
