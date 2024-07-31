import { useState } from 'react'

export default function LoginForm() {
  // 狀態使用物件類型，物件中的屬性名稱對應到欄位的名稱(name屬性)
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  // 記錄錯誤訊息用
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  // 呈現密碼用
  const [show, setShow] = useState(false)

  // 多個欄位共用的事件處理函式
  const handleFieldChange = (e) => {
    // 可以用e.target來觀察或是判斷是哪個欄位觸發事件
    console.log(e.target.type, e.target.name, e.target.value)

    // es6中的特性: computed property names(計算得出來的屬性名稱)
    // [e.target.name]: e.target.value
    // ^^^^^^^^^^^^^^^ 這裡可以代入值或表達式，計算出物件的屬性名稱(字串值)
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // 表單提交事件處理函式
  const handleSubmit = (e) => {
    // 一開始要先阻擋表單預設行為
    // 預設行為: action=目前網址，method=get
    e.preventDefault()

    // ↓↓↓ 表單各欄位檢查 ---START---
    // 建立一個新的錯誤訊息物件
    const newErrors = { username: '', password: '' }

    if (user.username === '') {
      newErrors.username = '帳號為必填'
    }

    if (user.password === '') {
      newErrors.password = '密碼為必填'
    }

    // 檢查完成設定到錯誤訊息呈現狀態中
    setErrors(newErrors)

    // newErrors物件中如果有屬性值不是空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // ↑↑↑ 表單各欄位檢查 ---END---
    if (hasErrors) {
      alert('目前有檢查到錯誤')
      return // 在函式內部作流程控制，執行到這行會跳出函式
    }

    // 完全沒錯誤才會執行到這行
    alert('檢查沒問題，送到伺服器')
  }

  return (
    <>
      <h1>會員登入表單</h1>
      <hr />
      {/* 使用form標記時，必要每個欄位要給name屬性 */}
      <form onSubmit={handleSubmit}>
        <div>
          帳號:{' '}
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleFieldChange}
          />
        </div>
        <div className="error">{errors.username}</div>
        <div>
          密碼:{' '}
          <input
            type={show ? 'text' : 'password'}
            name="password"
            value={user.password}
            onChange={handleFieldChange}
          />
          <input
            type="checkbox"
            checked={show}
            onChange={() => {
              setShow(!show)
            }}
          />
          顯示密碼
        </div>
        <div className="error">{errors.password}</div>
        <div>
          {/* 建議在form標記中寫button要加type */}
          <button type="submit">登入</button>
        </div>
      </form>
      <style jsx>
        {`
          .error {
            color: red;
            font-size: 12px;
            height: 16px;
          }
        `}
      </style>
    </>
  )
}
