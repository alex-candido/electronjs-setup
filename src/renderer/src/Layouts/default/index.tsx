import { Outlet } from 'react-router-dom'

import { DefaultLayoutContainer } from '../../components/DefaultLayoutContainer'
import Header from '../../components/ui/Header'

const DefaultLayout = () => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </DefaultLayoutContainer>
  )
}

export default DefaultLayout
