import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { RiAppsFill } from "react-icons/ri";

function Dash() {
  return (
    <section className="flex w-full h-max gap-6">

      <div className="flex flex-col gap-3 w-[50%] min-h-56 h-max bg-black/75 text-neutral-200 rounded-lg px-8 py-5">
        <h1 className="flex items-center h-max font-bold">
          <FaBloggerB className="mr-2" />
          Recent blog
        </h1>
        <div className="w-full h-max">
          <div className="grid grid-cols-2 grid-rows-2 gap-1 w-[90%]">
            <Link href={'/1'} className="h-24 rounded-md overflow-hidden">
              <img src="https://picsum.photos/200/300?1" alt="Theme" className="w-full h-full transition-all duration-200 hover:scale-[120%]" />
            </Link>
            <Link href={'/2'} className="h-24 rounded-md overflow-hidden">
              <img src="https://picsum.photos/200/300?2" alt="Theme" className="w-full h-full transition-all duration-200 hover:scale-[120%]" />
            </Link>
            <Link href={'/3'} className="h-24 rounded-md overflow-hidden">
              <img src="https://picsum.photos/200/300?4" alt="Theme" className="w-full h-full transition-all duration-200 hover:scale-[120%]" />
            </Link>
            <Link href={'/4'} className="h-24 rounded-md overflow-hidden">
              <img src="https://picsum.photos/200/300?5" alt="Theme" className="w-full h-full transition-all duration-200 hover:scale-[120%]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col gap-3 w-[50%] min-h-56 h-max bg-black/70 text-neutral-200 rounded-lg px-8 py-5 pb-4">
        <div className='absolute top-0 left-0 w-full h-full -z-50 bg-[url("/bg.webp")] bg-center blur-[4px]'></div>
        <h1 className="flex items-center h-max font-bold">
          <BsHeart className="mr-2" />
          Favorite project
        </h1>
        <div className="w-full h-max">
          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">

            {/* Device 1 */}
            <div className="group relative [perspective:1000px]">
              <div className="relative w-full h-full rounded-xl bg-black/40 text-neutral-200 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                <div className="absolute w-full h-full flex flex-col items-center p-4 justify-start rounded-xl shadow-lg [backface-visibility:hidden]">
                  <div className="text-blue-400 text-3xl">
                    <RiAppsFill />
                  </div>
                  <h3 className="mt-2 text-lg">I don't know</h3>
                  <p className="text-green-400 text-sm">● Connected</p>
                </div>


                <div className="absolute w-full h-full bg-gray-100 flex items-center justify-center rounded-xl shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <img
                    src="/me.png"
                    alt="Device image"
                    className="rounded-xl w-full h-full"
                  />
                </div>

              </div>
            </div>

            {/* Device 2 */}
            <div className="group relative [perspective:1000px]">
              <div className="relative w-full h-full rounded-xl bg-black/40 text-neutral-200 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                <div className="absolute w-full h-full flex flex-col items-center p-4 justify-start rounded-xl shadow-lg [backface-visibility:hidden]">
                  <div className="text-blue-400 text-3xl">
                    <RiAppsFill />
                  </div>
                  <h3 className="mt-2 text-lg">I don't know</h3>
                  <p className="text-green-400 text-sm">● Connected</p>
                </div>


                <div className="absolute w-full h-full bg-gray-100 flex items-center justify-center rounded-xl shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <img
                    src="/me.png"
                    alt="Device image"
                    className="rounded-xl w-full h-full"
                  />
                </div>

              </div>
            </div>

            {/* Device 3 */}
            <div className="bg-black/40 p-4 rounded-xl shadow-lg text-white flex flex-col items-center">
              <div className="bg-black/40 p-4 rounded-xl shadow-lg text-white flex flex-col items-center justify-center">
                <div className="text-3xl">➕</div>
                <h3 className="mt-2 text-nowrap">Add project</h3>
              </div>
            </div>
          </div>

          <button className="mt-5 w-full max-w-2xl bg-black/40 text-white p-3 rounded-xl shadow-lg">
            View more projects
          </button>
        </div>
      </div>

    </section>
  )
}

export default Dash
