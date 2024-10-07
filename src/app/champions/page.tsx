"use client";

import { fetchChampions } from "@/utils/serverApi";
import React, { useEffect, useState } from "react";
import { Champion } from "@/types/champion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ChampionsPage: React.FC = () => {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const getChampions = async () => {
      try {
        const championsData = await fetchChampions();
        const championsList: Champion[] = Object.values(championsData);
        setChampions(championsList);
      } catch {
        setError("챔피언 데이터를 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    getChampions();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-8 bg-gray-800 text-white">
      <button
        onClick={() => router.back()}
        className="mb-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
      >
        뒤로 가기
      </button>

      <h1 className="text-3xl font-bold mb-4">챔피언 목록</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {champions.map((champion) => (
          <Link key={champion.id} href={`/champions/${champion.id}`}>
            <div
              key={champion.id}
              className="border rounded-lg p-4 bg-gray-700 hover:bg-gray-600 transition"
            >
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${champion.image.full}`}
                alt={champion.name}
                width={100}
                height={100}
                className="object-cover mb-2 mx-auto"
              />
              <h2 className="font-bold">{champion.name}</h2>
              <p className=" text-sm text-gray-300">{champion.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChampionsPage;
