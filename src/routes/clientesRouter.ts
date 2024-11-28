import { Router } from 'express';
import { addCliente, deleteCliente, getCliente, getClientes, updateCliente } from '../repositories/clientesRepository';

const router = Router();

router.get('/', async (_, res) => {
  const clientes = await getClientes();
  res.json(clientes);
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const cliente = await getCliente(id);
  res.json(cliente);
});

router.post('/', async (req, res) => {
  const newCliente = req.body;
  const cliente = await addCliente(newCliente);
  res.json(cliente);
});

router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const newData = req.body;
  const cliente = await updateCliente(id, newData);
  res.json(cliente);
});

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const cliente = await deleteCliente(id);
  res.json(cliente);
});

export default router;