import { ComponentProps } from 'react'
import logo from '../../assets/img/electron-logo.png'

const Logo = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props} className="electron-logo-component">
      <div className="logo">
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="electronjs" className="h-10 w-10" />
        </a>
      </div>
    </div>
  )
}

export default Logo
