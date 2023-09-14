// import * as React from 'react'

import { UploadImg } from '../assets'
import Button from '../components/atoms/Button'
import { useTitle } from '../hooks'

export default function Dashboard() {
  useTitle('Dashboard')

  return (
    <section className="flex flex-col xl:p-10">
      <h1 className="text-3xl font-bold text-title hidden xl:flex">Selamat datang 👋</h1>
      <div className="flex flex-col min-h-[calc(100vh-40px)] xl:min-h-[calc(100vh-100px-36px)] justify-center items-center gap-5 xl:gap-8">
        <img src={UploadImg} alt="upload illustration" className="xl:w-[300px] w-8/12" />
        <span className="text-center w-10/12 xl:w-1/2 font-medium text-font text-sm xl:text-base">
          Silahkan upload file berekstensi *.json atau file export-an dari postman dengan menekan tombol dibawah ini
        </span>
        <Button variant="primary" className="px-5">
          Import JSON
        </Button>
      </div>
    </section>
  )
}
