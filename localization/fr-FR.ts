/* eslint-disable max-len */

import {
  strings as enStrings,
} from './en-US';

const dateFormat = 'DD MM YYYY';

const supportUrl = 'https://support.my-site.com';
const localizedSupportUrl = `${supportUrl}/fr-fr/`;
const articlesUrl = `${localizedSupportUrl}articles/`;
const supportNewRequestUrl = `${localizedSupportUrl}new`;

const getCommonAddressTitle = (vehicleName: string) => `Votre ${vehicleName} adresse`;

export const strings: typeof enStrings = {
  bookTitle: 'Livre',

  commonErrorMessage: "Oups, quelque chose s'est mal passé",

  supportNewRequestUrl,

  dateFormats: {
    date: dateFormat,
    dateTime: `${dateFormat} HH:mm`,
  },

  main: {
    supportUrl: `${supportNewRequestUrl}?ticket-id=354523`,
    getStateDescription: (vehicleName: string) => `Ton ${vehicleName} état`,
  },
  address: {
    getCarAddressTitle: (vehicleName: string) => `${getCommonAddressTitle(vehicleName)} (Auto)`,
    getBusAddressTitle: (vehicleName: string) => `${getCommonAddressTitle(vehicleName)} (Bus)`,
  }
};
