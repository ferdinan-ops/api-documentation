import * as React from 'react'
import { LeftBar } from '..'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <React.Fragment>
      {/* <HeaderMobile /> */}
      <section className="flex">
        <aside className="xl:flex-[1]">
          <LeftBar />
        </aside>
        <main className="xl:flex-[5] p-5 xl:p-0 max-w-full mt-[80px]">
          <Outlet />
        </main>
      </section>
    </React.Fragment>
  )
}
