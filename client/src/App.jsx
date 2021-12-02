
import { useState } from 'react';
import { Stack } from '@chakra-ui/react';

import { UiAppLayout } from './share-ui/UiAppLayout';
import SelectCategory from './share-ui/SelectCategory'
import NoteList from './NoteList';

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
    </UiAppLayout>
  );
}

export default App;
