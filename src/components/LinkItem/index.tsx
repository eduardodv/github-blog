import { LinkItemContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faUpRightFromSquare,
  faArrowRotateLeft,
} from '@fortawesome/free-solid-svg-icons'

interface LinkItemProps {
  text: string
  link?: string
  newTab?: boolean
  iconType?: 'external' | 'back' | 'undo' | undefined
}

export function LinkItem({ text, link, newTab, iconType }: LinkItemProps) {
  return (
    <LinkItemContainer to={link || ''} target={newTab ? '_blank' : ''}>
      {iconType === 'back' && <FontAwesomeIcon icon={faAngleLeft} />}
      {text}
      {iconType === 'external' && (
        <FontAwesomeIcon icon={faUpRightFromSquare} />
      )}
      {iconType === 'undo' && <FontAwesomeIcon icon={faArrowRotateLeft} />}
    </LinkItemContainer>
  )
}
