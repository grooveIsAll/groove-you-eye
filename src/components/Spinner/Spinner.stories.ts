import type { Meta, StoryObj } from '@storybook/react';

import Spinner from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Misc/Spinner',
  component: Spinner,
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small'
  },
};

export const Medium: Story = {
  args: {
    size: 'medium'
  },
};

export const Large: Story = {
  args: {
    size: 'large'
  },
};

export const XLarge: Story = {
  args: {
    size: 'xlarge'
  },
};