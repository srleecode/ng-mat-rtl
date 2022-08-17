import { ByRoleOptions } from '@testing-library/dom';
import { NameRoleOption } from './model/name-role-option';
import { userEvent, screen, within } from '@storybook/testing-library';
import { getRoleOptions } from './model/get-role-options';
import { Canvas } from './model/canvas';

export const getAutoComplete = (canvas: Canvas, roleOptions?: ByRoleOptions | NameRoleOption) => ({
  get element(): HTMLInputElement {
    return canvas.getByRole('combobox', getRoleOptions(roleOptions));
  },
  selectOption: async function (optionRoleOptions: ByRoleOptions | NameRoleOption) {
    await userEvent.click(this.element);
    const overlay = await screen.findByRole('listbox');
    const overlayElement = within(overlay).getByRole('option', getRoleOptions(optionRoleOptions));
    await userEvent.click(overlayElement);
    this.element.blur();
  },
  type: async function (text: string) {
    await userEvent.type(this.element, text);
    this.element.blur();
  },
  get disabled(): boolean {
    return this.element.disabled;
  },
  get value(): string {
    return this.element.value;
  },
});
