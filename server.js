/**
 * @file server.js
 * @author vanilla-unicorn
 * @copyright 2021 JustForFun. All rights reserved.
 * @section License MIT
 */

const express = require('express');
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`The Express API Server has started on port ${PORT}.`);
});
