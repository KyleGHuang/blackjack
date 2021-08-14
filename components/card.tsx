import "tailwindcss/tailwind.css";

export default function Card() {
  return (
    <div className="bg-white text-black w-40 h-56 rounded-lg p-2 px-3 font-semibold shadow-sm select-none">
      <div className="flex flex-col w-full h-full justify-between">

        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-col justify-start items-center">
            <div className="absolute">A</div>
            <div className="relative top-2 text-2xl">♠</div>
          </div>
        </div>

        <div className="flex justify-center items-center text-8xl">♠</div>

        <div className="flex flex-col items-start transform rotate-180">
          <div className="flex flex-col justify-start items-center">
            <div className="absolute">A</div>
            <div className="relative top-2 text-2xl">♠</div>
          </div>
        </div>
      </div>
    </div>
  )
}
