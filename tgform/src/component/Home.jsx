import NavBar from "./NavBar";
import Form from "./Form";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet>
    <title>TG | Home</title>
    </Helmet>
      <div className="h-full w-full">
        <NavBar number={0} />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Form />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
