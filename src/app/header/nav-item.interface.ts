export interface NavItem {
  name: string;
  disabled?: boolean;
  active?: boolean;
  route?: string;
  children?: NavItem[];
}
