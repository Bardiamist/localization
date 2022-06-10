/* eslint-disable max-len */

import {
  strings as enStrings,
} from './en-US';

const dateFormat = 'DD MM YYYY';

const supportUrl = 'https://support.my-site.com';
const localizedSupportUrl = `${supportUrl}/fr-fr/`;
const articlesUrl = `${localizedSupportUrl}articles/`;
const supportNewRequestUrl = `${localizedSupportUrl}new`;

const getCommonAddressTitle = (vehicleName: string) => `Your ${vehicleName} address`;

export const strings: typeof enStrings = {
  bookTitle: 'Livre',

  commonErrorMessage: 'Oops, something went wrong',

  supportNewRequestUrl,

  dateFormats: {
    date: dateFormat,
    dateTime: `${dateFormat} HH:mm`,
  },

  main: {
    supportUrl: `${supportNewRequestUrl}?ticket-id=354522`,
    getStateDescription: (vehicleName: string) => `Your ${vehicleName} state:`,
  },
  address: {
    getCarAddressTitle: (vehicleName: string) => `${getCommonAddressTitle(vehicleName)} (Car)`,
    getBusAddressTitle: (vehicleName: string) => `${getCommonAddressTitle(vehicleName)} (Bus)`,
  }
};
