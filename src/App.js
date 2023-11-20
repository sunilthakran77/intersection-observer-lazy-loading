import "./App.css";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route, useNavigate } from "react-router-dom";
import SkeletonAdmin from "./component/SkeletonAdmin";
import ErrorFallback from "./component/ErrorFallback";
import NavBar from "./component/NavBar";
import Time from "./component/Time";

const List = lazy(() => import("./component/List"));
const InfiniteScroll = lazy(() => import("./component/InfiniteScroll"));

function App() {
  const navigate = useNavigate();
  return (
    <div className="list-container">
      <Time />
      <NavBar />
      <Routes>
        <Route
          path="/listItems"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate("/")}
            >
              <Suspense fallback={<h1>Loading product list...</h1>}>
                <List />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/infiniteScroll"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate("/")}
            >
              <Suspense fallback={<SkeletonAdmin />}>
                <InfiniteScroll />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
