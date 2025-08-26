"use client";

import { motion } from "framer-motion";
import { Button as BaseButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface EnhancedButtonProps {
  children: ReactNode;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "sm" | "default" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function EnhancedButton({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  href,
  target,
  rel,
  type = "button",
  disabled = false,
  ...props
}: EnhancedButtonProps) {
  const MotionButton = motion(BaseButton);

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" as const }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const glowVariants = {
    initial: { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0)" },
    hover: { 
      boxShadow: variant === "default" 
        ? "0 0 20px 2px rgba(34, 197, 94, 0.3)" 
        : "0 0 15px 1px rgba(34, 197, 94, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          variant === "default" && "bg-emerald-600 text-white hover:bg-emerald-700",
          variant === "outline" && "border border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950",
          variant === "ghost" && "hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-950",
          variant === "secondary" && "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
          size === "sm" && "h-9 px-3",
          size === "default" && "h-10 py-2 px-4",
          size === "lg" && "h-11 px-8",
          className
        )}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        style={{ ...glowVariants.initial }}
        animate="initial"
        {...props}
      >
        <motion.div
          variants={glowVariants}
          className="absolute inset-0 rounded-md"
          initial="initial"
          whileHover="hover"
        />
        <span className="relative z-10 flex items-center justify-center">{children}</span>
      </motion.a>
    );
  }

  return (
    <MotionButton
      variant={variant}
      size={size}
      className={cn("relative overflow-hidden", className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      <motion.div
        variants={glowVariants}
        className="absolute inset-0"
        initial="initial"
        whileHover="hover"
      />
      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </MotionButton>
  );
}