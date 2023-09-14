import * as React from 'react'
import clsx from 'clsx'
import { HiOutlineShare, HiOutlineTrash } from 'react-icons/hi2'
import { useDialog } from '../../context/DialogContext'
import Modal from './Modal'

interface SettingsProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function Settings({ isOpen, setIsOpen }: SettingsProps) {
  const [isShowModal, setIsShowModal] = React.useState(false)
  const dialog = useDialog()

  const handleDelete = () => {
    dialog({
      title: 'Hapus Dokumentasi',
      description: 'Apakah Anda yakin ingin menghapus proyek dokumentasi api dari TAMARA?',
      variant: 'danger',
      submitText: 'Delete'
    }).then(() => alert('deleted'))
  }

  return (
    <React.Fragment>
      <ul
        className={clsx(
          'absolute top-[110%] right-0 bg-white shadow-md text-base rounded-md font-semibold text-title overflow-hidden',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <li
          className="px-5 py-2 hover:bg-slate-200 flex items-center gap-4 cursor-pointer"
          onClick={() => {
            setIsOpen(false)
            setIsShowModal(true)
          }}
        >
          <HiOutlineShare />
          <span>Share</span>
        </li>
        <li
          className="px-5 py-2 text-red-500 hover:bg-slate-200 flex items-center gap-4 cursor-pointer"
          onClick={handleDelete}
        >
          <HiOutlineTrash />
          <span>Delete</span>
        </li>
      </ul>
      <Modal isShow={isShowModal} setIsShow={setIsShowModal} />
    </React.Fragment>
  )
}
