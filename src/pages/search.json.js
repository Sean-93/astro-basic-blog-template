import { getCollection } from "astro:content";

async function getPosts() {
    const posts = (await getCollection("archive")).sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());

    return posts.map((post) => ({
        slug: post.slug,
        title: post.data.title,
        author: post.data.author,
        description: post.data.description,
        date: post.data.date,
        ogImage: post.data.ogImage,
    }))
}

export async function GET({ }) {
    return new Response(JSON.stringify(await getPosts()), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        }
    })
}