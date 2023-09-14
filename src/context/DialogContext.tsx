import * as React from 'react'
import Dialog, { DialogOptions } from '../components/organisms/Dialog'

const DialogContext = React.createContext<(options: DialogOptions) => Promise<void>>(Promise.reject)

// eslint-disable-next-line react-refresh/only-export-components
export const useDialog = () => React.useContext(DialogContext)

export default function DialogContextProvider({ children }: { children: React.ReactNode }) {
  const [dialogState, setDialogState] = React.useState<DialogOptions | null>(null)

  const awaitingPromiseRef = React.useRef<{
    resolve: () => void
    reject: () => void
  }>()

  const openConfirmation = (options: DialogOptions) => {
    setDialogState(options)
    return new Promise<void>((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject }
    })
  }

  const handleClose = () => {
    if (dialogState?.catchOnCancel && awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject()
    }

    setDialogState(null)
  }

  const handleSubmit = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve()
    }

    setDialogState(null)
  }

  return (
    <>
      <DialogContext.Provider value={openConfirmation} children={children} />

      <Dialog
        open={Boolean(dialogState)}
        onSubmit={handleSubmit}
        onClose={handleClose}
        {...(dialogState as DialogOptions)}
      />
    </>
  )
}
