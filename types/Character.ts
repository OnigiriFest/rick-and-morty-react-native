export default interface Character {
  id: number;
  name: string;
  image: string;
  gender?: string;
  type?: string;
  species?: string;
}

export interface CharacterData {
  character: Character;
}
