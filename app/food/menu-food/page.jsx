import CartFood from "@/components/cartFood/page";
import FrenchFood from "../components/all-french-food/page";
import FilterButton from "../components/filterButton";

export default async function MenuPizzeria({ searchParams }){
    const { id } = searchParams;
    console.log(id)
    return(
        <div className=" flex flex-col gap-10 items-center justify- pt-28  bg-secondary">
            <h2 className=" uppercase text-center font-black text-xl lg:text-6xl text-white">food Deliziosa - Menu</h2>
            {/* <FilterButton/> */}
            <FrenchFood id={id}/>
        </div>
    )
}