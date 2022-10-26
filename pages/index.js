import Head from "next/head";
import Link from "next/Link";
import Header from "./components/Header";
import Content from "./components/constent";
import useSWR from "swr";

export default function Home() {
  let title = "ともすた";
  // const { data, error } = useSWR("/api/message");
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  return (
    <Content>

      <Head>
        <title>{title}</title>
      </Head>
      <div class="flex flex-col items-center ">

      <p class="mt-8 text-3xl text-[#f87171] underline">Hello world!</p>
      
 <p class="mt-8">let</p> 
<button class="my-8
bg-indigo-500 sm:bg-green-400 md:bg-pink-300 lg:bg-blue-300 
p-7 hover:bg-gray-300 cursor-pointer
 text-xl text-white/[0.9] w-30 rounded-xl shadow-xl 
">button</button>
</div>
      <Header title={title} />
      {/* <p>{data.message}</p> */}
      <title>{title}</title>
      <p>学ぶちゃんと</p>
      <Link href="about/">
        <a>About</a>
      </Link>
     
    </Content>
  );
}
