import Image from 'next/image'
import axios from 'axios'
import { QueryClient, dehydrate, useQuery } from 'react-query'
import { Fragment } from 'react'

interface User {
  userId: number,
  userName: string,
  userHobby: string
}


const API_URL = "http://localhost:8080/users"
const getUserInfo = async () => {
  const { data } = await axios.get<User[]>(API_URL);
  return data;
}

export default function Home() {

  const { data: userList, isLoading, isError, error } = useQuery<User[], Error>(['user'], getUserInfo, { refetchOnWindowFocus: false, staleTime: 10 * 1000, cacheTime: 30 * 1000, refetchInterval: 30 * 1000 })
  console.log(userList);

  return (
    <div className='text-20'>
      {userList?.map((userInfo) => (
        <Fragment key={userInfo.userId}>
          <div>id: {userInfo.userId}</div>
          <div>취미: {userInfo.userHobby}</div>
          <div>이름: {userInfo.userName}</div>
          <hr />
        </Fragment>
      ))}
    </div>
  )
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['user'], getUserInfo);
  return {
    props: {
      dehydratedProps: dehydrate(queryClient),
    }
  }
}