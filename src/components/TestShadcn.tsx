import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TestShadcn = () => {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>shadcn UI Test</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a test to ensure shadcn is working.</p>
        <Button className="mt-4">Click Me</Button>
      </CardContent>
    </Card>
  );
};

export default TestShadcn;
