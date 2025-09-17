import { useGetPostsQuery } from "../rtk_query/features/api/apiSlice";


export default function PostsList() {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery(undefined);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = posts?.map((post) => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
      </article>
    ));
  } else if (isError) {
    content = <p>{error.toString()}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
}
