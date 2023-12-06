import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export function homeLoader() {
  const userName = fetchData("userName");
  return { userName };
}

function Home() {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>{userName}</h1>
      Home
    </div>
  );
}

export default Home;
