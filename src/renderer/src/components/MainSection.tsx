import { ComponentProps } from 'react'

const MainSection = ({ children }: ComponentProps<'div'>) => {
  return <div className="container mx-auto py-10 px-8">{children}</div>
}

export default MainSection
