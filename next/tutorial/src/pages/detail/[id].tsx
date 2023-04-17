import axios from "axios";
import Item from "@/component/Item";
import { ItemInfo } from "..";
import Head from "next/head";
import { useEffect } from 'react'
import { useRouter } from "next/router";
import { Loader } from "semantic-ui-react";
import { GetServerSideProps } from "next";

const Post = ({ item }: { item: any }) => {

  const router = useRouter();

  console.log(router.isFallback);

  useEffect(() => {
    console.log(item);
  }, [])

  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description} />
      </Head>
      {item && <Item item={item} />}
    </>
  )
}

export default Post;

export async function getStaticPaths() {
  const apiUrl = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const response = await axios.get(apiUrl);
  const data = response.data;

  return {
    paths: data.map((item: any) => ({
      params: {
        id: item.id.toString(),
      }
    })),
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  let data;
  try {
    const response = await axios.get(apiUrl);
    data = await response.data;
  } catch (error) {

  };

  return {
    props: {
      item: data,
    }
  }
}