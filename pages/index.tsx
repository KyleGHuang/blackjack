import 'tailwindcss/tailwind.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-green-600">
      <div className="fixed bottom-0">
        <Navbar />
      </div>
    </div>
  )
}
