
import SideNavigation from "@/components/SideNavigation";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideNavigation />
      <div className="flex-1 ml-16 md:ml-20 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative mb-8">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              className="pl-10 py-6 text-lg rounded-full border-gray-200 focus:border-tiktok focus:ring-tiktok" 
              placeholder="Поиск аккаунтов и видео" 
            />
          </div>
          
          <div className="text-center my-20">
            <SearchIcon size={48} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Найдите интересный контент</h2>
            <p className="text-gray-500">Введите ключевые слова для поиска видео и аккаунтов</p>
          </div>
        </div>
      </div>
    </div>
  );
}
