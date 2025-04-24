
import SideNavigation from "@/components/SideNavigation";
import { Compass } from "lucide-react";

export default function Explore() {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideNavigation />
      <div className="flex-1 ml-16 md:ml-20 p-6 flex flex-col items-center justify-center">
        <div className="rounded-full bg-tiktok/10 p-5 mb-4">
          <Compass size={48} className="text-tiktok" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Раздел "Интересное"</h1>
        <p className="text-gray-500 max-w-md text-center">
          Здесь вы найдете подборку популярных видео и контента, который может вам понравиться.
        </p>
      </div>
    </div>
  );
}
