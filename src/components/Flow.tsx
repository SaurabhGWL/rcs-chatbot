
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

import CarouselCardNode from './CustomNodes/CarouselCardNode';
import RichCardNode from './CustomNodes/RichCardNode';
import { nanoid } from 'nanoid';

const nodeTypes = {
    carouselCard: CarouselCardNode,
    richCard: RichCardNode,
  };

const FlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: '1',
      type: 'richCard',
      position: {x: 819.5, y: 750},
      data: { onAddCarousel: handleAddCarousel },
    },
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);


function handleAddCarousel(sourceId: string, selectedElements: string[]) {
   console.log(sourceId);
    setNodes((nds): any => {
      const lastCarousel = nds.filter((n) => n.type === 'carouselCard').pop();
      
      const newId = nanoid();
      const newPosition = lastCarousel 
        ? { x: lastCarousel.position.x + 350, y: lastCarousel.position.y } 
        : { x: 300, y: 50 }; // First carousel position
  
      const newNode = {
        id: newId,
        type: 'carouselCard',
        position: newPosition,
        data: { elements: selectedElements },
      };
  
      setEdges((eds) => lastCarousel 
        ? addEdge({ source: lastCarousel.id, target: newId, sourceHandle: null, targetHandle: null }, eds) 
        : eds
      );
  
      return [...nds, newNode];
    });
  }

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;
