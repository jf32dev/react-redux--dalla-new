import * as React from 'react';
import { Story } from '../services/bridge/type/entities';
import { TStatus } from '../stores/type';
import bridge from '../services/bridge';

type TContent = {
  story: Story[];
};
type HookReturnType = [TContent, TStatus, string];

export const useFeaturedStory = (): HookReturnType => {
  const [status, setStatus] = React.useState<TStatus>('idle');
  const [error, setError] = React.useState<string>('');
  const [featuredStories, setFeaturedStories] = React.useState<TContent>({
    story: [],
  });

  const getContents = React.useCallback(async () => {
    setStatus('loading');
    const stories = await bridge.getFeaturedList<Story>({
      entityName: 'story',
    });

    if (stories.hasError) {
      setStatus('failed');
      setError(JSON.stringify(stories.error));
    }

    setFeaturedStories({
      story: stories.hasError || !stories.value ? [] : stories.value,
    });
    setStatus('succeeded');
  }, []);

  React.useEffect(() => {
    getContents();
  }, []);

  return [featuredStories, status, error];
};
