import { FormContainer, Input, SearchContainer, SearchHead } from './styles'

import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearch(data: SearchFormInputs) {
    console.log(data)
  }

  return (
    <SearchContainer>
      <SearchHead>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </SearchHead>
      <FormContainer onSubmit={handleSubmit(handleSearch)}>
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </FormContainer>
    </SearchContainer>
  )
}
