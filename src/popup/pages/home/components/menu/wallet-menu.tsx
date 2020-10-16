import classNames from 'classnames'
import { FaButton, SecondaryButton } from 'popup/components/button'
import { useTheme } from 'popup/services'
import { fade } from 'popup/services/utils'
import React from 'react'

interface Props {
  showPanel: () => void
}
export const WalletMenu: React.FC<Props> = ({ showPanel }) => {
  const theme = useTheme()
  return (
    <>
      <SecondaryButton
        textColor={theme.palette.white}
        backgroundColor={fade(theme.palette.white, 0.2)}
        menuIconProps={{ iconName: 'ChevronDown' }}
        coverSize="small"
        rounded
        onClick={showPanel}
      >
        DAppChain
      </SecondaryButton>
      <SecondaryButton
        textColor={theme.palette.white}
        backgroundColor={fade(theme.palette.white, 0.2)}
        menuIconProps={{ iconName: 'ChevronDown' }}
        coverSize="small"
        spacious
        rounded
      >
        USD
      </SecondaryButton>
      <div className={classNames('flex-grow')} />
      <FaButton iconProps={{ iconName: 'MoreVertical' }} iconColor={theme.palette.white} />
    </>
  )
}
