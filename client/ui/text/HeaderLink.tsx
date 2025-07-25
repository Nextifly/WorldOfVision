import React, { PropsWithChildren } from 'react'

interface ILink {
    children: PropsWithChildren<String>
}

const HeaderLink = ({children}: ILink) => {
  return <h2 className='uppercase font-medium max-[872px]:text-[14px] cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(135deg,#FF7324_14.84%,#EE3B28_35.81%,#DA1500_51.16%,#EE3B28_67.63%,#FEA14A_86.72%)]'>{children}</h2>
}

export default HeaderLink