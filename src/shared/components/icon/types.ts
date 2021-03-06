export type IconSize = 'lg' | 'sm';

export enum IconList {
  'archiveBox' = 'archive-box',
  'archiveDrawer' = 'archive-drawer',
  'archiveFolder' = 'archive-folder',
  'arrowDown' = 'arrow-down',
  'arrowDropDown' = 'arrow-drop-down',
  'arrowDropUp' = 'arrow-drop-up',
  'arrowLeft' = 'arrow-left',
  'arrowRight' = 'arrow-right',
  'arrowUp' = 'arrow-up',
  'attach' = 'attach',
  'categoryHousehold' = 'category-household',
  'categoryLiability' = 'category-liability',
  'categoryMotor' = 'category-motor',
  'categoryTravel' = 'category-travel',
  'calendar' = 'calendar',
  'chartBar' = 'chart-bar',
  'chartPie' = 'chart-pie',
  'check' = 'check',
  'code' = 'code',
  'computer' = 'computer',
  'dashboard' = 'dashboard',
  'document' = 'document',
  'drag' = 'drag',
  'edit' = 'edit',
  'feedbackDanger' = 'feedback-danger',
  'feedbackInfo' = 'feedback-info',
  'feedbackSuccess' = 'feedback-success',
  'feedbackWarning' = 'feedback-warning',
  'fileDownload' = 'file-download',
  'fileUpload' = 'file-upload',
  'filters' = 'filters',
  'flash' = 'flash',
  'flow' = 'flow',
  'hierarchy' = 'hierarchy',
  'home' = 'home',
  'increase' = 'increase',
  'language' = 'language',
  'listGrid' = 'list-grid',
  'listStack' = 'list-stack',
  'lock' = 'lock',
  'logOut' = 'log-out',
  'mail' = 'mail',
  'menuHamburger' = 'menu-hamburger',
  'menuHorizontal' = 'menu-horizontal',
  'menuVertical' = 'menu-vertical',
  'minus' = 'minus',
  'notification' = 'notification',
  'paymentBankTransfer' = 'payment-bank-transfer',
  'paymentDirectDebit' = 'payment-direct-debit',
  'paymentCreditCard' = 'payment-credit-card',
  'paymentEsr' = 'payment-esr',
  'phone' = 'phone',
  'pin' = 'pin',
  'plus' = 'plus',
  'puzzle' = 'puzzle',
  'sales' = 'sales',
  'save' = 'save',
  'search' = 'search',
  'settings' = 'settings',
  'shield' = 'shield',
  'stack' = 'stack',
  'stopwatch' = 'stopwatch',
  'support' = 'support',
  'tools' = 'tools',
  'trash' = 'trash',
  'url' = 'url',
  'userCircle' = 'user-circle',
  'user' = 'user',
  'x' = 'x'
}

export interface IconProps {
  classNames?: string;
  icon: IconList;
  size?: IconSize;
  style?: React.CSSProperties;
}
