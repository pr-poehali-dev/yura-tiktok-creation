
import SideNavigation from "@/components/SideNavigation";
import { User, Video, Heart, Grid } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideNavigation />
      <div className="flex-1 ml-16 md:ml-20 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={40} className="text-gray-500" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-xl font-bold mb-1">@пользователь</h1>
              <p className="text-gray-500 mb-3">Имя Пользователя</p>
              
              <div className="flex gap-6 mb-4 justify-center md:justify-start">
                <div>
                  <span className="font-bold block">120</span>
                  <span className="text-gray-500 text-sm">Подписки</span>
                </div>
                <div>
                  <span className="font-bold block">8.5K</span>
                  <span className="text-gray-500 text-sm">Подписчики</span>
                </div>
                <div>
                  <span className="font-bold block">142K</span>
                  <span className="text-gray-500 text-sm">Лайки</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 max-w-md">
                Добро пожаловать на мой профиль! Здесь я делюсь интересным контентом.
              </p>
              
              <Button className="bg-tiktok hover:bg-tiktok/90">
                Редактировать профиль
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="videos">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Grid size={16} />
                <span>Видео</span>
              </TabsTrigger>
              <TabsTrigger value="liked" className="flex items-center gap-2">
                <Heart size={16} />
                <span>Понравившиеся</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos">
              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div 
                    key={item} 
                    className="aspect-[9/16] bg-gray-200 rounded-md flex items-center justify-center hover:opacity-90 transition cursor-pointer"
                  >
                    <Video className="text-gray-400" />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="liked">
              <div className="text-center py-10">
                <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Понравившиеся видео</h2>
                <p className="text-gray-500">Здесь будут отображаться видео, которые вам понравились</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
