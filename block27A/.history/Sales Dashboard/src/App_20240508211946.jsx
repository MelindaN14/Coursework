import { useState } from 'react'
import './App.css'
import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="container mx-auto">
</div>
    </>
  )
}

export default App
