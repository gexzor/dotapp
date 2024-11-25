import { useQuery, UseQueryResult } from '@tanstack/react-query';

export interface MatchType {
  avg_rank_tier: number;
  cluster: number;
  dire_team: number[];
  duration: number;
  game_mode: number;
  lobby_type: number;
  match_id: number;
  match_seq_num: number;
  num_rank_tier: number;
  radiant_team: number[];
  radiant_win: boolean;
  start_time: number;
}

export const useGetMatch = (
  shouldFetch: boolean,
  matchId = ''
): UseQueryResult<MatchType[], Error> => {
  const getMatchUrl = `https://api.opendota.com/api/publicMatches/${matchId}`;

  return useQuery({
    queryKey: ['randomMatch'],
    queryFn: async () => {
      const res = await fetch(getMatchUrl);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data;
    },
    enabled: shouldFetch,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
