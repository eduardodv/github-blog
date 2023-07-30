import { HeaderContent } from '../../components/HeaderContent'
import { Content } from './styles'

import ReactMarkdown from 'react-markdown'

export function Single() {
  return (
    <>
      <HeaderContent />
      <Content>
        <ReactMarkdown>
          **Programming languages all have built-in data structures, but these
          often differ from one language to another.** This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </ReactMarkdown>
      </Content>
    </>
  )
}
