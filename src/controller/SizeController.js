import steinStore from '../lib/SteinStore';

const SIZE_SHEET = 'option_size';

class SizeController {
  getAll = (params = { limit: 0, offsite: 0, search: '' }) => {
    return steinStore.read(SIZE_SHEET, params);
  }
}

const sizeController = new SizeController();
export default sizeController;