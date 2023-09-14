import { loginValidation } from '../utils/validations/auth.validation'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom'

import Password from '../components/forms/Password'
import Button from '../components/atoms/Button'
import Input from '../components/forms/Input'
import { useTitle } from '../hooks'

export default function Login() {
  const navigate = useNavigate()
  useTitle('Masuk')

  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(loginValidation)
  })
  const { handleSubmit } = methods

  const handleLoginLocal = (values: { email: string; password: string }) => {
    console.log(values)
    navigate('/')
  }

  return (
    <section className="gap-7 xl:w-[55%] xl:gap-8 flex w-full flex-col px-[18px] text-font xl:px-0">
      <div className="flex flex-col">
        <h1 className="text-[28px] text-title font-bold xl:text-[36px]">Masuk</h1>
        <p className="text-[15px] font-medium text-font/60 xl:text-sm">
          Selamat datang di API Doc, silahkan isi data yang diperlukan untuk bisa masuk ke aplikasi
        </p>
      </div>

      <FormProvider {...methods}>
        <form className="flex flex-col gap-4 xl:gap-5" onSubmit={handleSubmit(handleLoginLocal)}>
          <Input id="email" label="Email" placeholder="name@email.com" />
          <Password id="password" label="Kata Sandi" />
          <Button variant="primary">Masuk</Button>
        </form>
      </FormProvider>

      <div className="text-center text-sm font-semibold xl:text-base">
        <span>Belum punya akun? </span>
        <Link to="/register" className="text-primary hover:underline">
          Daftar sekarang, gratis!
        </Link>
      </div>
    </section>
  )
}
