import { Handle, Position } from 'reactflow';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import botImage from '/bot.jpg';
import userImage from '/user.jpg';

const renderElement = (el: string, index: number) => {
  switch (el) {
    case 'Text':
      return <Input key={index} placeholder="Enter text" className="mb-2" />;
    case 'Rich':
      return (
        <div key={index} className="mb-2">
          <label className="text-sm font-medium">Title</label>
          <Input placeholder="Enter title" className="mb-2" />
          <label className="text-sm font-medium">Description</label>
          <Textarea placeholder="Enter description" />
        </div>
      );
    case 'Bot says':
      return (
        <div key={index} className="mb-2">
          <p className="text-sm font-medium">Bot Says</p>
          <img src={botImage} alt="Bot" className="w-50 h-40" />
        </div>
      );
    case 'User says':
      return (
        <div key={index} className="mb-2">
          <p className="text-sm font-medium">User Says</p>
          <img src={userImage} alt="User" className="w-50 h-40" />
        </div>
      );
    case 'Carousel':
      return (
        <div key={index} className="mb-2">
          {renderElement('Bot says', index)}
          {renderElement('Rich', index + 1)}
        </div>
      );
    default:
      return null;
  }
};

const CarouselCardNode = ({ data }: any) => {
  return (
    <Card className="p-4 w-64">
      <div>{data?.elements?.map((el: string, index: number) => renderElement(el, index))}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Card>
  );
};

export default CarouselCardNode;
