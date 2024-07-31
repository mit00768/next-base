import React from 'react'

export default function Html5ValidForm() {
  return (
    <>
      <h1>HTML5表單驗證範例</h1>
      <hr />
      {/* 需要在form標記中才會有作用 */}
      <form>
        <div>
          姓名: <input type="text" required />
        </div>
        <div>
          電子郵件: <input type="email" required />
        </div>
        <div>
          出生年月日:
          <input type="date" min="1900-01-01" max="2021-01-01" required />
        </div>
        <div>
          手機號碼:
          <input
            type="text"
            maxlength="11"
            pattern="09\d{2}-\d{6}"
            required
            placeholder="格視為09xx-xxxxxx"
          />
        </div>
        {/* 確認密碼與密碼欄位，因為是跨欄位比對檢查，HTML5表單驗證不透過JS是無法達成 */}
        <div>
          密碼: <input type="password" minLength={6} maxLength={10} required />
        </div>
        {/* 在form標記中使用button記得寫類型(type)屬性，原因是預設是subnit */}
        <button type="submit">送出</button>
      </form>
    </>
  )
}
