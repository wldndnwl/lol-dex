// 챔피언 목록에서 사용하는 기본 정보 타입
export interface Champion {
  id: string; // 챔피언의 고유 ID
  key: string; // 챔피언 고유 번호 (문자열로 제공)
  name: string; // 챔피언 이름
  title: string; // 챔피언 직함
  blurb: string; // 짧은 챔피언 설명
  image: ChampionImage; // 챔피언 이미지 정보
  tags: string[]; // 챔피언 타입 (예: 전사, 마법사)
  partype: string; // 챔피언의 자원 타입 (예: 마나, 기력)
  stats: ChampionStats; // 챔피언의 스탯 정보
}

// 챔피언 이미지 정보 타입
export interface ChampionImage {
  full: string; // 이미지 파일 이름 (예: Aatrox.png)
  sprite: string; // 스프라이트 파일 이름
  group: string; // 이미지 그룹 (예: champion)
  x: number; // 스프라이트 이미지에서의 x 좌표
  y: number; // 스프라이트 이미지에서의 y 좌표
  w: number; // 이미지 너비
  h: number; // 이미지 높이
}

// 챔피언 스탯 정보 타입
export interface ChampionStats {
  hp: number; // 기본 체력
  hpperlevel: number; // 레벨당 체력 증가량
  mp: number; // 기본 마나
  mpperlevel: number; // 레벨당 마나 증가량
  movespeed: number; // 이동 속도
  armor: number; // 기본 방어력
  armorperlevel: number; // 레벨당 방어력 증가량
  attackrange: number; // 공격 범위
  attackdamage: number; // 기본 공격력
  attackdamageperlevel: number; // 레벨당 공격력 증가량
  attackspeed: number; // 공격 속도
  attackspeedperlevel: number; // 레벨당 공격 속도 증가량
}

// 챔피언 상세 정보에 사용하는 타입
export interface ChampionDetail extends Champion {
  lore: string; // 챔피언의 스토리
  skins: Skin[]; // 챔피언의 스킨 정보
  allytips: string[]; // 아군에게 주는 팁
  enemytips: string[]; // 적에게 주는 팁
  spells: Spell[]; // 챔피언의 스킬 정보
  passive: Passive; // 챔피언의 패시브 스킬
}

// 스킨 정보 타입
export interface Skin {
  id: string; // 스킨 고유 ID
  name: string; // 스킨 이름
  num: number; // 스킨 번호
  chromas: boolean; // 크로마 유무
}

// 스킬 정보 타입
export interface Spell {
  id: string; // 스킬 ID
  name: string; // 스킬 이름
  description: string; // 스킬 설명
  tooltip: string; // 툴팁 정보
  cooldown: number[]; // 스킬 쿨다운
  cost: number[]; // 스킬 사용 비용
  range: number[]; // 스킬 사거리
  image: ChampionImage; // 스킬 이미지
}

// 패시브 스킬 정보 타입
export interface Passive {
  name: string; // 패시브 이름
  description: string; // 패시브 설명
  image: ChampionImage; // 패시브 이미지
}
