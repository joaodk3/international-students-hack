import React from "react";

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function CyberButton({ variant = "primary", children, className = "", ...props }: CyberButtonProps) {
  const baseStyles = "relative px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-200 overflow-hidden group clip-path-slant";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]",
    secondary: "bg-secondary text-background hover:bg-secondary/90 hover:shadow-[0_0_20px_rgba(217,70,239,0.5)]",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Glitch effect overlay */}
      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300 skew-x-12" />
    </button>
  );
}
