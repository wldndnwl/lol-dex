// 챔피언 로테이션 응답 데이터 타입
export interface ChampionRotation {
  championIds: number[]; // 무료 챔피언의 ID 목록
  freeChampionIds: number[]; // 현재 무료로 플레이 가능한 챔피언의 ID 목록
  maxNewPlayerLevel: number; // 신규 플레이어에게 제공되는 최대 레벨
}
