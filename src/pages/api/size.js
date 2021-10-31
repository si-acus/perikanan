import sizeController from '../../controller/SizeController';

export default handler;

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getItems();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function getItems() {
    sizeController.getAll().then(size => {
      return res.status(200).json(size);
    });
  }

}