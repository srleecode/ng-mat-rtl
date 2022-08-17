import { userEvent } from '@storybook/testing-library';
import { Matcher } from '@testing-library/dom';
import { Canvas } from './model/canvas';

export const getInput = (canvas: Canvas, labelText: Matcher) => ({
  get element(): HTMLInputElement {
    return canvas.getByLabelText(labelText);
  },
  type: async function (text: string) {
    await userEvent.type(this.element, text);
    this.element.blur();
  },
  paste: function (text: string) {
    userEvent.paste(this.element, text);
    this.element.blur();
  },
  clear: function () {
    userEvent.clear(this.element);
    this.element.blur();
  },
  get disabled(): boolean {
    return this.element.disabled;
  },
  get value(): string {
    return this.element.value;
  },
});
