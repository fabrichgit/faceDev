import Root from '@/app/root'
import Dash from '@/components/profile/dash'
import Sidebar from '@/components/profile/sidebar'
import Tabs from '@/components/profile/tabs'
import React from 'react'

function Profile() {
    return (
        <Root>
            {/* <header className='fixed left-0 p-4 w-full bg-black'>

            </header> */}
            <section className='flex w-screen h-screen'>
                <Sidebar/>
                <main className='flex flex-col flex-grow gap-6 h-full overflow-y-auto p-7'>
                    <Dash/>
                    <Tabs/>
                </main>
            </section>
        </Root>
    )
}

export default Profile
