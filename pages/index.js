import Head from "next/head";
import Link from "next/Link";
import Header from "./components/Header";
import Content from "./components/constent";
import useSWR from "swr";

export default function Home() {
  let title = "ともすた";
  const{data,error} =useSWR('/api/message')
  if(error)return<div>failed to load</div>
  if(!data)return<div>loading...</div>

  return (
    <Content>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} />
      <p>{data.message}</p>
      <title>{title}</title>
      <p>学ぶちゃんと</p>
      <Link href="about/">
        <a>About</a>
      </Link>
      <style jsx>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
    </Content>
  );
}
