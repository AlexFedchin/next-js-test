"use client";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";

const ComponentsCard = () => {
  const [components, setComponents] = useState<number[]>([]);

  const handleAddComponent = () => {
    setComponents((prev) => [...prev, Date.now()]);
  };

  const handleRemoveComponent = () => {
    setComponents((prev) => prev.slice(0, -1));
  };

  return (
    <Card className="mb-6 w-full max-w-md p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="text-xl font-semibold">Dynamic Components</div>
        <div className="flex gap-2">
          <Button
            variant="light"
            color="danger"
            onPress={handleRemoveComponent}
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
              <div>Component #{id}</div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ComponentsCard;
