import Link from 'next/link'
import { PropsWithChildren } from 'react'

type Props = {
	children: PropsWithChildren<string>
	link: string
}

const LinkButton = ({ children, link }: Props) => {
	return (
		<Link href={link} className='w-[245px] h-[58px] max-[768px]:h-[38px] max-[768px]:w-[160px] bg-white px-[16px] flex justify-between items-center rounded-[4px]'>
			<h2 className='uppercase text-[#0A0A0A]'>{children}</h2>
			<span>{`>`}</span>
		</Link>
	)
}

export default LinkButton
