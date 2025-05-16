import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { User } from "@heroui/user";
import { Divider } from "@heroui/divider";
import NavigationButton from "../components/NavigationButton";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto">
      <div className="flex flex-row items-center justify-center mt-8 relative w-full">
        <NavigationButton text="Back" link="/" className="absolute left-0" />
        <h1 className="font-bold text-4xl">USERS</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <User name={user.name} description={user.email} />
            </CardHeader>
            <Divider className="mt-3" />
            <CardBody>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-500">ID: {user.id}</p>
                <p className="text-sm text-gray-500">Email: {user.email}</p>
                <p className="text-sm text-gray-500">Phone: {user.phone}</p>
                <p className="text-sm text-gray-500">Website: {user.website}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
