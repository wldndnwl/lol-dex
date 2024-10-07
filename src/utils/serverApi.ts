import { Champion, ChampionDetail } from "@/types/champion";
import { Item } from "@/types/item";

const API_BASE_URL = "https://ddragon.leagueoflegends.com/cdn";
const VERSION = "12.19.1"; // API 버전 상수화
const API_KEY = process.env.RIOT_API_KEY;

// 챔피언 목록 데이터 가져오기
export const fetchChampions = async (): Promise<Record<string, Champion>> => {
  const res = await fetch(
    `${API_BASE_URL}/${VERSION}/data/ko_KR/champion.json`
  );

  if (!res.ok) {
    throw new Error(
      `Error fetching champions: ${res.status} ${res.statusText}`
    );
  }

  const data = await res.json();
  return data.data;
};

// 특정 챔피언 상세 정보 가져오기
export const fetchChampionDetails = async (
  id: string
): Promise<ChampionDetail> => {
  // 챔피언 ID를 파라미터로 받아서 API 요청
  const url = `${API_BASE_URL}/${VERSION}/data/ko_KR/champion/${id}.json`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(API_KEY && { "X-Riot-Token": API_KEY }),
    },
  });

  // 요청이 실패했을 경우
  if (!res.ok) {
    const errorData = await res.json(); // 오류 응답
    throw new Error(
      `Error fetching champion details: ${res.status} ${res.statusText} - ${errorData.message}`
    );
  }

  const data = await res.json();

  // API에서 특정 챔피언의 데이터를 data[id] 이를 반환
  const championDetail: ChampionDetail = data.data[id];

  return championDetail;
};

// 아이템 목록 데이터 가져오기
export const fetchItems = async (): Promise<Record<string, Item>> => {
  const res = await fetch(`${API_BASE_URL}/${VERSION}/data/ko_KR/item.json`);

  if (!res.ok) {
    throw new Error(`Error fetching items: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.data;
};

// 특정 아이템 상세 정보 가져오기
export const fetchItemDetails = async (id: string): Promise<Item> => {
  const res = await fetch(
    `${API_BASE_URL}/${VERSION}/data/ko_KR/item/${id}.json`
  );

  if (!res.ok) {
    throw new Error(
      `Error fetching item details: ${res.status} ${res.statusText}`
    );
  }

  const data = await res.json();
  return data.data[id];
};
