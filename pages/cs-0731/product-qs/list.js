import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function List() {
  // 注意1: 初始值至少要空陣列，初次render是用初始值
  // 注意2: 應用執行過程中，一定要保持狀態資料類型都是陣列
  const [products, setProducts] = useState([])

  // 向伺服器fetch獲取資料
  const getProducts = async () => {
    const apiURL =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products123'

    // 在async-await語法中養成使用try...catch的習慣
    try {
      const res = await fetch(apiURL)
      const data = await res.json()

      // console.log(data)

      // 設定到狀態中 ==> 觸發re-render(進入update階段)
      // 維持設定到狀態中都一定是陣列資料類型
      if (Array.isArray(data)) {
        setProducts(data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式2 didMount
  // 首次render之後(after)執行一次，之後不會再執行
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        {/* 可以用以下語法來保護以免出錯，但它是一種治標非治本的語法 
        products && products.map(...)
        或
        products?.map(...)
         */}
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              {/* 查詢字串版本，網址上會有?productCode=XXX */}
              <Link href={`/cs-0731/product-qs/detail?productCode=${v.id}`}>
                {v.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
