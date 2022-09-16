import { Router } from 'express';
import {
  allPends, 
  onePend,
  savePend,
  deletePend,
  updatePend
} from '../controllers/pendientes.controllers.js';

const router = Router();

router.get('/pendientes', allPends);
router.get('/pendientes/:id', onePend);
router.post('/pendientes', savePend);
router.delete('/pendientes/:id', deletePend);
router.put('/pendientes/:id', updatePend)

export default router;