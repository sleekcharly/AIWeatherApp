import CityPicker from '@/components/CityPicker';
import { Card, Divider, Subtitle, Text } from '@tremor/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#18387E] p-10 flex flex-col justify-center">
      <Card className="max-w-3xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">AI Weather</Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 14, Tailwind CSS, Tremor.3.14 & More!
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#394F68] to-[#18387E]">
          {/* City Picker */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
