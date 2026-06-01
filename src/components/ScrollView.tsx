"use client";
import { Box } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ScrollViewProps {
  children: ReactNode;
  fallback?: ReactNode;
  minHeight?: string | number;
}

export const ScrollView = ({ children, fallback, minHeight }: ScrollViewProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 5% of the element is visible
    triggerOnce: true, // Only trigger once to avoid unnecessary re-renders
  });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);

  return (
    <Box ref={ref} minH={minHeight}>
      {isVisible ? children : fallback}
    </Box>
  );
};

export const ScrollViews = ScrollView;
