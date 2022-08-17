export type NameRoleOption =
  | RegExp
  | string
  | ((accessibleName: string, element: Element) => boolean);
