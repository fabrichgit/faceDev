import { BsFacebook, BsGithub, BsTwitterX } from "react-icons/bs"

function Sidebar() {
    return (
        <aside className='w-80 h-full overflow-y-auto p-5 bg-black text-neutral-200'>
            <div className="w-full h-56 overflow-hidden rounded-xl">
                <img src="./me.png" alt="" className="w-full h-auto" />
            </div>
            <div className="flex flex-col gap-1 py-5">
                <h1 className="font-bold text-2xl">Fabrich Vohanson</h1>
                <h2 className="text-lg text-gray-500">dev utlimate</h2>
            </div>
            <div className="flex items-center gap-3 text-blue-400">
                <BsGithub className="w-5 h-5" />
                <BsFacebook className="w-5 h-5" />
                <BsTwitterX className="w-5 h-5" />
            </div>

            <div className="mx-auto p-5 py-10">
                <div className="relative border-l border-gray-200">
                    <div className="mb-10 ml-8">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white/10 dark:ring-gray-900 dark:bg-blue-900">
                            <img className="saturate-200 rounded-full shadow-lg" src={`https://api.dicebear.com/9.x/rings/svg?seed=${'Brooklynn'}`} alt="Timeline 1" />
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold">Project Launch</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 13, 2024</time>
                    </div>
                    <div className="mb-10 ml-8">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white/10 dark:ring-gray-900 dark:bg-blue-900">
                            <img className="saturate-200 rounded-full shadow-lg" src={`https://api.dicebear.com/9.x/rings/svg?seed=${'9'}`} alt="Timeline 2" />
                        </span>
                        <h3 className="mb-1 text-lg font-semibold">Version 2.0</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 15, 2024</time>
                    </div>
                    <div className="mb-10 ml-8">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white/10 dark:ring-gray-900 dark:bg-blue-900">
                            <img className="saturate-200 rounded-full shadow-lg" src={`https://api.dicebear.com/9.x/rings/svg?seed=${'9'}`} alt="Timeline 2" />
                        </span>
                        <h3 className="mb-1 text-lg font-semibold">Version 2.0</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 15, 2024</time>
                    </div>
                </div>
            </div>

        </aside>
    )
}

export default Sidebar
