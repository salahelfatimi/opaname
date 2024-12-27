import Footer from "@/components/footer";
import Navbar from "./components/navbar";


export const metadata= {
  title: {  template:" French O'Paname | %s " },
  description: "Découvrez les meilleures  Food chez French O'Paname  . Savourez des Food fraîches, délicieuses et livrées rapidement . Ouvert de midi à 5h du matin. Commandez dès maintenant !",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
}

export default function PizzeriaLayout({ children }) {
    return( 
        <>
          <div className={`bg-secondary min-h-screen`}>
            {children}
          </div>
        </>
        )
  }