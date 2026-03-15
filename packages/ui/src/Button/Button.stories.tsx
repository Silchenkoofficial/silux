import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components / Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'soft'],
    },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button {...args} variant="solid">Solid</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="soft">Soft</Button>
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button {...args} colorScheme="primary">Primary</Button>
      <Button {...args} colorScheme="secondary">Secondary</Button>
      <Button {...args} colorScheme="success">Success</Button>
      <Button {...args} colorScheme="warning">Warning</Button>
      <Button {...args} colorScheme="danger">Danger</Button>
      <Button {...args} colorScheme="neutral">Neutral</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button {...args} size="xs">XSmall</Button>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="xl">XLarge</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { loading: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button {...args} leftIcon={<span>←</span>}>Left icon</Button>
      <Button {...args} rightIcon={<span>→</span>}>Right icon</Button>
      <Button {...args} leftIcon={<span>←</span>} rightIcon={<span>→</span>}>Both icons</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

export const AsChild: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button {...args} asChild>
        <a href="https://github.com/Silchenkoofficial/silux" target="_blank" rel="noreferrer">
          GitHub link
        </a>
      </Button>
      <Button {...args} asChild variant="outline">
        <a href="https://github.com/Silchenkoofficial/silux" target="_blank" rel="noreferrer">
          Outline link
        </a>
      </Button>
    </div>
  ),
};
