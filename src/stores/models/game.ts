export class Game {
  public id!: Number // games/game_id
  public name!: String // games/name
  public abbreviation!: String; // games/abbreviation
  public version!: String; // games/version

  constructor(data: RemoveMethods<Game>) {
    Object.assign(this, data);
  }
}