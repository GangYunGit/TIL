import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from "axios";
import ItemList from '@/component/ItemList';
import { Header, Divider, Loader } from 'semantic-ui-react'

const inter = Inter({ subsets: ['latin'] })

export interface ItemInfo {
  id: string;
  image_link: string;
  name: string;
  price: string;
  category: string;
  product_type: string;
  description: string;
}

export default function Home() {

  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const [list, setList] = useState<ItemInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function getApi() {
    axios.get(API_URL).then((response) => {
      console.log(response);
      setList(response.data);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <div>
      <Head>
        <title>Home | 이강윤</title>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 20 }}>베스트 상품</Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Divider />
          <Header as="h3">신상품</Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
        </>
      )}
    </div>
  )
}
