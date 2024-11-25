import Banner from './components/Banner/Banner';
import MainContent from './components/MainContent/MainContent';
import TopNav from './components/TopNav/TopNav';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box
      sx={{
        width: '100vw',
      }}
    >
      <TopNav />
      <Banner />
      <MainContent />
    </Box>
  );
};

export default App;
