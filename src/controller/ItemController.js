import moment from 'moment';
import steinStore from '../lib/SteinStore';

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
    const uuid = this.generateUuid();
    const now = moment();
    return steinStore.append(ITEM_SHEET, [{
      uuid, tgl_parsed: now.toISOString, timestamp: now.valueOf(), ...item
    }]);
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

  generateUuid = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
}

const itemController = new ItemController();
export default itemController;