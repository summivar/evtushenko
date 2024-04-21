import { AllPosts } from "../data/posts.constants"

export const PostLists = () => {
  return (
    <div className="flex flex-col justify-center align-center mx-auto">
      {AllPosts.map((post) => (
        <a
          className="w-100 mt-5 p-5 bg-white rounded-md hover:scale-110"
          href={post.link}
          key={post.name}
          target="blank"
        >
          <div className="flex flex-col">
            <span className="text-left font-bold text-xl">{post.name}</span>
            <span className="text-left text-gray-500 text-base">
              {post.brief}
            </span>
            <span className="text-left">Год: {post.year}</span>
            <hr className="w-100" />
          </div>
        </a>
      ))}
    </div>
  )
}
