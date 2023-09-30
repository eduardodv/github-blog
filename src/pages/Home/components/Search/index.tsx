import {
  FormContainer,
  Input,
  SearchContainer,
  SearchHead,
  SearchResults,
} from './styles'

import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchProps } from '../../../../interfaces/interfaces'
import { useState } from 'react'

import Skeleton from 'react-loading-skeleton'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search({ isLoading, totalPosts, fetchPosts }: SearchProps) {
  const [queryValueForResults, setQueryValueForResults] = useState('')

  const { register, handleSubmit, reset, formState } =
    useForm<SearchFormInputs>({
      resolver: zodResolver(searchFormSchema),
    })

  const { isSubmitting } = formState

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query)

    setQueryValueForResults(data.query)

    reset()
  }

  return (
    <SearchContainer>
      <SearchHead>
        <strong>Publicações</strong>
        {(!isLoading && (
          <span>
            {totalPosts} {totalPosts !== 1 ? 'publicações' : 'publicação'}
          </span>
        )) || <Skeleton width={100} />}
      </SearchHead>
      <FormContainer onSubmit={handleSubmit(handleSearchPosts)}>
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
          disabled={isSubmitting}
        />
      </FormContainer>
      {queryValueForResults && (
        <SearchResults>
          Resultados da busca por:{' '}
          <strong>&ldquo;{queryValueForResults}&rdquo;</strong>
          <button onClick={() => handleSearchPosts({ query: '' })}>
            Limpar
          </button>
        </SearchResults>
      )}
    </SearchContainer>
  )
}
