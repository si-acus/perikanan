import moment from 'moment';
import steinStore from '../lib/SteinStore';
import { v4 as uuidv4 } from 'uuid';

const ITEM_SHEET = 'list';

class ItemController {
  getAll = (params = { limit: 0, offsite: 0, search: {} }) => {
    return steinStore.read(ITEM_SHEET, params);
  }

  getById = (uuid) => {
    return steinStore.read(ITEM_SHEET, { search: { uuid } });
  }


  add = (item = {
    komoditas: null,
    area_provinsi: null,
    area_kota: null,
    size: null,
    price: null,
    timestamp: null
  }) => {
    const uuid = uuidv4();
    const now = moment();
    return steinStore.append(ITEM_SHEET, {
      uuid, tgl_parsed: now.toISOString, timestamp: now.valueOf(), ...item
    });
  }

  update = (uuid, item = {
    komoditas: null,
    area_provinsi: null,
    area_kota: null,
    size: null,
    price: null,
  }) => {
    const now = moment();
    return steinStore.edit(ITEM_SHEET, {
      search: { uuid },
      set: { timestamp: now.valueOf(), ...item }
    });
  }

  remove = (uuid) => {
    return steinStore.remove(ITEM_SHEET, { search: { uuid } });
  }

}

const itemController = new ItemController();
export default itemController;