import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Panvi Fin Mane | Loans, Investments & Property Services
        </title>

        <meta
          name="description"
          content="Professional financial advisory services for loans, investments, and property consultation."
        />
      </Helmet>

      {loading ? <Loader /> : <Home />}
    </>
  );
}

export default App;