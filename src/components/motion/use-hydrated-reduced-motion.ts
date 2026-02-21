"use client";

import { useSyncExternalStore } from "react";

import { useReducedMotion } from "framer-motion";

function subscribeHydration() {
  return () => {};
}

function getHydrationSnapshot() {
  return true;
}

function getHydrationServerSnapshot() {
  return false;
}

export function useHydratedReducedMotion() {
  const shouldReduceMotion = useReducedMotion();
  const isHydrated = useSyncExternalStore(
    subscribeHydration,
    getHydrationSnapshot,
    getHydrationServerSnapshot
  );

  return isHydrated && Boolean(shouldReduceMotion);
}
