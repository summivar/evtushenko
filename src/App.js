import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Posts } from "./pages/posts";
import { Header } from "./pages/header";
import { PostLists } from "./pages/postLists";
import { Photos } from "./pages/photos";
import { PhotoLists } from "./pages/photoLists";
import { Onlyfans } from "./pages/onlyfans";

function AppLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
        </Route>
        <Route path="/photos" element={<Photos />}>
          <Route index element={<PhotoLists />} />
        </Route>
        <Route path="/onlyfans" element={<Onlyfans />} />
        <Route path="*" element={<Home />} />
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
