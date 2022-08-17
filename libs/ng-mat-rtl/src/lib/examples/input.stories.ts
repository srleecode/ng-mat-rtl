import { Meta, Story } from '@storybook/angular';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { getInput } from '../input';
import { TestComponent } from './input.component';

export default {
  component: TestComponent,
  title: 'Input',
} as Meta;

const Template: Story = (args) => ({});

const Default = Template.bind({});

export const InitialFormValues = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const companyInput = await getInput(canvas, /Company \(disabled\)/i);
    expect(companyInput.disabled).toBe(true);
    expect(companyInput.value).toBe('Company');
    const firstNameInput = await getInput(canvas, /First name/i);
    expect(firstNameInput.value).toBe('Test');
    expect(firstNameInput.disabled).toBe(false);
  },
};

export const Type = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const companyInput = await getInput(canvas, /Company \(disabled\)/i);
    await companyInput.type('NewTest');
    expect(companyInput.value).toBe('Company');
    const firstNameInput = await getInput(canvas, /First name/i);
    await firstNameInput.type('NewTest');
    expect(firstNameInput.value).toBe('TestNewTest');
  },
};

export const Clear = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const companyInput = await getInput(canvas, /Company \(disabled\)/i);
    await companyInput.clear();
    expect(companyInput.value).toBe('Company');
    const firstNameInput = await getInput(canvas, /First name/i);
    await firstNameInput.clear();
    expect(firstNameInput.value).toBe('');
  },
};

export const Paste = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const companyInput = await getInput(canvas, /Company \(disabled\)/i);
    await companyInput.paste('NewTest');
    expect(companyInput.value).toBe('Company');
    const firstNameInput = await getInput(canvas, /First name/i);
    await firstNameInput.paste('NewTest');
    expect(firstNameInput.value).toBe('TestNewTest');
  },
};

export const FocusBlur = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const firstNameInput = await getInput(canvas, /First name/i);
    firstNameInput.element.focus();
    firstNameInput.element.blur();
    firstNameInput.element.focus();
  },
};
