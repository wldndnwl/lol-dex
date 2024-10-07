// 아이템 목록에서 사용하는 기본 정보 타입
export interface Item {
  id: string; // 아이템 고유 ID
  name: string; // 아이템 이름
  description: string; // 아이템 설명
  colloq: string; // 아이템 별명 (콜로퀴얼)
  plaintext: string; // 간단 설명
  image: ItemImage; // 아이템 이미지 정보
  gold: ItemGold; // 아이템 가격 정보
  tags: string[]; // 아이템 카테고리 태그 (예: 방어, 공격)
  stats: ItemStats; // 아이템 스탯 정보
  depth?: number; // 아이템 빌드 단계
  into?: string[]; // 상위 아이템으로 업그레이드할 수 있는 아이템 ID 리스트
  from?: string[]; // 이 아이템을 만들기 위해 필요한 하위 아이템 ID 리스트
  maps: { [key: string]: boolean }; // 맵 사용 가능 여부 (맵 ID: 가능 여부)
}

// 아이템 이미지 정보 타입
export interface ItemImage {
  full: string; // 이미지 파일 이름 (예: item_1001.png)
  sprite: string; // 스프라이트 파일 이름
  group: string; // 이미지 그룹 (예: item)
  x: number; // 스프라이트 이미지에서의 x 좌표
  y: number; // 스프라이트 이미지에서의 y 좌표
  w: number; // 이미지 너비
  h: number; // 이미지 높이
}

// 아이템 가격 정보 타입
export interface ItemGold {
  base: number; // 아이템 기본 가격
  total: number; // 아이템 총 가격
  sell: number; // 판매 가격
  purchasable: boolean; // 구매 가능 여부
}

// 아이템 스탯 정보 타입
export interface ItemStats {
  FlatHPPoolMod?: number; // 체력 증가
  FlatMPPoolMod?: number; // 마나 증가
  FlatArmorMod?: number; // 방어력 증가
  FlatSpellBlockMod?: number; // 마법 저항력 증가
  FlatPhysicalDamageMod?: number; // 공격력 증가
  FlatMagicDamageMod?: number; // 마법 피해 증가
  FlatMovementSpeedMod?: number; // 이동 속도 증가
  PercentLifeStealMod?: number; // 생명력 흡수
  [statKey: string]: number | undefined; // 기타 스탯 정보
}
