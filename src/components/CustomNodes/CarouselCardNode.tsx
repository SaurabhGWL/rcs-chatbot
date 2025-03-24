import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
                    <img src={botImage} alt="Bot" className="w-full h-40 object-cover" />
                </div>
            );
        case 'User says':
            return (
                <div key={index} className="mb-2">
                    <p className="text-sm font-medium">User Says</p>
                    <img src={userImage} alt="User" className="w-full h-40 object-cover" />
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
    const [actions, setActions] = useState<string[]>([]);

    const handleAddAction = () => {
        setActions((prev) => [...prev, '']);
    };

    return (
        <Card className="p-4 w-64 flex flex-col gap-2 pb-20">
            <div>{data?.elements?.map((el: string, index: number) => renderElement(el, index))}</div>

            {/* Actions Section */}
            {actions.map((_, index) => (
                <div key={index} className="mb-2">
                    <label className="text-sm font-medium my-6">Action</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Choose a type of CTA..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cta1">CTA 1</SelectItem>
                            <SelectItem value="cta2">CTA 2</SelectItem>
                            <SelectItem value="cta3">CTA 3</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            ))}

            {/* Add Action Button inside the card */}
            <button
                onClick={handleAddAction}
                style={{
                    borderRadius: 0,
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                    background: "#F4F4F5",
                    color: "grey",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    fontSize:12
                }}
                className="text-sm flex items-center justify-center border-t pt-2 mt-2 w-full"
            >
                + Add action
            </button>


            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </Card>
    );
};

export default CarouselCardNode;
