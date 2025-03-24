import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ELEMENTS = ['Text', 'Rich', 'Carousel', 'Bot says', 'User says'];

const RichCardNode = ({ id, data }: any) => {
  const [selectedElements, setSelectedElements] = useState<string[]>([]);

  const toggleElement = (element: string) => {
    setSelectedElements((prev) =>
      prev.includes(element)
        ? prev.filter((e) => e !== element)
        : [...prev, element]
    );
  };
  return (
    <div className="relative">
      {/* Add to Flow Button */}
      <Button
        variant="default"
        className="w-full bg-black text-white text-sm flex items-center justify-center rounded-t-lg rounded-b-none"
        onClick={() => {
          if (selectedElements.length === 0) {
            alert("Please select at least one element before adding to flow.");
            return;
          }
          data.onAddCarousel(id, selectedElements);
          setSelectedElements([]); // Reset selection after adding
        }}
      >
        + Add to Flow
      </Button>


      <div className="bg-white border  shadow-md p-3">
        {/* Chips Section */}
        <div className="grid grid-cols-3 gap-2">
          {ELEMENTS.map((element) => (
            <button
              key={element}
              style={{
                backgroundColor: selectedElements.includes(element) ? "#d3d3d3" : "#ffffff", // Light grey when selected
                fontSize: "10px",
                outline: "none",
                border: "none",
                boxShadow: "none",
              }}
              className={cn(
                'px-3 py-1 rounded-md  text-sm text-center  bg-white outline-none focus:ring-0 focus:outline-none')}
              onClick={() => toggleElement(element)}
            >
              {element}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RichCardNode;
