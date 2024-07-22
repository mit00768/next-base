import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  // const [pData, setData] = useState('parent data')

  // 宣告一組專門要給Child B傳資料的狀態
  const [dataFromChild, setDataFromChild] = useState('')
  return (
    <>
      <h2>Parent(父母)</h2>
      {/* <ChildA pData={pData} /> */}
      <ChildA dataFromChild={dataFromChild}/>
      {/* c->P 用設定狀態的函式傳給子女元件 */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
