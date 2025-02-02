import { Geist, Geist_Mono, Kanit, } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from 'nuqs/adapters/next/pages'


const kanit = Kanit({
  weight: "200"
});


export default function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NuqsAdapter>
      <div className='absolute w-screen h-screen -z-50 bg-black bg-center blur-[4px]'>

      
      </div>
        {/* <!-- Backgroun1d decorative elements --> */}
        <div className="fixed inset-0 pattern-dots opacity-30 pointer-events-none"></div>
        <div className="fixed inset-0 pattern-grid opacity-20 pointer-events-none"></div>
        {/* <!-- Animated circles --> */}
        <div className="fixed -left-48 -top-48 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="fixed -right-48 -bottom-48 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      {children}
    </NuqsAdapter>
  );
}
