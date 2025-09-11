// src/PostSearch.tsx
import { useState, useRef } from "react";
import useFetch from "./useFetch";

// 1. Define the shape of your expected data
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default function PostSearch() {
  const [postId, setPostId] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  // 2. Call useFetch with the Post type
  const { data: post, loading } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  const handleSearch = () => {
    // Note: It's safer to check if inputRef.current exists
    if (inputRef.current) {
      setPostId(Number(inputRef.current.value));
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="number"
        defaultValue={postId}
        placeholder="Search for a post ID..."
      />
      <button onClick={handleSearch}>Search</button>

      {loading ? (
        <p>Loading post...</p>
      ) : (
        <div>
          {/* 3. The error is gone! TypeScript now knows 'post' is either Post or null.
               Using optional chaining (?.) is safer than the non-null assertion (!).
          */}
          <h3>{post?.title}</h3>
          <p>{post?.body}</p>
        </div>
      )}
    </div>
  );
}