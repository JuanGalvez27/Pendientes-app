import { pool } from '../db.js';


export const allPends = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM pendientes"
    )
    console.log(result);
    return res.json(result)
  }
  catch {
    return res.status(500).json({ message: 'Connection error'})
  }
};

export const onePend = async (req, res) => {
  const id = Number(req.params.id);
  const [result] = await pool.query(
    "SELECT * FROM pendientes WHERE id = ?", [id]
  )
  console.log(result);
  return res.json(result[0]);
}

export const savePend = async (req, res) => {
  try{
    const {title, description, finishDate} = req.body;
    const [result] = await pool.query(
      "INSERT INTO pendientes (title, description, finishDate) VALUES (?, ?, ?)", [
        title, description, finishDate
      ]);
      console.log(result);
      res.status(201).json({
        id: result.id,
        title,
        description,
        finishDate
      })
  } catch {
    return res.status(500).json({ message: "Connection error"})
  }
};

export const deletePend = async (req, res) => {
  try{
    const [result] = await pool.query(
      "DELETE FROM pendientes WHERE id=?", [req.params.id]  
    );
    if(result.affectedRows === 0){
      return res.status(404).json({ message: "Pendiente no encontrado"})
    }
    res.status(204).json({ message: "Pend deleted"})
  } catch { 
    return req.status(500).json({ message: "Connection error"});
  }
}

export const updatePend = async (req, res) => {
  try{
    const [result] = await pool.query(
      "UPDATE pendientes SET ? WHERE id = ?", [
        req.body, req.params.id
    ]);
    res.json(result);
  } catch {
    return res.status(500).json({ message: "Connection error"});
  }
}


