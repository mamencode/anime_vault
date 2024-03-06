import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
import { data } from "./_data";
import { fetchAnime } from "./action";

async function Home() {
  //const resdata = await fetchAnime()
  //console.log(resdata)
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Animeees</h2>

      <LoadMore />
    </main>
  );
}

export default Home;
