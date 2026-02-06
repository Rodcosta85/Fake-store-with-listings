import { create } from "zustand";
import type { ProductTypes } from "../types/typings";

interface ProductsStates {
    isError400: boolean, 
    toggleHamb: boolean,
    data: ProductTypes[],
    isLoading: boolean,

    setIsError400: () => void,
    setToggleHamb: () => void,
    setData: (data: ProductTypes[]) => void,
    setIsLoading: () => void
}

const useProducts = create<ProductsStates>((set) => ({
    isError400: false,
    toggleHamb: false,
    data: [] as ProductTypes[],
    isLoading: false,

    setIsError400: () => set({ isError400: true }),
    setToggleHamb: () => set((state) => ({ toggleHamb: !state.toggleHamb })),
    setData: (data: ProductTypes[]) => set({ data }),
    setIsLoading: () => set({ isLoading: true }),
}));

export default useProducts