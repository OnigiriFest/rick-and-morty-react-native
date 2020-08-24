import Character from './Character';
import Location from './Location';
import Episode from './Episode';

export default interface ResultsData {
  info: { next: number | null; prev: number | null };
  results: Character[] | Location[] | Episode[];
}
