import { Meta, Story } from '@storybook/angular';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { getInput } from '../input';
import { TestComponent } from './select.component';
import { getSelect } from '../select';

export default {
  component: TestComponent,
  title: 'Select',
} as Meta;

const Template: Story = (args) => ({});

const Default = Template.bind({});

export const InitialFormValues = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const foodSelect = await getSelect(canvas, /Favorite food/i);
    expect(foodSelect.disabled).toBe(false);
    expect(foodSelect.value).toBe('Steak');
    const carSelect = await getSelect(canvas, /Favorite car/i);
    expect(carSelect.disabled).toBe(true);
    expect(carSelect.value).toBe('Volvo');
  },
};

export const SelectOption = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const foodSelect = await getSelect(canvas, /Favorite food/i);
    await foodSelect.selectOption(/pizza/i);
    expect(foodSelect.value).toBe('Pizza');
  },
};
