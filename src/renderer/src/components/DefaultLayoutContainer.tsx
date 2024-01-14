import { ComponentProps } from 'react'

export const DefaultLayoutContainer = ({ children }: ComponentProps<'div'>) => {
  return <div className={'h-[100vh] bg-[#15191E]'}>{children}</div>
}
