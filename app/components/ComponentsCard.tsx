"use client";
import React, { useState } from "react";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";

const ComponentsCard = () => {
  const [components, setComponents] = useState<number[]>([]);

  const handleAddComponent = () => {
    setComponents((prev) => [...prev, Date.now()]);
  };

  const handleRemoveLastComponent = () => {
    setComponents((prev) => prev.slice(0, -1));
  };

  interface RemoveComponentHandler {
    (id: number): void;
  }

  const handleRemoveComponent: RemoveComponentHandler = (id) => {
    setComponents((prev) => prev.filter((componentId) => componentId !== id));
  };

  return (
    <Card className="w-full max-w-md p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="text-xl font-semibold">Dynamic Components</div>
        <div className="flex gap-2">
          <Button
            variant="light"
            color="danger"
            onPress={handleRemoveLastComponent}
            isDisabled={components.length === 0}
          >
            Remove Component
          </Button>
          <Button variant="solid" color="primary" onPress={handleAddComponent}>
            Add Component
          </Button>
        </div>
        <div className="flex flex-col gap-2 w-full">
          {components.map((id) => (
            <Card key={id} className="p-2">
              <div className="flex h-full items-center gap-2">
                Component #{id}
                <Button
                  variant="light"
                  color="danger"
                  isIconOnly
                  onPress={() => handleRemoveComponent(id)}
                  isDisabled={components.length === 0}
                  className="ml-auto font-bold text-xl"
                >
                  -
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ComponentsCard;
