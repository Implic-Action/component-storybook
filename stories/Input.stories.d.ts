import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../node_modules/react').ForwardRefExoticComponent<import('../components/ui/input').InputProps & import('../../node_modules/react').RefAttributes<HTMLInputElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        type: {
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
        placeholder: {
            control: {
                type: "text";
            };
        };
    };
    args: {
        type: "text";
        placeholder: string;
        disabled: false;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
