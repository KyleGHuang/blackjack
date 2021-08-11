import 'tailwindcss/tailwind.css'

export default function Navbar() {
    return (
    <div className="w-screen h-20 bg-white flex flex-row flex-inital gap-x-4 justify-center items-center text-white text-3xl">
        <button className="bg-red-400 rounded-lg h-3/4 w-1/3 shadow-lg
        active:bg-red-500 xl:w-1/4">
            Hit
        </button>
        <button className="bg-blue-400 rounded-lg h-3/4 w-1/3 shadow-lg
        active:bg-blue-500 xl:w-1/4">
            Stand
        </button>
    </div>
    )
}