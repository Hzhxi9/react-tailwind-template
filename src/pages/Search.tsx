import React from 'react';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Stack from '@mui/material/Stack';

function Search() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<HorizontalRuleIcon />}>Reducer</Button>
      <Button variant="contained" endIcon={<AddIcon />}>Add</Button>
    </Stack>
  );
}

export default Search;
