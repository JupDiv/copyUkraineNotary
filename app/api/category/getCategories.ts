'use server';

import { getBaseUrl } from '../../../lib/getBaseUrl';

export default async function getCategories() {
  return fetch(`${getBaseUrl()}/api/category/`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
