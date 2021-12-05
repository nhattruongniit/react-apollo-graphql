
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';

import { UiAppLayout } from './share-ui/UiAppLayout';
import SelectCategory from './share-ui/SelectCategory'
import NoteList from './NoteList';
import EditNote from './EditNote';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('1')
  return (
    <UiAppLayout>
      <Stack width={400}>
        <SelectCategory 
          defaultValue={selectedCategory}
          onCategoryChange={category => setSelectedCategory(category)}
        />
        <NoteList 
          category={selectedCategory}
        />
      </Stack>
      <Routes>
        <Route path={`/note/:noteId`} element={<EditNote />} />
      </Routes>
    </UiAppLayout>
  );
}

export default App;
