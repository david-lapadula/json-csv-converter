import Dropdown from "./components/Dropdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
            JSON CSV Converter
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Easily convert CSV to JSON or CSV to JSON. Copy and paste the data or load in a local file. Save the results. 
          </p>

          <Dropdown />
        </div>
    </main>
  )
}
