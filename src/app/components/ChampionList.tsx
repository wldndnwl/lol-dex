import React from "react";
import { fetchChampions } from "@/utils/serverApi";
import { Champion } from "@/types/champion";
import Link from "next/link";
import Image from "next/image";

const ChampionsPage = async () => {
  let championsData;

  try {
    championsData = await fetchChampions(); // API 호출
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return (
      <div>챔피언 목록을 가져오는 중 오류가 발생했습니다: {errorMessage}</div>
    );
  }

  // 챔피언 객체를 배열로 변환
  const champions: Champion[] = Object.values(championsData);

  return (
    <div>
      <h1>챔피언 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {champions.map((champion) => (
          <div key={champion.id} className="border rounded-lg p-4 text-center">
            <Link href={`/champions/${champion.id}`}>
              <h2 className="font-bold">{champion.name}</h2>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${champion.image.full}`}
                alt={champion.name}
                width={100}
                height={100}
                className="object-cover rounded"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// ISR 설정
export const revalidate = 86400; // 24시간

export default ChampionsPage;
