import { Meta, Story } from '@storybook/angular';
import { TestComponent } from './date-picker.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { getDatePicker } from '../date-picker';

export default {
  component: TestComponent,
  title: 'DatePicker',
} as Meta;

const Template: Story = (args) => ({});

const Default = Template.bind({});

export const InitialFormValues = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const startDatePicker = await getDatePicker(canvas, /Start date/i);
    expect(startDatePicker.disabled).toBe(true);
    expect(startDatePicker.value).toBe('12/31/2022');
    const endDatePicker = await getDatePicker(canvas, /End date/i);
    expect(endDatePicker.disabled).toBe(false);
    expect(endDatePicker.value).toBe('12/31/2023');
  },
};

export const SelectDay = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const endtDatePicker = await getDatePicker(canvas, /End date/i);
    await endtDatePicker.selectDay('1');
    expect(endtDatePicker.value).toBe('12/1/2023');
  },
};
