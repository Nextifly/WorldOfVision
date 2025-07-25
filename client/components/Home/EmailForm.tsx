'use client'

import EmailFon from '@/assets/home/email_fon.png'
import AcceptGif from '@/assets/home/accept.gif'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const EmailForm = () => {
  const [email, setEmail] = useState<string>('')
  const [isAccept, setIsAccept] = useState<boolean>(false)

  return (
    <section className='px-10 py-12 max-[590px]:py-6 max-[930px]:px-4 relative'>
        <Image src={EmailFon} alt='...' className='size-full object-cover absolute top-0 left-0 bg-[#0A0A0A] -z-10' />
        <div className='flex justify-between items-end gap-3 max-[1060px]:items-center max-[590px]:block'>
            <div className="max-[590px]:mb-4">
              <h3 className="text-[14px] opacity-40 text-white mb-2">JOIN OUR NEWSLETTER</h3>
              <h2 className='text-white text-[32px] leading-[36px] max-[1060px]:text-2xl max-[1060px]:leading-7 max-[790px]:text-[18px] max-[790px]:leading-6'>Enter your e-mail and don’t miss<br className="max-[1060px]:hidden"/>any news or promotion from NAKED Optics</h2>
            </div>
            <form>
              <div className='flex gap-2 mb-2'>
                <input type="text" className='w-[338px] max-[590px]:w-full max-[790px]:w-[214px] h-[37px] pl-3 pr-2 outline-none text-white text-[14px] border-[0.5] rounded-[6px] border-white border-solid placeholder:text-white/50' placeholder='Add your email' maxLength={30} onChange={(e) => setEmail(e.target.value)} />
                <button className="cursor-pointer rounded-[4px] w-[94px] max-[590px]:min-w-[121px] max-[360px]:min-w-[90px] max-[360px]:w-[90px] h-[37px] flex justify-center items-center gap-2 bg-white font-medium text-[#0A0A0A]">Send<span>{`>`}</span></button>
              </div>
              <div className="flex gap-2">
                <div className={`size-4 border-1 border-solid border-white rounded-[4px] cursor-pointer`} onClick={() => setIsAccept(!isAccept)}>
                  {isAccept && <Image src={AcceptGif} alt='...' unoptimized />}
                </div>
                <h2 className="text-[12px] text-white">I accept the <Link href="#" className="underline">privacy policy</Link></h2>
              </div>
            </form>
        </div>
    </section>
  )
}

export default EmailForm