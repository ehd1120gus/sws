import { Tag, List, Wifi } from "lucide-react";

export default function Header() {
  return (
    <div className="sticky top-0 flex justify-between bg-white/50 px-8 py-4 backdrop-blur">
      <div className="text-xl font-bold transition-colors hover:text-yellow-600">
        Donghyun&apos;s Blog
      </div>
      <div className="flex space-x-4">
        <Tag className="transition-colors hover:text-yellow-600" />
        <List className="transition-colors hover:text-yellow-600" />
        <Wifi className="transition-colors hover:text-yellow-600" />
      </div>
    </div>
  );
}
