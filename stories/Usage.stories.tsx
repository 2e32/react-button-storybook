import { useState, useEffect, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '@2e32/react-button';
import '@2e32/react-button/css';

import { variants, palettes } from './consts';

import * as Icon from './assets/icons/svg';

import './assets/css/usage.css';

const meta = {
  title: 'Example/Button/usage',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VariantPalette: Story = {
  name: 'Variant/palette combination',
  render: () => (
    <div>
      {variants.map((variant) => {
        return (
          <>
            <div key={variant}>
              {palettes.map((palette) => (
                <Button key={palette} variant={variant} palette={palette}>
                  {palette}
                </Button>
              ))}
            </div>
            <br />
          </>
        );
      })}
    </div>
  ),
};

export const Multiline: Story = {
  render: () => (
    <Button>
      <div className="multiline">
        <div>Subscribe</div>
        <div>100K+ subscribers</div>
      </div>
    </Button>
  ),
};

export const FlexGrid: Story = {
  name: 'Flex grid',
  render: () => (
    <div className="container">
      <div className="row">
        <div className="col">
          <Button block>First</Button>
        </div>
        <div className="col">
          <Button block>Second</Button>
        </div>
        <div className="col">
          <Button block>Third</Button>
        </div>
      </div>
    </div>
  ),
};

const CountdownStory = () => {
  const [time, setTime] = useState(0);
  const timer = useRef<number>();

  useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  const handleStart = () => {
    const timerId = timer.current;

    if (timerId) window.clearInterval(timerId);

    setTime(5);

    timer.current = window.setInterval(() => {
      setTime((currNumber) => {
        if (currNumber === 0) {
          clearInterval(timerId);
          return 0;
        } else {
          return currNumber - 1;
        }
      });
    }, 1000);
  };

  const handleStop = () => {
    window.clearInterval(timer.current);
    setTime(0);
  };

  return (
    <>
      <Button onClick={handleStart}>{time === 0 ? 'Start timer' : `Time left: ${time}`}</Button>
      <Button onClick={handleStop}>Stop timer</Button>
    </>
  );
};

export const Countdown: Story = {
  render: () => <CountdownStory />,
};

const LongPressStory = () => {
  const [count, setCount] = useState(0);
  const timer = useRef<number>();

  useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  const incrementCount = () => {
    setCount((currCount) => {
      if (currCount >= 15) {
        stopTimer();
        return currCount;
      } else {
        return currCount + 1;
      }
    });

    timer.current = window.setTimeout(() => {
      incrementCount();
    }, 500);
  };

  const stopTimer = () => {
    window.clearTimeout(timer.current);
  };

  return (
    <>
      <p>Products count: {count} (max: 15)</p>

      <Button onMouseDown={incrementCount} onMouseUp={stopTimer} onMouseLeave={stopTimer}>
        Buy
      </Button>
    </>
  );
};

export const LongPress: Story = {
  name: 'Long press',
  render: () => <LongPressStory />,
};

export const Reaction: Story = {
  render: () => (
    <>
      <Button background="#109856" size="lg" round>
        <Icon.ThumbUpOutline fill="#fff" />
      </Button>
      <Button background="#f60000" size="lg" round>
        <Icon.ThumbDownOutline fill="#fff" />
      </Button>
    </>
  ),
};

export const SocialBar: Story = {
  name: 'SocialBar',
  render: () => (
    <>
      <div>
        <Button className="social-button social-icon">
          <Icon.Instagram fill="var(--instagram-color)" />
        </Button>
        <Button className="social-button social-icon">
          <Icon.WhatsApp fill="var(--whatsapp-color)" />
        </Button>
        <Button className="social-button social-icon">
          <Icon.Youtube fill="var(--youtube-color)" />
        </Button>
        <Button className="social-button social-icon">
          <Icon.Twitter fill="var(--twitter-color)" />
        </Button>
        <Button className="social-button social-icon">
          <Icon.Twitch fill="var(--twitch-color)" />
        </Button>
      </div>
      <br />
      <div>
        <Button className="social-button instagram-button">
          <Icon.Instagram />
        </Button>
        <Button className="social-button whatsapp-button">
          <Icon.WhatsApp />
        </Button>
        <Button className="social-button youtube-button">
          <Icon.Youtube />
        </Button>
        <Button className="social-button twitter-button">
          <Icon.Twitter />
        </Button>
        <Button className="social-button twitch-button">
          <Icon.Twitch />
        </Button>
      </div>
      <br />
      <div>
        <Button className="social-button social-dark">
          <Icon.Instagram />
        </Button>
        <Button className="social-button social-dark">
          <Icon.WhatsApp />
        </Button>
        <Button className="social-button social-dark">
          <Icon.Youtube />
        </Button>
        <Button className="social-button social-dark">
          <Icon.Twitter />
        </Button>
        <Button className="social-button social-dark">
          <Icon.Twitch />
        </Button>
      </div>
    </>
  ),
};
