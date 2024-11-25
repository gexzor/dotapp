import { Box, Button, CircularProgress, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { MatchType, useGetMatch } from './useGetMatch';
import MatchCard from '../MatchCard/MatchCard';

const MainContent = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data, isPending, error } = useGetMatch(shouldFetch);

  useEffect(() => {
    if (!isPending && shouldFetch) setShouldFetch(false);
  }, [isPending, shouldFetch]);

  useEffect(() => {
    console.log('Fetched data: ', data);
  }, [data]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Container
        sx={{
          bgcolor: (theme) => theme.palette.background.paper,
        }}
      >
        <Button
          variant='outlined'
          disabled={shouldFetch}
          onClick={() => setShouldFetch(true)}
        >
          Fetch random match
        </Button>

        {shouldFetch && <CircularProgress />}
        {error && <>Error</>}
        {data &&
          Array.isArray(data) &&
          data
            .slice(0, 9)
            .map((matchData: MatchType, index) => (
              <MatchCard matchData={matchData} key={index} />
            ))}
      </Container>
    </Box>
  );
};

export default MainContent;
