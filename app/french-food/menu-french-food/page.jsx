import FrenchFood from "../components/all-french-food/page";
import FilterButton from "../components/filterButton";

export default function MenuPizzeria(){
    return(
        <div className=" flex flex-col gap-10 items-center justify- pt-28  bg-secondary">
            <h2 className=" uppercase text-center font-black text-3xl lg:text-6xl text-white">french food Deliziosa - Menu</h2>
            {/* <FilterButton/> */}
            <FrenchFood/>
        </div>
    )
}