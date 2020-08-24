import Character from './Character';

export default interface Episode {
  id: number;
  name: string;
  episode: string;
  air_date?: string;
  characters?: Character[];
}

export interface EpisodeData {
  character: Episode;
}
