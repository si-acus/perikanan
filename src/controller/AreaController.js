import steinStore from '../lib/SteinStore';

const AREA_SHEET = 'option-area';

class AreaController {
  getAll = (params = { limit: 0, offsite: 0, search: '' }) => {
    return steinStore.read(AREA_SHEET, params);
  }
}

const areaController = new AreaController();
export default areaController;