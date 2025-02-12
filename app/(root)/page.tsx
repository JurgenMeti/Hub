
import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";


export default async function Home({searchParams}:{
  searchParams: Promise <{query?:string}>
}) {
  const query=(await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views:1,
    author:{ _id: 1, name:'Juri'},
    _id:1, 
    description: 'General description',
    image: "https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F2 3%2F22%2F00%2Ftree-736885_1280.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fphotos%2Ftree-sunset-clouds-sky-silhouette-736885%2F&docid=J7zy-dl2IZQspM&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwj0jaeVj76LAxWc9rsIHcl-IuYQM3oECBgQAA..i&w=1280&h=797&hcb=2&ved=2ahUKEwj0jaeVj76LAxWc9rsIHcl-IuYQM3oECBgQAA",
    category: "Psychology",
    title: "Why we lose",
  }]

  return (
    <>
    <section className="container">
    <h1 className="heading">
      Home<br />
      Connect</h1>

      <p className="sub-heading !max-w-3xl">
       Share ideas 
      </p>
      

      <SearchForm query={query}/>
    </section>
    <section className="section_container">
      <p className="text-30 font-semibold">
        {query ? `Search results for "${query}"`: 'All Startups'}
      </p>

      <ul className="mt-7 card-grid">
        {posts?.length> 0 ? (
          posts.map((post:StartupCardType) => 
          (<StartupCard key={post?._id} post={post} />))
        ):(
          <p className="no-results">No startups found</p>
        )}
      </ul>
    </section>
    </>
  );
}
