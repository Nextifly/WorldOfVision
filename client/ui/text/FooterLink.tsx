import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface ILink {
    children: PropsWithChildren<string>
    link?: string
}

const FooterLink = ({children, link}: ILink) => {
  return <Link href={link ? link : "#"} className='text-[#E0E0E0] max-[866px]:text-[14px]'>{children}</Link>
}

export default FooterLink