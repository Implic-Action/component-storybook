import { Button } from '../components/ui/test';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithCustomClass: Story;
