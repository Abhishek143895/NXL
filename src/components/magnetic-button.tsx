"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className = "", href, onClick }: MagneticButtonProps) {
  const btnRef = useRef<HTMLDivElement | HTMLAnchorElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * 0.3;
    const distY = (e.clientY - centerY) * 0.3;
    setX(distX);
    setY(distY);
  };

  const handleMouseLeave = () => {
    setX(0);
    setY(0);
  };

  const commonProps = {
    onClick,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { x, y },
    transition: { type: "spring", stiffness: 200, damping: 15 },
    className: `inline-block cursor-pointer ${className}`,
  };

  return href ? (
    <motion.a ref={btnRef as React.RefObject<HTMLAnchorElement>} href={href} {...commonProps}>
      {children}
    </motion.a>
  ) : (
    <motion.div ref={btnRef as React.RefObject<HTMLDivElement>} {...commonProps}>
      {children}
    </motion.div>
  );
}
