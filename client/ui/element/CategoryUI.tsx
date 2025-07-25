import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface ICategory {
    children: PropsWithChildren<string>;
    img: StaticImageData;
    link: string;
}

const CategoryUI = ({children, img, link}: ICategory) => {
  return (
    <Link href={link} className='flex flex-col justify-center items-center gap-[17px] h-[73px] min-w-[87px] snap-center'>
        <Image src={img} alt='...' className='w-full h-[38px]' />
        <h2 className='text-[#888888] text-[13px]'>{children}</h2>
    </Link>
  )
}

export default CategoryUI