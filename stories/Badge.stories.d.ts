import { Badge } from '../components/ui/badge';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: typeof Badge;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            options: string[];
            control: {
                type: "select";
            };
        };
        children: {
            control: {
                type: "text";
            };
        };
    };
    args: {
        variant: "default";
        children: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Secondary: Story;
export declare const Destructive: Story;
export declare const Outline: Story;
