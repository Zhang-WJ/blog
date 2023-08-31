import { Handlers } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";
import { PageProps } from "$fresh/server.ts";
import PostCard from "../components/post.tsx";
import Header from "../components/head.tsx";
import Footer from "../components/footer.tsx";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
        <main className="min-h-screen">
          <Header active={'/'} />
          <main className="max-w-screen-md px-4 pt-1 mx-auto">
            <div className="mt-8">
              {posts.map((post) => <PostCard post={post} />)}
            </div>
          </main>

          <Footer />
        </main>
  );
}
