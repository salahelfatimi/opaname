import FilterButton from "../components/filterButton";

export default function MenuPizzeria(){
    return(
        <div className=" flex flex-col gap-10 items-center justify-center pt-28">
            <h2 className=" uppercase text-center font-black text-3xl lg:text-6xl text-white">🍕 Pizzeria Deliziosa - Menu</h2>
            <FilterButton/>
        </div>
    )
}