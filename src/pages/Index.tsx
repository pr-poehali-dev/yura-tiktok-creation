import SideNavigation from "@/components/SideNavigation";
import VideoFeed from "@/components/VideoFeed";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-black">
      <SideNavigation />
      
      <main className="flex-1 ml-16 md:ml-20">
        <VideoFeed />
      </main>
    </div>
  );
};

export default Index;
