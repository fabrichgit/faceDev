"use client"
import { useQueryState } from 'nuqs'
import Markdown from 'react-markdown'
import { GrCatalog } from "react-icons/gr";
import { RiAppsFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { FaBloggerB } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';

const activeTab = "inline-flex text-nowrap px-4 border border-blue-500/50 rounded-lg bg-black border border-blue-500/50rounded-lg shadow dark:bg-gradient-to-br dark:text-neutral-300 dark:from-gray-800 dark:to-gray-700";
const noActiveTab = "";

function Tabs() {
    const [tab, setTab] = useQueryState('tab')

    return (
        <div className="relative flex flex-col rounded-lg p-6 pr-0 pt-0">
            {/* Sidebar */}
            <div className="w-full">
                <div>
                    <div className="text-muted-foreground inline-flex h-14 items-center justify-center md:gap-4 gap-2 rounded-xl text-neutral-200 p-2 px-0 mb-6">
                        <button
                            className={`group relative w-full flex items-center justify-end p-2
                      transition-all duration-200 cursor-pointer
                      ${tab === "Catalog" ? activeTab : noActiveTab}`}
                            onClick={() => setTab("Catalog")}
                        >
                            <GrCatalog className="md:mr-3 h-4 w-4" />
                            <span className="hidden md:block font-medium">Catalog</span>
                        </button>
                        <button
                            onClick={() => setTab("Project")}
                            className={`group relative w-full flex items-center p-2
                      transition-all duration-200 cursor-pointer
                      ${tab === "Project" ? activeTab : noActiveTab}`}
                        >
                            <RiAppsFill className="md:mr-3 h-4 w-4" />
                            <span className="hidden md:block font-medium">Project</span>
                        </button>
                        <button
                            className={`group relative w-full flex items-center justify-center p-2
                      transition-all duration-200 cursor-pointer text-center
                      ${tab === "Skill" ? activeTab : noActiveTab}`}
                            onClick={() => setTab("Skill")}
                        >
                            <GiSkills className="md:mr-3 h-4 w-4" />
                            <span className="hidden md:block font-medium text-center">Skills</span>
                        </button>
                        <button
                            className={`group relative w-full flex items-center justify-center p-2
                      transition-all duration-200 cursor-pointer
                      ${tab === "Blog" ? activeTab : noActiveTab}`}
                            onClick={() => setTab("Blog")}
                        >
                            <FaBloggerB className="md:mr-3 h-4 w-4" />
                            <span className="hidden md:block font-medium">Blog</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Main Content */}
            {(() => {
                switch (tab) {
                    case 'Catalog':
                        return <Catalog/>
                        break;
                
                    default:
                        break;
                }
            })()}
        </div>
    );
}

export default Tabs


function Catalog() {

    const [data, set] = useState<string>()

    useEffect(() => {
        (async function () {
            const test = await fetch('/text')
            const t = await test.text()
            console.log(t);
            set(t)
        })()
    }, [])

    return (
        <div className="flex-1">
            <div className="">
                <div className="text-neutral-300">
                    {/* En-tête avec nom et pseudo */}
                    {/* <div className="text-center mb-8">
                                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Jean Dupont</h1>
                                <p className="text-xl text-gray-500 mt-2 font-medium">@jeandcode</p>
                            </div> */}
                    {/* Professions */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Professions
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            <div className="relative flex gap-3 bg-black/70 text-neutral-200 rounded-lg px-8 py-5 pb-4">
                                <div className='absolute top-0 left-0 w-full h-full -z-50  bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 bg-center blur-[2px]'></div>
                                <span>Développeur Frontend</span>
                            </div>
                            <div className="relative flex gap-3 bg-black/70 text-neutral-200 rounded-lg px-8 py-5 pb-4">
                                <div className='absolute top-0 left-0 w-full h-full -z-50 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 bg-center blur-[2px]'></div>
                                <span>UI/UX Designer</span>
                            </div>
                            <div className="relative flex gap-3 bg-black/70 text-neutral-200 rounded-lg px-8 py-5 pb-4">
                                <div className='absolute top-0 left-0 w-full h-full -z-50  bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 bg-center blur-[2px]'></div>
                                <span>Développeur Frontend</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full rounded-lg bg-zinc-950 block p-7 sm shadow-blue-500">
                <Markdown className="prose prose-lg w-full block">
                    {/* {test} */}
                    {data}
                </Markdown>
            </div>
        </div>
    )
}