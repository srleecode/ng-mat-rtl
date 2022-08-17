import { Meta, Story } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { getDialogCanvas } from '../dialog';
import { TestComponent } from './dialog.component';
import { expect } from '@storybook/jest';
import { getInput } from '../input';
export default {
  component: TestComponent,
  title: 'Dialog',
} as Meta;

const Template: Story = (args) => ({});

const Default = Template.bind({});

export const DialogCanvas = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByText(/Open dialog/i));
    const dialogCanvas = await getDialogCanvas();
    const input = await getInput(dialogCanvas, /Favorite Animal/i);
    expect(input.value).toBe('koala');
  },
};
