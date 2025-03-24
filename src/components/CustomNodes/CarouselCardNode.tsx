import { Handle, Position } from 'reactflow';
import { Card } from '@/components/ui/card';

const CarouselCardNode = ({ data }: any) => {
  return (
    <Card className="p-4 w-64">
      <div className="font-semibold mb-2">Carousel Card</div>
      <ul className="list-disc ml-4">
        {data?.elements?.map((el: string, index: number) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Card>
  );
};

export default CarouselCardNode;
