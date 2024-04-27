import { Switch } from '../components/ui/switch';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disabled: Story;
