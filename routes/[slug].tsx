import { Handlers } from "$fresh/server.ts";
import { getPost, Post } from "@/utils/posts.ts";
import { PageProps } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import Footer from "../components/footer.tsx";
import Tag from "../components/tag.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <header className="px-3 py-3 bg-green-200 h-16 flex items-center">
        <div className="px-4 w-screen-md">
          <a href="/" className="text-2xl font-bold hover:text-underline">X-writing</a>
        </div>
      </header>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <h1 class="text-5xl font-bold">{post.title}</h1>
        <div class="mt-4 flex justify-between">
          <div class="flex gap-4">
            {
              (post.categories||[]).map(label=><Tag label={label} />)
            }
          </div>

          <time className="text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{ __html: render(post.content) }}
        />
        <Footer />
      </main>
    </>
  );
}
