import { Toaster } from '../components/ui/sonner';
import { Meta, StoryObj } from '@storybook/react';

type ToasterProps = React.ComponentProps<typeof Toaster>;
type ExtendedToasterProps = ToasterProps & {
    description: string;
    action: string;
};
declare const meta: Meta<ExtendedToasterProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Success: Story;
export declare const Error: Story;
export declare const Warning: Story;
export declare const Info: Story;
export declare const Description: Story;
