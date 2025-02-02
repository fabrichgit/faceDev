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
      <div className='absolute w-screen h-screen -z-50 bg-black'>
      </div>
        
      {children}
    </NuqsAdapter>
  );
}
