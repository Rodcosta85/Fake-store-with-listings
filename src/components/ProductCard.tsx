import type { ProductTypes } from "../types/typings"

interface CardProps {
    product: ProductTypes;
}

const ProductCard: React.FC<CardProps> = ({ product }) => {

    return (
        <div className='p-3 rounded-3xl border-4 border-blue-400 flex flex-col justify-start gap-4'>
            <img
                className='w-full h-50 rounded-[20px] object-cover'
                src={product.image}
                alt={`a(n) ${product.title}`} />
            <h2>{product.title}</h2>
            <p>US${product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductCard