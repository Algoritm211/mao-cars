// Use type safe message keys with `next-intl`
type Messages = typeof import('./messages/en_US.json');
declare interface IntlMessages extends Messages {}
