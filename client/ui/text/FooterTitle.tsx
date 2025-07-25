import { PropsWithChildren } from 'react'

interface ITitle {
    children: PropsWithChildren<string>;
    select?: boolean;
}

const FooterTitle = ({children, select}: ITitle) => {
  return <h2 className={`text-[22px] font-medium text-white mb-[18px] max-[866px]:text-[18px] max-[866px]:mb-3 ${select && "max-[514px]:mb-0"}`}>{children}</h2>
}

export default FooterTitle