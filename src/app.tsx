import './index.css'
import Header from './components/header';
import Footer from './components/footer';

export function App() {
  return (
    <>
      <Header/>
      <main class="flex-auto mx-4 flex flex-col justify-start items-center">
        <div className="max-w-[1240px] w-full min-h-[400px]">
        </div>
        </main>
      <Footer/>
    </>
  )
}
