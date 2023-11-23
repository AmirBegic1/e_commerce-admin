import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import Layout from "@/components/Layout";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>Hello, {session?.user?.name}</h2>
        <div className="flex bg-gray-300 text-black gap-1 rounded-lg">
          <img src={session?.user?.image} className="w-6 h-6 "></img>
          <span className="py-1 px-2"> {session?.user?.name}</span>
     
        </div>
      </div>
    </Layout>
  );
}
