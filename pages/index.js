import Head from "next/head";
import Link from "next/link";
import Header from "./components/Header";
import Content from "./components/constent";
import useSWR from "swr";

export default function Home() {
  let title = "ともすた";
  const fetcher =(url)=>fetch(url).then(res => res.json())
  const { data, error } = useSWR("/api/message",fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Content>

      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col items-center ">

      <p className="mt-8 text-3xl text-[#f87171] underline">Hello world!</p>
      
 <p className="mt-8">let</p> 
<button className="my-8
bg-indigo-500 sm:bg-green-400 md:bg-pink-300 lg:bg-blue-300 
p-7 hover:bg-gray-300 cursor-pointer
 text-xl text-white/[0.9] w-30 rounded-xl shadow-xl 
">button</button>
</div>
      <Header title={title} />
      <p>{data.message}</p>
      <title>{title}</title>
      <p>学ぶちゃんと</p>
      <Link href="about/">About
      </Link>
     
    </Content>
  );
}
