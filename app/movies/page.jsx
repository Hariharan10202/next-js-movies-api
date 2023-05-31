import { Suspense } from "react";
import ListItem from "../Components/ListItem/ListItem";
import styles from "./posts.module.css";
import Loading from "../Components/Loading/Loading";

async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTMwODE4MjAzOTdkYWZlNjdhZDc0MDRjNTNlMTE2NCIsInN1YiI6IjYyYTBiZWI0NTM4NjZlMDA2NjhiNzA1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZLcjQBbXN8iHs-jjjk_FM7itqX2N1qzbhhPG13BRpvs",
    },
  };
  let randomId = Math.floor(Math.random() * 1000 + 1);

  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${randomId}`,
    options
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Movies = async () => {
  const data = await getData();

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        {data.results.map((title) => (
          <ListItem key={title.id} title={title} />
        ))}
      </div>
    </Suspense>
  );
};
export default Movies;
