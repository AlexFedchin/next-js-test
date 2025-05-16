import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import NavigationButton from "../components/NavigationButton";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 },
  });
  const posts: Post[] = await res.json();

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto">
      <div className="flex flex-row items-center justify-center mt-8 relative w-full">
        <NavigationButton text="Back" link="/" className="absolute left-0" />
        <h1 className="font-bold text-4xl">POSTS</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h2>{post.title}</h2>
            </CardHeader>
            <Divider className="mt-3" />
            <CardBody>
              <p className="text-sm text-gray-500">{post.body}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
