import { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const general = "general";
  const business = "business";
  const sports = "sports";
  const entertainment = "entertainment";
  const technology = "technology";
  const science = "science";
  const health = "health";
  const apiKey = import.meta.env.VITE_NEWS_API;

  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen overflow-x-hidden">
          <div className="bg-[url(https://th.bing.com/th/id/OIP.e_AtZRRRmQy2hx9eBuTm1wHaFS?pid=ImgDet&w=200&h=142&c=7&dpr=1.5)] bg-cover bg-center min-h-screen">
            <LoadingBar
              color="#ffffff"
              height={3}
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />

            <Navbar className="fixed top-0 w-full z-10" />

            <div className="max-w-[80%] mx-auto ">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <News
                      setProgress={setProgress}
                      pageSize={6}
                      apiKey={apiKey}
                      category={general}
                    />
                  }
                />
                <Route
                  exact
                  path="/business"
                  element={
                    <News
                      setProgress={setProgress}
                      key="business"
                      pageSize={6}
                      apiKey={apiKey}
                      category={business}
                    />
                  }
                />
                <Route
                  exact
                  path="/sports"
                  element={
                    <News
                      setProgress={setProgress}
                      key="sports"
                      pageSize={6}
                      apiKey={apiKey}
                      category={sports}
                    />
                  }
                />
                <Route
                  exact
                  path="/entertainment"
                  element={
                    <News
                      setProgress={setProgress}
                      key="entertainment"
                      pageSize={6}
                      apiKey={apiKey}
                      category={entertainment}
                    />
                  }
                />
                <Route
                  exact
                  path="/technology"
                  element={
                    <News
                      setProgress={setProgress}
                      key="technology"
                      pageSize={6}
                      apiKey={apiKey}
                      category={technology}
                    />
                  }
                />
                <Route
                  exact
                  path="/science"
                  element={
                    <News
                      setProgress={setProgress}
                      key="science"
                      pageSize={6}
                      apiKey={apiKey}
                      category={science}
                    />
                  }
                />
                <Route
                  exact
                  path="/health"
                  element={
                    <News
                      setProgress={setProgress}
                      key="health"
                      pageSize={6}
                      apiKey={apiKey}
                      category={health}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
