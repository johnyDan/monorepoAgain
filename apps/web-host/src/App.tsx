import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { muiTheme } from '@design-system/web/theme';

const WireTransfersRemote = React.lazy(() => import('wire_transfers/App'));

function Home() {
  return <Box>Web Host Home (feature mount point coming soon)</Box>;
}

export default function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box component="nav" sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Link to="/">Home</Link>
          <Link to="/wire-transfers">Wire Transfers</Link>
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/wire-transfers"
            element={
              <Suspense fallback={<Box>Loading wire transfers...</Box>}>
                <WireTransfersRemote />
              </Suspense>
            }
          />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}