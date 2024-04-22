import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Posts } from "./pages/posts";
import { Header } from "./pages/header";
import { PostLists } from "./pages/postLists";
import { Photos } from "./pages/photos";
import { PhotoLists } from "./pages/photoLists";
import { Onlyfans } from "./pages/onlyfans";
import { StartRoom } from "./pages/startRoom";
import { Like } from "./pages/like";

function WithHeader({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

function AppLayout() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <WithHeader>
              <Home />
            </WithHeader>
          }
        />
        <Route
          path="/posts"
          element={
            <WithHeader>
              <Posts />
            </WithHeader>
          }
        >
          <Route index element={<PostLists />} />
        </Route>
        <Route
          path="/photos"
          element={
            <WithHeader>
              <Photos />
            </WithHeader>
          }
        >
          <Route index element={<PhotoLists />} />
        </Route>
        <Route
          path="/onlyfans"
          element={
            <WithHeader>
              <Onlyfans />
            </WithHeader>
          }
        />
        <Route
          path="/like"
          element={
            <WithHeader>
              <Like />
            </WithHeader>
          }
        />
        <Route path="/evtushenko" element={<StartRoom />} />
        <Route
          path="*"
          element={
            <WithHeader>
              <Home />
            </WithHeader>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
