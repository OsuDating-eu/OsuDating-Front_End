export class FlowerLeaderboardEntry {
  public flower_id!: String; // flower_user/flower_id
  public username!: String; // flower_user/name
  public nationality!: String; // users/nationality
  public arcade!: String; // flower_user/arcade

  constructor(data: RemoveMethods<FlowerLeaderboardEntry>) {
    Object.assign(this, data);
  }
}

// Model for GET leaderboard/sdvx
export class SdvxLeaderboardEntry extends FlowerLeaderboardEntry {
  public id!: String; // sdvx_user/sdvx_id
  public placement!: Number; // Leaderboard Placement
  public name!: String; // sdvx_user/name
  public volforce!: Number; // sdvx_user/volforce
  public skillLevel!: String; // sdvx_user/skillLevel

  constructor(data: RemoveMethods<SdvxLeaderboardEntry>) {
    super(data);
    Object.assign(this, data);
  }
}

// Model for GET leaderboard/iidx
export class IidxLeaderboardEntry extends FlowerLeaderboardEntry {
  public id!: String; // iidx_user/iidx_id
  public name!: String; // iidx_user/name
  public spRank!: Number; //
  public spPoints!: Number; //
  public spClass!: String; //
  public dpRank!: Number; //
  public dpPoints!: Number; //
  public dpClass!: String; //

  constructor(data: RemoveMethods<IidxLeaderboardEntry>) {
    super(data);
    Object.assign(this, data);
  }
}

// Model for GET leaderboard/pnm
export class PnmLeaderboardEntry extends FlowerLeaderboardEntry {
  public id!: String; // pnm_user/pnm_id
  public placement!: Number; // Leaderboard Placement
  public name!: String; // pnm_user/name
  public points!: Number; // 

  constructor(data: RemoveMethods<PnmLeaderboardEntry>) {
    super(data);
    Object.assign(this, data);
  }
}

// Model for GET leaderboard/jubeat
export class JubeatLeaderboardEntry extends FlowerLeaderboardEntry {
  public id!: String; // jubeat_user/jubeat_id
  public placement!: Number; // Leaderboard Placement
  public name!: String; // jubeat_user/name
  public jubility!: Number; // 

  constructor(data: RemoveMethods<JubeatLeaderboardEntry>) {
    super(data);
    Object.assign(this, data);
  }
}