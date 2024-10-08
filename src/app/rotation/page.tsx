"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RotationPage: React.FC = () => {
  const [alertShown, setAlertShown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!alertShown) {
      alert("수리 중..");
      setAlertShown(true);
      setTimeout(() => {
        router.push("/"); // 확인 버튼 클릭 후 홈으로 리디렉션
      }, 1);
    }
  }, [alertShown, router]);

  return null; // 렌더링하지 X
};

export default RotationPage;
