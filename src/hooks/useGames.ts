import useData from "./useData";
import { Platform } from "./usePlatforms";
import { GameQuery } from '../App';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
  
const useGames = (gamequery:GameQuery) =>
  useData<Game>("/games", {
    params: {
      genres: gamequery.genre?.id,
      platforms: gamequery.platform?.id,
      ordering: gamequery.sortOrder,
      search: gamequery.searchText,
    }
  },[gamequery]);

export default useGames;