import { Stack } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';


import { UiNote } from './share-ui/UiNote';

const ALL_NOTES_QUERY = gql`
  query GetAllNotes($categoryId: String) {
    notes(categoryId: $categoryId) {
      id
      content
      category {
        id
        label
      }
    }
  }
`

function NoteList({ category }) {
  const { data } = useQuery(ALL_NOTES_QUERY, {
    variables: {
      categoryId: category
    },
    fetchPolicy: 'cache-and-network'
  });
  const notes = data?.notes;
  return (
    <Stack spacing={4}>
      {notes?.map(note => (
        <UiNote 
          key={note.id}
          content={note.content}
          category={note.category.label}
        />
      ))}
    </Stack>
  )
}

export default NoteList
