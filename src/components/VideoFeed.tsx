import React, { useState } from "react";
import { Heart, MessageCircle, Share2, Music } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

interface VideoProps {
  id: string;
  username: string;
  description: string;
  audioTitle: string;
  likes: number;
  comments: number;
  shares: number;
  videoUrl: string;
  userAvatar: string;
}

const videos: VideoProps[] = [
  {
    id: "1",
    username: "@dancequeen",
    description: "Пробую новый танцевальный тренд! #танец #тренд",
    audioTitle: "Популярный трек - Исполнитель",
    likes: 245200,
    comments: 1893,
    shares: 7652,
    videoUrl: "https://images.unsplash.com/photo-1598128558393-70ff21433be0?w=800&auto=format&fit=crop",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop",
  },
  {
    id: "2",
    username: "@techguy",
    description: "Посмотрите на этот крутой лайфхак! #технологии #лайфхак",
    audioTitle: "Оригинальный звук - techguy",
    likes: 124600,
    comments: 2456,
    shares: 4325,
    videoUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
    userAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&auto=format&fit=crop",
  },
  {
    id: "3",
    username: "@foodlover",
    description: "Приготовление идеального завтрака за 5 минут #еда #рецепт",
    audioTitle: "Кулинарное шоу - саундтрек",
    likes: 98700,
    comments: 1132,
    shares: 3245,
    videoUrl: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop",
    userAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop",
  }
];

const VideoPost: React.FC<VideoProps> = ({
  username,
  description,
  audioTitle,
  likes,
  comments,
  shares,
  videoUrl,
  userAvatar
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="tiktok-video">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${videoUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
        <div className="flex items-start mb-4">
          <Avatar className="h-10 w-10 mr-3 border-2 border-white">
            <img src={userAvatar} alt={username} />
          </Avatar>
          <div className="flex-1">
            <h4 className="font-bold text-lg">{username}</h4>
            <p className="text-sm">{description}</p>
            <div className="flex items-center mt-2">
              <Music size={14} className="mr-2" />
              <p className="text-xs">{audioTitle}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6 z-10">
        <button 
          className="flex flex-col items-center"
          onClick={handleLike}
        >
          <Heart size={30} className={`mb-1 ${isLiked ? 'text-tiktok fill-tiktok' : ''}`} />
          <span className="text-white text-xs">{formatNumber(likesCount)}</span>
        </button>
        
        <button className="flex flex-col items-center">
          <MessageCircle size={30} className="mb-1" />
          <span className="text-white text-xs">{formatNumber(comments)}</span>
        </button>
        
        <button className="flex flex-col items-center">
          <Share2 size={30} className="mb-1" />
          <span className="text-white text-xs">{formatNumber(shares)}</span>
        </button>
      </div>
    </div>
  );
};

export default function VideoFeed() {
  return (
    <div className="tiktok-video-container">
      {videos.map((video) => (
        <VideoPost key={video.id} {...video} />
      ))}
    </div>
  );
}
