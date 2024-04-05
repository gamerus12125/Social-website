import { Post } from "@/lib/types"

export const PostItem = ({post}: {post: Post}) => {
    return (
        <div className="flex flex-col gap-5 bg-indigo-500 rounded max-w-fit sm:min-w-96 mx-auto py-5 px-5">
            <h3 className="text-xl break-words text-center">
                {post.title}
            </h3>
            <p className="break-words">
                {post.description}
            </p>
            <span>
                Author: {post.author}
            </span>
        </div>
    )
}