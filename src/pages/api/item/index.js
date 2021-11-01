import itemController from '../../../controller/ItemController';

export default handler;

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getItems(req, res);
    case 'POST':
      return addItem(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function getItems(req, res) {
    itemController.getAll().then(items => {
      return res.status(200).json(items.filter(item => item.uuid ? true : false));
    });
  }

  function addItem(req, res) {
    itemController.add(req.body).then(() => {
      return res.status(200).json({});
    }).catch(error => {
      return res.status(400).json({ message: error });
    });
  }

}