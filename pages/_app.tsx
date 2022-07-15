import '../styles/globals.css'
import Sidebar from '../components/sidebar'
import About from '../components/dashboard'

function MyApp(){
  return <div>

  <div className='bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-600 grid grid-cols-12 gap-4 lg:gap-8 p-8 lg:p-12 h-screen'>
    <div className='lg:col-span-3 col-span-12  bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 lg:p-6'>
      
      < Sidebar/>
      
    </div>
    <div className='lg:col-span-9 col-span-12 bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 lg:p-6'>
    < About/>
    </div>
    </div>
  </div>
}

export default MyApp
