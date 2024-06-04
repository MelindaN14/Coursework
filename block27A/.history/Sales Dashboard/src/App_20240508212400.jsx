import { useState } from 'react'
import './App.css'
// import * as React from 'react';
// import Box from '@mui/material/Box';

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSystemProps() {
  return (
    <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      This Box uses MUI System props for quick customization.
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
