"use client";
import React from "react";
import { Button } from "@heroui/button";
import Link from "next/link";

interface NavigationButtonProps {
  link: string;
  text: string;
  className?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  link,
  text,
  className,
}) => {
  return (
    <Link href={link} className={className}>
      <Button variant="flat" color="primary">
        {text}
      </Button>
    </Link>
  );
};

export default NavigationButton;
