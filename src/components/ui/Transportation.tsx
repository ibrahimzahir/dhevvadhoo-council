'use client';

import { IconType } from 'react-icons';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface TransportationProps {
  name?: string;
  category?: string;
  totnumber?: number;
}
const Transportation: React.FC<TransportationProps> = ({
  name,
  category,
  totnumber,
}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>{name}</CardContent>
      <CardFooter className="flex justify-between">{category}</CardFooter>
    </Card>
  );
};
export default Transportation;
