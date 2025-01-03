import { useCallback, useEffect, useRef, useState } from 'react';
import { useNewsDislike, useNewsLike, useNewsList, useNewsShare } from 'src/hooks/useNewsQuery';
import NewsCard from '../news-card';
import { NewsListContainer } from './styles';
import NewsItemSkeleton from '../news-card/skeleton';
import { useDialog } from 'src/hooks/use-dialog';

const NewsList = () => {
  const [limit, setLimit] = useState(5);

  const { items, isLoading, isFetching, hasMore } = useNewsList({ limit });

  const { mutate: likeMutation } = useNewsLike();
  const { mutate: dislikeMutation } = useNewsDislike();
  const { shareNews } = useNewsShare();
  const newsDialog = useDialog();

  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetching) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLimit((prev) => prev + 5); // Load 5 more items
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isFetching, hasMore],
  );

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleLike = (id: string) => {
    likeMutation(id);
  };

  const handleDislike = (id: string) => {
    dislikeMutation(id);
  };

  const handleShare = (id: string) => {
    shareNews(id);
  };

  const openNewsDialog = (id: string) => {
    newsDialog.handleOpen(id);
  };

  if (isLoading) {
    return (
      <NewsListContainer>
        {[...Array(3)].map((_, index) => (
          <NewsItemSkeleton key={index} />
        ))}
      </NewsListContainer>
    );
  }

  return (
    <NewsListContainer>
      {items.map((item, index) => (
        <div key={item.id} ref={index === items.length - 1 ? lastItemRef : undefined}>
          <NewsCard
            item={item}
            onLike={handleLike}
            onDislike={handleDislike}
            onComment={() => openNewsDialog(item.id)}
            onShare={handleShare}
          />
        </div>
      ))}
      {isFetching && <NewsItemSkeleton />}
    </NewsListContainer>
  );
};

export default NewsList;
