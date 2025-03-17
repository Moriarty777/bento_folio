// utils/navigation.ts
"use client";
import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.prefetch(path);
    router.push(path);
  };

  return navigateTo;
};
