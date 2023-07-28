import { getPosts } from "~/models/post.server"
import { useLoaderData } from "@remix-run/react"
import Post from "../components/post"

export async function loader() {
  const posts = await getPosts()
  console.log(posts);
  return posts.data
}

function Blog() {
  const posts = useLoaderData()

  return (
    <main className='contenedor'>
      <h2 className='heading'>Blog</h2>
      <div className='blog'>
      
        {posts.map(post => (
          <Post 
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
    </main>
  )
}

export default Blog
