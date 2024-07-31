// 3. 最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它
import { AuthProvider } from '@/hooks/use-auth'
// 套用CartProvider，才能使用useCart獲得CartContext中的值
import { CartProvider } from '@/hooks/use-cart'
import NextTopLoader from 'nextjs-toploader'

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <AuthProvider>
      <CartProvider>
        <NextTopLoader color="purple" />
        {getLayout(<Component {...pageProps} />)}
      </CartProvider>
    </AuthProvider>
  )
}
