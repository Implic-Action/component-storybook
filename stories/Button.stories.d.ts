import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../node_modules/react').ForwardRefExoticComponent<import('../components/ui/button').ButtonProps & import('../../node_modules/react').RefAttributes<HTMLButtonElement>>;
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
        size: {
            options: string[];
            control: {
                type: "select";
            };
        };
        disabled: {
            control: {
                type: "boolean";
            };
        };
    };
    args: {
        onClick: import('@vitest/spy').Mock<[event: import('../../node_modules/react').MouseEvent<HTMLButtonElement, MouseEvent>], void>;
        children: string;
        disabled: false;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Destructive: Story;
export declare const Outline: Story;
export declare const Secondary: Story;
export declare const Ghost: Story;
export declare const Link: Story;
export declare const Small: Story;
export declare const Large: Story;
export declare const Icon: Story;
