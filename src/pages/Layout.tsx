import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from 'antd-mobile'
const Layout: FC = () => {
  return (
    <>
      <div>Layout
        <Button color='warning'></Button>
      </div>
      <Outlet />
    </>

  )
}

export default Layout