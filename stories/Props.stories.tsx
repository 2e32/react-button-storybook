import { useState, useRef, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '@2e32/react-button';
import '@2e32/react-button/css';

import { variants, palettes } from './consts';
import { controls } from './controls';

import * as Icon from './assets/icons/svg';

import './assets/css/props.css';

const meta = {
  title: 'Example/Button/props',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: controls,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const Playground: Story = {
  name: 'Playground 🎮',
};

export const Children: Story = {
  name: 'children',
  render: () => (
    <>
      <Button>Click me!</Button>
      <Button>Ok</Button>
      <Button>
        <Icon.HeartOutline fill="red" />
      </Button>
    </>
  ),
};

const RefStory = () => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div>
      <h2>Your privacy settings</h2>
      <p>We use cookies to help improve our website content and make it more relevant to you.</p>
      <Button>Manage cookies</Button>
      <Button ref={ref} onClick={() => alert('Success')}>
        <strong>Accept all cookies</strong>
      </Button>
    </div>
  );
};

export const Ref: Story = {
  name: 'ref',
  render: () => <RefStory />,
};

export const ClassName: Story = {
  name: 'className',
  args: { className: 'bootstrap-button' },
  parameters: {
    controls: { include: ['className'] },
  },
};

export const Style: Story = {
  name: 'style',
  args: { style: { color: 'red' } },
  parameters: {
    controls: { include: ['style'] },
  },
};

export const Disabled: Story = {
  name: 'disabled',
  args: { disabled: true },
  parameters: {
    controls: { include: ['disabled'] },
  },
};

export const Color: Story = {
  name: 'color',
  args: { color: 'green' },
  parameters: {
    controls: { include: ['color'] },
  },
};

export const Background: Story = {
  name: 'background',
  args: { background: 'orange' },
  parameters: {
    controls: { include: ['background'] },
  },
};

export const Variant: Story = {
  name: 'variant',
  render: () => (
    <>
      {variants.map((variant) => (
        <Button key={variant} variant={variant} palette="primary">
          {capitalize(variant)}
        </Button>
      ))}
    </>
  ),
};

export const Palette: Story = {
  name: 'palette',
  render: () => (
    <>
      {palettes.map((palette) => (
        <Button key={palette} variant="filled" palette={palette}>
          {capitalize(palette)}
        </Button>
      ))}
    </>
  ),
};

export const Size: Story = {
  name: 'size',
  render: () => (
    <>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </>
  ),
};

export const Radius: Story = {
  name: 'radius',
  render: () => (
    <>
      <Button radius="none">None</Button>
      <Button radius="sm">Small</Button>
      <Button radius="md">Medium</Button>
      <Button radius="lg">Large</Button>
      <Button radius="xl">Extra Large</Button>
    </>
  ),
};

export const Round: Story = {
  name: 'round',
  render: () => (
    <>
      <div>
        <Button size="sm" round>
          A
        </Button>
        <Button size="md" round>
          B
        </Button>
        <Button size="lg" round>
          C
        </Button>
      </div>
      <br />
      <div>
        <Button size="sm" round>
          <Icon.Cog width={18} height={18} />
        </Button>
        <Button size="md" round>
          <Icon.Cog width={24} height={24} />
        </Button>
        <Button size="lg" round>
          <Icon.Cog width={28} height={28} />
        </Button>
      </div>
    </>
  ),
};

export const Block: Story = {
  name: 'block',
  args: { children: 'Block', block: true },
  parameters: {
    controls: { include: ['block'] },
  },
};

export const Uppercase: Story = {
  name: 'uppercase',
  args: { uppercase: true },
  parameters: {
    controls: { include: ['children', 'uppercase'] },
  },
};

export const PrependIcon: Story = {
  name: 'prependIcon',
  args: { children: 'Add', prependIcon: <Icon.Add /> },
  parameters: {
    controls: { include: ['children', 'prependIcon'] },
  },
};

export const AppendIcon: Story = {
  name: 'appendIcon',
  args: { children: 'Read more', appendIcon: <Icon.ChevronRight /> },
  parameters: {
    controls: { include: ['children', 'appendIcon'] },
  },
};

const LoadingStory = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Button loading={loading} onClick={handleClick}>
      Fetch data
    </Button>
  );
};

export const Loading: Story = {
  name: 'loading',
  render: () => <LoadingStory />,
};

export const LoadingIcon: Story = {
  name: 'loadingIcon',
  render: () => (
    <>
      <Button loadingIcon="Loading..." loading>
        Text indicator
      </Button>
      <Button loadingIcon={<Icon.DotsLoader fill="blue" width="32" height="32" />} loading>
        Icon indicator
      </Button>
    </>
  ),
};

const LoadingPositionStory = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div>
        <Button onClick={() => setLoading((boolValue) => !boolValue)}>Toggle loading</Button>
      </div>
      <br />
      <div>
        <Button loading={loading} loadingPosition="left">
          Left
        </Button>
        <Button loading={loading}>Center</Button>
        <Button loading={loading} loadingPosition="right">
          Right
        </Button>
      </div>
      <br />
      <div>
        <Button loading={loading} loadingPosition="left" prependIcon={<Icon.Add />}>
          Left
        </Button>
        <Button loading={loading}>Center</Button>
        <Button loading={loading} loadingPosition="right" appendIcon={<Icon.Add />}>
          Right
        </Button>
      </div>
    </>
  );
};

export const LoadingPosition: Story = {
  name: 'loadingPosition',
  render: () => <LoadingPositionStory />,
};
