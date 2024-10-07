"use client";

import { fetchItems } from "@/utils/serverApi";
import React, { useEffect, useState } from "react";
import { Item } from "@/types/item";
import { useRouter } from "next/navigation";

const ItemsPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // 뒤로 가기 기능을 위한 useRouter 훅

  useEffect(() => {
    const getItems = async () => {
      try {
        const itemsData = await fetchItems();
        const itemsList: Item[] = Object.values(itemsData);
        setItems(itemsList);
      } catch {
        setError("아이템을 불러오는 중 오류가 발생했습니다.");
      }
    };

    getItems();
  }, []);

  if (error) {
    return (
      <div className="p-8 bg-gray-800 text-white">
        <button
          onClick={() => router.back()}
          className="mb-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          뒤로 가기
        </button>
        <h1 className="text-3xl font-bold mb-4">오류 발생</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="p-8 bg-gray-800 text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-800 text-white">
      <button
        onClick={() => router.back()}
        className="mb-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
      >
        뒤로 가기
      </button>

      <h1 className="text-3xl font-bold mb-4">아이템 목록</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="border p-4 bg-gray-700 hover:bg-gray-600 transition rounded-lg"
          >
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/item/${item.image.full}`}
              alt={item.name}
              width={100}
              height={100}
              className="object-cover mb-2 mx-auto"
            />
            <h2 className="font-bold">{item.name}</h2>
            <p className="text-sm">{item.plaintext}</p>
            {/* <p className="text-sm">가격: {item.gold.total} Gold</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
