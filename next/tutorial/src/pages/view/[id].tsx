import axios from "axios";
import Item from "@/component/Item";
import { ItemInfo } from "..";
import Head from "next/head";
import { useEffect } from 'react'

const Post = ({ item }: { item: any }) => {
  const initialItem: ItemInfo = {
    id: "",
    image_link: "",
    name: "",
    price: "",
    category: "",
    product_type: "",
    description: ""
  }

  useEffect(() => {
    console.log(item);
  }, [])

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

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const response = await axios.get(apiUrl);
  const data: ItemInfo = response.data;

  return {
    props: {
      item: data,
    }
  }
}