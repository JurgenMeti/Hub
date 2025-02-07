import { Section } from "lucide-react"
import SearchForm from "../components/SearchForm";


export default async function Home({searchParams}:{
  searchParams: Promise <{query?:string}>
}) {
  const query=(await searchParams).query;

  return (
    <section className="container">
    <h1 className="heading">
      Home<br />
      Connect</h1>

      <p className="sub-heading !max-w-3xl">
       Share ideas 
      </p>

      <SearchForm query={query}/>
    </section>
  );
}
