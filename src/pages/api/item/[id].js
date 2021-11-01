import itemController from '../../../controller/ItemController';

export default handler;

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getItemById(req, res);
    case 'PUT':
      return updateItem(req, res);
    case 'DELETE':
      return deleteItem(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function getItemById(req, res) {
    itemController.getById(req.query.id).then(item => {
      return res.status(200).json(item);
    });
  }

  function updateItem(req, res) {
    itemController.update(req.query.id, req.body)
      .then(() => {
        return res.status(200).json({});
      })
      .catch(error => {
        return res.status(400).json({ message: error });
      });
  }

  function deleteItem(req, res) {
    itemController.remove(req.query.id)
      .then(() => {
        return res.status(200).json({});
      });
  }
}