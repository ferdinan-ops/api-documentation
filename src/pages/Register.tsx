import { Link, useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerValidation } from '../utils/validations/auth.validation'
import Input from '../components/forms/Input'
import Button from '../components/atoms/Button'
import Password from '../components/forms/Password'
import { useTitle } from '../hooks'

export default function Register() {
  const navigate = useNavigate()
  useTitle('Daftar')

  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(registerValidation)
  })
  const { handleSubmit } = methods

  const handleRegister = (values: { username: string; email: string; password: string; confirmPassword: string }) => {
    console.log(values)
    navigate('/')
  }

  return (
    <section className="gap-7 xl:w-[55%] xl:gap-8 flex w-full flex-col px-[18px] text-font xl:px-0">
      <div className="flex flex-col">
        <h1 className="text-[28px] text-title font-bold xl:text-[36px]">Daftar</h1>
        <p className="text-sm font-medium text-font/50 xl:text-[15px]">
          Silahkan isi data yang diperlukan dibawah ini untuk membuat akun
        </p>
      </div>

      <FormProvider {...methods}>
        <form className="flex flex-col gap-4 xl:gap-5" onSubmit={handleSubmit(handleRegister)}>
          <Input id="username" label="Username" placeholder="John Doe" />
          <Input id="email" label="Email" placeholder="name@email.com" />
          <Password id="password" label="Password" />
          <Password id="confirmPassword" label="Konfirmasi Kata Sandi" />
          <Button variant="primary">Daftar</Button>
        </form>
      </FormProvider>

      <div className="text-center text-sm font-semibold text-font xl:text-base">
        <span>Sudah punya akun? Ayo </span>
        <Link to="/login" className="text-primary hover:underline">
          Masuk!
        </Link>
      </div>
    </section>
  )
}
