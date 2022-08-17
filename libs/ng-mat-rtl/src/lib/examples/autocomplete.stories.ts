import { Meta, Story } from '@storybook/angular';
import { TestComponent } from './autocomplete.component';
import { getAutoComplete } from '../auto-complete';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: TestComponent,
  title: 'Autocomplete',
} as Meta;

const Template: Story = (args) => ({});

const Default = Template.bind({});

export const InitialFormValues = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const foodAutocomplete = await getAutoComplete(canvas, /Favorite food/i);
    expect(foodAutocomplete.disabled).toBe(false);
    expect(foodAutocomplete.value).toBe('Steak');
    const carAutocomplete = await getAutoComplete(canvas, /Favorite car/i);
    expect(carAutocomplete.disabled).toBe(true);
    expect(carAutocomplete.value).toBe('Volvo');
  },
};

export const SelectOption = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const foodAutocomplete = await getAutoComplete(canvas, /Favorite food/i);
    await foodAutocomplete.selectOption(/pizza/i);
    expect(foodAutocomplete.value).toBe('Pizza');
  },
};

export const Type = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const foodAutocomplete = await getAutoComplete(canvas, /Favorite food/i);
    await foodAutocomplete.type('Test');
    expect(foodAutocomplete.value).toBe('SteakTest');
  },
};
