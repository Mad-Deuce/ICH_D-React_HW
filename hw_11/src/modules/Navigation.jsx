import { Routes, Route } from "react-router-dom";

import HomePage from "/src/pages/HomePage/HomePage";
import NotFoundPage from "/src/pages/NotFoundPage/NotFoundPage";
import PostsPage from "/src/pages/PostsPage/PostsPage";
import SinglePostPage from "/src/pages/SinglePostPage/SinglePostPage";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<SinglePostPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
