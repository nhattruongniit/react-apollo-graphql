import { gql, useMutation, useQuery } from "@apollo/client";
import { Spinner } from "@chakra-ui/spinner";
import { useParams } from "react-router-dom";
import { UiEditNote } from "./share-ui/UiEditNote";


const GET_NOTE = gql`
  query GetNote($id: String!) {
    note(id: $id) {
      id 
      content
    }
  }
`

export default function EditNote() {
  const { noteId } = useParams();

  const { data } = useQuery(GET_NOTE, {
    variables: {
      id: noteId
    }
  })

  const [updateNote, { loading }] = useMutation(gql`
    mutation UpdateNote($id: String!, $content: String!) {
      updateNote(id: $id, content: $content) {
        successful 
      }
    }
  `)

  return (
    <UiEditNote
      isSaving={loading}
      onSave={newContent => {
        updateNote({
          variables: {
            id: noteId,
            content: newContent
          }
        })
      }}
      note={data?.note}
    />
  );
}