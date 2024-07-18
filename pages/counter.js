// 模組系統導入(部分or多重導入)
import { useState } from 'react'

// 1. 元件一定要預設導出
// 2. 元件的函式名稱一定要英文開頭大寫(大駝峰命名)
// 3. 元件函式並非一般函式，實際上是"純函式(purefunction)"的設計
export default function Counter() {
  // 陣列解構賦值語法(設計為陣列是為了方便命名)
  // [獲得值的變數, 設定值的方法] = useState(初始化值)
  const [total, setTotal] = useState(0)

  // 函式型元件的return相當於類別型元件的render方法
  // <>...</> 只有開頭和結尾的標記是jsx中特有的標記(實際上是一個名為Fragment(片段)的元件)
  return (
    <>
      <h1>計數器</h1>
      {/* 以下加上花括號是為了要在jsx語法中嵌入js的值或表達式 */}
      <h1>{total}</h1>
      <button
        // onClick是react內部加入的"人造(synthetic)事件"屬性
        // 相當於由react在執行前協助進行addEventListener
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
    </>
  )
}
