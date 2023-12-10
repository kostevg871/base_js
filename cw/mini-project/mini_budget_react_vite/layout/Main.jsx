import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../src/helpers";

//component
import Nav from "../components/Nav";

//asset
import footer from "../asset/footer.svg";

//loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

function Main() {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={footer} />
    </div>
  );
}

export default Main;
