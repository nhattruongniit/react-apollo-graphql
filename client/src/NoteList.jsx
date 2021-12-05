import { Link } from "react-router-dom";
import { Stack, Spinner, Heading } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';

import { UiNote } from './share-ui/UiNote';
import { ViewNoteButton } from './share-ui/ViewNoteButton';

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
  const { data, loading, error } = useQuery(ALL_NOTES_QUERY, {
    variables: {
      categoryId: category
    },
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all'
  });

  if(error && !data) return <Heading> Could not load notes. </Heading>

  if(loading) return <Spinner />

  const notes = data?.notes;
  return (
    <Stack spacing={4}>
      {notes?.map(note => (
        <UiNote 
          key={note.id}
          content={note.content}
          category={note.category.label}
        >
          <Link to={`/note/${note.id}`}>
            <ViewNoteButton />
          </Link>
        </UiNote>
      ))}
    </Stack>
  )
}

export default NoteList
