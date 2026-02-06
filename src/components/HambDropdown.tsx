import useProducts from "../hooks/useProducts"
import type { ProductTypes } from './../types/typings'

const HambDropdown = () => {

    const { toggleHamb, data, setToggleHamb } = useProducts();

    const handleHamb = (e: any) => {
        e.preventDefault();
        setToggleHamb();
    }


    return (
        <div className="w-fit relative flex flex-col gap-4">
            <button
                onClick={handleHamb}
                className="flex flex-col justify-between gap-[0.25rem] h-[1.0625rem] relative z-99 desktop:hidden tablet:hidden">
                <div
                    className={`line w-[1.5rem] h-[0.1875rem] bg-black transition duration-100
                ${toggleHamb ? 'rotate-45 translate-y-[10px]' : ''}
                `}
                    id="first">
                </div>

                <div
                    className={`line w-[1.5rem] h-[0.1875rem] bg-black transition duration-100
                ${toggleHamb ? 'opacity-0' : 'opacity-100'}
                `}
                    id="second">
                </div>

                <div
                    className={`line w-[1.5rem] h-[0.1875rem] bg-black transition duration-100
                ${toggleHamb ? '-rotate-45 translate-y-[-4px]' : ''}
                `}
                    id="third">
                </div>
            </button>
            <div className={`w-[300px] h-60 overflow-y-scroll absolute top-10 right-0 p-4 flex flex-col gap-2 bg-white rounded-3xl border border-blue-400 ${toggleHamb ? 'opacity-100' : 'opacity-0'}`}>
                {data.map((product: ProductTypes) => (
                    <a 
                    href={`#${product.id}`}
                    className="pl-4 pr-4 pt-2 pb-2 transition duration-300 ease-in-out rounded-2xl hover:bg-gray-400 hover:text-white font-medium"
                    >
                        {product.title}
                    </a>
                ))}
            </div>
        </div>

    )
}

export default HambDropdown