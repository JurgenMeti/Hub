import Navigationbar from "../../components/Navigationbar";

export default function Layout({children}: Readonly<{children:React.ReactNode}>){
return (
    <main className="font-work-sans">
    <Navigationbar />


    {children}
    </main>
)
}