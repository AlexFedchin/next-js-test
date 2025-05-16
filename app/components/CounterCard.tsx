"use client";
import React, { useState } from "react";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";

const CounterCard = () => {
  const [count, setCount] = useState(0);

  return (
    <Card className="w-full max-w-md p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="text-xl font-semibold">Counter: {count}</div>
        <div className="flex gap-2">
          <Button
            variant="light"
            color="danger"
            onPress={() => setCount(count - 1)}
            className="font-bold text-xl"
          >
            -
          </Button>
          <Button
            variant="solid"
            color="primary"
            onPress={() => setCount(count + 1)}
            className="font-bold text-xl"
          >
            +
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CounterCard;
