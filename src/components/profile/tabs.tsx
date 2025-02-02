"use client"
import { useQueryState } from 'nuqs'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { GrCatalog } from "react-icons/gr";
import { RiAppsFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { FaBloggerB } from "react-icons/fa";

const activeTab = "inline-flex text-nowrap px-4 border border-blue-500/50 rounded-lg bg-black border border-blue-500/50rounded-lg shadow dark:bg-gradient-to-br dark:text-neutral-300 dark:from-gray-800 dark:to-gray-700";
const noActiveTab = "";

function Tabs() {
    const [tab, setTab] = useQueryState('tab')

    return (
        <div className="relative flex flex-col rounded-lg p-6">
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
            <div className="flex-1">
                <div className="w-full rounded-lg bg-black/50  border-blue-600 block p-7 shadow-sm shadow-blue-500">
                    <Markdown className="prose prose-lg w-full block">
                        {`
# Hello, world!
Here is some [GitHub-flavored Markdown][GFMD],
rendered with the \`\`\`Markdown\`\`\` component.

## Margins are stripped, by default
Normally, 4 leading spaces denote a code block
(similar to a triple-backtick line).

[GFMD]: https://github.github.com/gfm/
`}
                    </Markdown>
                </div>
            </div>
        </div>
    );
}

export default Tabs
