import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-600 grid grid-cols-12 gap-4 lg:gap-8 p-8 lg:p-12 h-screen'>
    <div className='lg:col-span-3 col-span-12 bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 lg:p-6'>      Sidebar</div>
    <div className='lg:col-span-9 col-span-12 bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 lg:p-6'>
    <Component {...pageProps} />
    </div>

  </div>
}

export default MyApp
