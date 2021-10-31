import itemController from '../../../controller/ItemController';

export default handler;

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getItemById();
    case 'PUT':
      return updateItem();
    case 'DELETE':
      return deleteItem();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function getItemById() {
    itemController.getById(req.query.id).then(item => {
      return res.status(200).json(item);
    });
  }

  function updateItem() {
    itemController.update(req.query.id, req.body)
      .then(() => {
        return res.status(200).json({});
      })
      .catch(error => {
        return res.status(400).json({ message: error });
      });
  }

  function deleteItem() {
    itemController.remove(req.query.id);
    return res.status(200).json({});
  }
}