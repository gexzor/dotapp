import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useEffect } from 'react';
import { MatchType } from '../MainContent/useGetMatch';

type MatchCardProps = { matchData: MatchType };

const MatchCard = ({ matchData }: MatchCardProps) => {
  useEffect(() => {
    console.log('MatchCard data: ', matchData);
  }, [matchData]);

  return (
    <Card>
      <CardHeader
        title={<Typography variant='caption'>{matchData.match_id}</Typography>}
      />
      <CardContent>
        <Typography variant='body2'>
          <pre>{JSON.stringify(matchData, null, 2)}</pre>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MatchCard;
