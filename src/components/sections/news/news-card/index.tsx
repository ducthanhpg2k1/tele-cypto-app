import { BookmarkIcon, ChatBubbleLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FC, useState } from 'react';
import ClockIcon from 'src/assets/icons/ClockIcon';
import ThreeDotIcon from 'src/assets/icons/ThreeDotIcon';
import { NewsItem } from 'src/services/news/newsTypes';
import { getRelativeTime } from 'src/utils/fc.utils';
import { truncateMarkdownSafely } from 'src/utils/helpers';
import { StatItem, StatsContainer, StyledCard } from './styles';
import { Box } from '@mui/material';
import IconComment from 'src/assets/icons/IconComment';
import Image from 'next/image';

interface NewsCardProps {
  item: NewsItem;
  truncate?: boolean;
  maxLength?: number;
  onLike?: (id: string) => void;
  onDislike?: (id: string) => void;
  onComment?: (id: string) => void;
  onShare?: (id: string) => void;
}

const NewsCard: FC<NewsCardProps> = ({
  item,
  truncate = false,
  maxLength = 200,
  onLike,
  onDislike,
  onComment,
  onShare,
}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
    onLike?.(item.id);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
    onDislike?.(item.id);
  };

  const content = truncate ? truncateMarkdownSafely(item.content, maxLength) : item.content;

  return (
    <StyledCard>
      <div className="flex items-center gap-3">
        <Image
          src={'/images/fake-avatar.svg'}
          alt={item.author.username}
          width={40}
          height={40}
          className="w-10 h-10"
          objectFit="cover"
        />
        <div className="flex flex-col">
          <Typography
            variant="body2"
            fontWeight={700}
          >
            {item.author.username}
          </Typography>
          <div className="flex items-center gap-[4px]">
            <ClockIcon />
            <Typography
              variant="caption"
              fontWeight={400}
              color={'#9E9E9E'}
            >
              {getRelativeTime(item.publishedAt)}
            </Typography>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <ThreeDotIcon />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <p className="color-[#424242] text-[14px] line-clamp-2">
          {item?.content || 'Participate in the Corra Finance Airdrop on CoinMarketCap'}
        </p>
        {/* {item.media && item.media.length > 0 && ( */}
        <Box
          component="img"
          src={'/assets/news/bl.png'}
          alt="Content media"
          sx={{
            width: '100%',
            borderRadius: 1,
            mb: 2,
          }}
        />
        {/* )} */}
      </div>
      <StatsContainer>
        <StatItem>
          <IconButton
            onClick={handleLike}
            size="small"
            style={{ color: liked ? '#F54336' : '#BDBDBD' }}
          >
            {liked ? <HeartSolidIcon className="w-5 h-5" /> : <HeartIcon className="w-5 h-5" />}
          </IconButton>
          <Typography
            variant="caption"
            color={'#BDBDBD'}
            fontWeight={400}
          >
            {item.stats.likes}
          </Typography>
        </StatItem>

        <StatItem>
          <IconButton
            onClick={() => onComment?.(item.id)}
            size="small"
          >
            <IconComment className="w-5 h-5" />
          </IconButton>
          <Typography
            variant="caption"
            color={'#BDBDBD'}
            fontWeight={400}
          >
            {item.stats.comments}
          </Typography>
        </StatItem>
        <StatItem>
          <IconButton
            onClick={() => onShare?.(item.id)}
            size="small"
          >
            <BookmarkIcon className="w-5 h-5" />
          </IconButton>
          <Typography
            variant="caption"
            color={'#BDBDBD'}
            fontWeight={400}
          >
            {item.stats.shares}
          </Typography>
        </StatItem>
      </StatsContainer>
    </StyledCard>
  );
};

export default NewsCard;
