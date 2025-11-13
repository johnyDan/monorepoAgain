import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { muiTheme } from '@design-system/web/theme';

function Home() {
  return <Box>Web Host Home (feature mount point coming soon)</Box>;
}

function WireTransfersPlaceholder() {
  return <Box>Wire Transfers feature placeholder (Milestone 4)</Box>;
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
          <Route path="/wire-transfers" element={<WireTransfersPlaceholder />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
