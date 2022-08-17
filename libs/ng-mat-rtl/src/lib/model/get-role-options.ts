import { ByRoleOptions } from '@testing-library/dom';
import { NameRoleOption } from './name-role-option';

const isNameRoleOption = (
  roleOption: ByRoleOptions | NameRoleOption
): roleOption is NameRoleOption =>
  typeof roleOption === 'function' ||
  typeof roleOption === 'string' ||
  roleOption instanceof RegExp;

export const getRoleOptions = (
  roleOption?: ByRoleOptions | NameRoleOption
): ByRoleOptions | undefined => {
  if (!roleOption) {
    return undefined;
  }
  if (isNameRoleOption(roleOption)) {
    return { name: roleOption };
  }
  return roleOption;
};
