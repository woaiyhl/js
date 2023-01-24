const express = require('express')
const router = express.Router()

router.get('/get',(req,res) => {
  const query = req.query
  console.log(query);
  res.send({
    status: 0,
    msg: 'Get 请求成功11',
    data: query
  })
})

module.exports = router