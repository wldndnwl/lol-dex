export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">리그 오브 레전드 정보 앱</h1>
      <p className="text-lg text-center mb-8">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <div className="flex gap-4 mt-4">
        <a
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/champions"
        >
          챔피언 목록 보기
        </a>
        <a
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/rotation"
        >
          금주 로테이션 확인
        </a>
        <a
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/items"
        >
          아이템 목록 보기
        </a>
      </div>
      {/* <footer className="mt-8 text-center text-sm">
        <p>
          [Your Product Name] is not endorsed by Riot Games and does not reflect
          the views or opinions of Riot Games or anyone officially involved in
          producing or managing Riot Games properties. Riot Games and all
          associated properties are trademarks or registered trademarks of Riot
          Games, Inc.
        </p>
      </footer> */}
    </div>
  );
}
