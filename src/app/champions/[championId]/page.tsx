import React from "react";
import { fetchChampionDetails } from "@/utils/serverApi";
import { ChampionDetail } from "@/types/champion";

// Riot API에서 사용하는 버전을 상수화
const VERSION = "12.19.1";

interface ChampionPageProps {
  params: {
    championId: string;
  };
}

const ChampionPage = async ({ params }: ChampionPageProps) => {
  const { championId } = params;

  try {
    // 특정 챔피언의 상세 정보를 가져옴
    const champion: ChampionDetail = await fetchChampionDetails(championId);

    return (
      <div className="p-8 bg-gray-800 text-white">
        {/* 챔피언 이름과 타이틀 */}
        <h1 className="text-4xl font-bold mb-4">{champion.name}</h1>
        <h2 className="text-xl text-gray-300 mb-4">{champion.title}</h2>

        {/* 챔피언 설명 */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">소개</h3>
          <p>{champion.blurb}</p>
        </div>

        {/* 챔피언 스탯 */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">스탯</h3>
          <ul>
            <li>체력: {champion.stats.hp}</li>
            <li>마나: {champion.stats.mp}</li>
            <li>이동 속도: {champion.stats.movespeed}</li>
            <li>방어력: {champion.stats.armor}</li>
            <li>공격력: {champion.stats.attackdamage}</li>
          </ul>
        </div>

        {/* 패시브 스킬 */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">패시브</h3>
          <div>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/passive/${champion.passive.image.full}`}
              alt={champion.passive.name}
              width={64}
              height={64}
            />
            <p>
              {champion.passive.name}: {champion.passive.description}
            </p>
          </div>
        </div>

        {/* 스킬 정보 */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">스킬</h3>
          {champion.spells.map((spell) => (
            <div key={spell.id} className="mb-4">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${spell.image.full}`}
                alt={spell.name}
                width={64}
                height={64}
              />
              <h4 className="text-xl font-bold">{spell.name}</h4>
              <p>{spell.description}</p>
              <p className="text-gray-300">
                쿨다운: {spell.cooldown.join(", ")}
              </p>
              <p className="text-gray-300">비용: {spell.cost.join(", ")}</p>
              <p className="text-gray-300">사거리: {spell.range.join(", ")}</p>
            </div>
          ))}
        </div>

        {/* 스킨 정보 */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">스킨</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {champion.skins.map((skin) => (
              <li key={skin.id} className="border rounded-lg p-4 bg-gray-700">
                <p>
                  {skin.name} {skin.chromas && "(크로마 있음)"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8 bg-gray-800 text-white">
        <h1 className="text-4xl font-bold mb-4">Error Loading Champion</h1>
        <p>
          {error instanceof Error ? error.message : "Unknown error occurred"}
        </p>
      </div>
    );
  }
};

export default ChampionPage;
