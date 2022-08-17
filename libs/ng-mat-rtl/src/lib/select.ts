import { ByRoleOptions } from '@testing-library/dom';
import { NameRoleOption } from './model/name-role-option';
import { userEvent, fireEvent, screen, within } from '@storybook/testing-library';
import { getRoleOptions } from './model/get-role-options';
import { Canvas } from './model/canvas';

export const getSelect = (canvas: Canvas, roleOptions?: ByRoleOptions | NameRoleOption) => ({
  get element(): HTMLSelectElement {
    return canvas.getByRole('combobox', getRoleOptions(roleOptions));
  },
  selectOption: async function (optionRoleOptions: ByRoleOptions | NameRoleOption) {
    await userEvent.click(this.element);
    const overlay = await screen.findByRole('listbox');
    const overlayElement = within(overlay).getByRole('option', getRoleOptions(optionRoleOptions));
    await userEvent.click(overlayElement);
    await fireEvent.blur(this.element);
  },
  get disabled(): boolean {
    return String(this.element.ariaDisabled).toLowerCase() === 'true';
  },
  get value(): string {
    return this.element.textContent || '';
  },
});
