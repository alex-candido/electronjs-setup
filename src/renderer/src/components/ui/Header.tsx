import { ComponentProps, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import getBooks from '../../redux/actions/books/get-all-books'
import { searchBookItems } from '../../redux/slices/booksSlice'
import { AppDispatch } from '../../redux/store'
import DropDown from './DropDown'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = ({ ...props }: ComponentProps<'header'>) => {
  const dispatch = useDispatch<AppDispatch>()

  const [body, setBody] = useState('')

  const onSubmit = useCallback(async () => {
    try {
      const data = await getBooks({ search: body })

      dispatch(searchBookItems(data.items))
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }, [body])

  return (
    <header {...props} className="electron-header-component">
      <div className="header bg-[#303846]">
        <div className="navbar bg-base-100 !justify-around">
          <div className="navbar-start w-[35%]">
            <DropDown />
            <Logo />
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="join">
              <input
                onChange={(e) => setBody(e.target.value)}
                value={body}
                className="input input-bordered join-item"
                placeholder="Search books"
              />
              <button className="btn join-item rounded-r-full" onClick={onSubmit}>
                Search
              </button>
            </div>
          </div>
          <div className="navbar-end w-[35%]">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
