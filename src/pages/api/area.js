import areaController from '../../controller/AreaController';

export default handler;

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getItems();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function getItems() {
    areaController.getAll().then(areas => {
      return res.status(200).json(areas);
    });
  }

}