"use client";

<<<<<<< HEAD
import { useRef, useState } from "react";
=======
import { useState } from "react";
>>>>>>> main
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className = "", href, onClick }: MagneticButtonProps) {
<<<<<<< HEAD
  const btnRef = useRef<HTMLDivElement | HTMLAnchorElement>(null);
=======
>>>>>>> main
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
<<<<<<< HEAD
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
=======
    const rect = e.currentTarget.getBoundingClientRect();
>>>>>>> main
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

<<<<<<< HEAD
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
=======
  const Component = href ? motion.a : motion.div;

  return (
    <Component
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`inline-block cursor-pointer ${className}`}
    >
      {children}
    </Component>
>>>>>>> main
  );
}
