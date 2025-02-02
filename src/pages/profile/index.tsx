import Root from '@/app/root'
import Dash from '@/components/profile/dash'
import Sidebar from '@/components/profile/sidebar'
import Tabs from '@/components/profile/tabs'

function Profile() {
    return (
        <Root>
            {/* <header className='fixed left-0 p-4 w-full bg-black'>

            </header> */}
            <section className='flex w-screen h-screen'>
                {/* <!-- Animated circles --> */}
                <div className="fixed left-0 -top-48 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="fixed -right-48 -bottom-48 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <Sidebar />
                <main className='relative flex flex-col flex-grow gap-6 h-full overflow-y-auto p-7 px-10'>
                    {/* <!-- Backgroun1d decorative elements --> */}
                    <div className="absolute -z-50 inset-0 pattern-dots opacity-30 pointer-events-none"></div>
                    <div className="absolute -z-50 inset-0 pattern-grid opacity-20 pointer-events-none"></div>
                    <Tabs />
                    {/* <Dash /> */}
                </main>
            </section>
        </Root>
    )
}

export default Profile
