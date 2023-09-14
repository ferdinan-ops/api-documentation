import * as React from 'react'

interface Props {
  ref: React.RefObject<HTMLElement>
}

export default function useOutsideClick({ ref }: Props) {
  const [isClick, setIsClick] = React.useState(false)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsClick(true)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return isClick
}
