import clsx from 'clsx'
import Icon from '../atoms/Icon'
import { HiCheck, HiOutlineExclamationTriangle } from 'react-icons/hi2'
import Button from '../atoms/Button'
import useDisableBodyScroll from '../../hooks/useDisableBodyScroll'

export interface DialogOptions {
  title: string
  description: string
  variant: 'success' | 'danger'
  submitText: string
  isLoading?: boolean
  catchOnCancel?: boolean
}

interface BaseDialogProps extends DialogOptions {
  open: boolean
  onSubmit: () => void
  onClose: () => void
}

export default function Dialog({ open, onSubmit, onClose, ...rest }: BaseDialogProps) {
  const { title, description, variant, submitText, isLoading = false } = rest

  useDisableBodyScroll(open)

  return (
    <section
      className={clsx(
        'fixed inset-0 z-[9999999] flex items-end justify-center p-4 transition-colors md:items-center',
        open ? 'visible bg-gray-900/75' : 'invisible'
      )}
    >
      <div
        className={clsx(
          'max-w-[486px] overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300',
          open ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="flex flex-col items-center gap-4 px-4 pb-4 pt-5 md:flex-row md:items-start md:gap-5 md:p-6">
          <Icon
            className={clsx(
              'h-12 w-12 flex-shrink-0 cursor-default text-2xl',
              variant === 'danger' && 'bg-red-100 text-red-600 hover:bg-red-100',
              variant === 'success' && 'bg-green-100 text-green-600 hover:bg-green-100'
            )}
          >
            {variant === 'danger' && <HiOutlineExclamationTriangle />}
            {variant === 'success' && <HiCheck />}
          </Icon>
          <div className="mt-1 text-center md:text-left">
            <h3 className="text-base font-bold capitalize leading-6 text-font md:text-lg">{title}</h3>
            <p className="mt-2 text-[13px] font-normal text-gray-500 md:text-sm">{description}</p>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-2 bg-gray-50 px-4 py-3 md:flex-row md:justify-end md:gap-3 md:px-6">
          <Button variant="outline" className="w-full px-6 md:w-fit md:text-xs" onClick={onClose}>
            Batal
          </Button>
          <Button
            variant={variant}
            className="w-full px-6 capitalize md:w-fit md:text-xs"
            onClick={onSubmit}
            loading={isLoading}
          >
            {submitText}
          </Button>
        </div>
      </div>
    </section>
  )
}
