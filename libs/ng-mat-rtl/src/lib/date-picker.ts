import { userEvent, screen, within } from '@storybook/testing-library';
import { Matcher } from '@testing-library/dom';
import { Canvas } from './model/canvas';

export const getDatePicker = (canvas: Canvas, labelText: Matcher) => ({
  get element(): HTMLInputElement {
    return canvas.getByLabelText(labelText);
  },
  selectDay: async function (dayLabel: string) {
    const datePickerCanvas = within(this.element.parentElement?.parentElement as HTMLElement);
    await userEvent.click(datePickerCanvas.getByLabelText('Open calendar'));
    const overlay = await screen.findByRole('dialog');
    await userEvent.click(within(overlay).getByText(dayLabel));
  },
  get disabled(): boolean {
    return this.element.disabled;
  },
  get value(): string {
    return this.element.value;
  },
});
