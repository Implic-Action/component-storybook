import { Sheet } from '../components/ui/sheet';
import { Meta, StoryObj } from '@storybook/react';

type SheetProps = React.ComponentProps<typeof Sheet> & {
    side: "top" | "bottom" | "left" | "right";
};
declare const meta: Meta<SheetProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
