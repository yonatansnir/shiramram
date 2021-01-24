import Head from 'next/head'
import Categories from '../components/categories/Categories';
import Main from '../components/main/Main';
import LastProducts from '../components/products/LastProducts';
import WhatIs from '../components/whatIs/WhatIs';
import WriteMe from '../components/writeMe/WriteMe';


export default function Home() {
  return (
    <>
      <Head>
        <title>תחייכי את זה</title>
      </Head>
      <Main />
      <Categories />
      <LastProducts />
      <WhatIs />
      <WriteMe />
    </>
  )
}