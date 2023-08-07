import { FormContainer, Input, SearchContainer, SearchHead } from './styles'

import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchProps } from '../../../../interfaces/interfaces'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search({ totalPosts, fetchPosts }: SearchProps) {
  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query)
    reset()
  }

  return (
    <SearchContainer>
      <SearchHead>
        <strong>Publicações</strong>
        <span>
          {totalPosts} {totalPosts !== 1 ? 'publicações' : 'publicação'}
        </span>
      </SearchHead>
      <FormContainer onSubmit={handleSubmit(handleSearchPosts)}>
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </FormContainer>
    </SearchContainer>
  )
}
