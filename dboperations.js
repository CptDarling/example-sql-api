const config = require("./dbconfig.js");
const sql = require('mssql');

async function getBins() {
  try {
    let pool = await sql.connect(config);
    let bins = await pool.request()
      .query("SELECT TOP(10) * FROM bins");
    return bins.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getBin(binId) {
  try {
    let pool = await sql.connect(config);
    let bin = await pool.request()
      .input('bin_location', VarChar, binId)
      .query('SELECT * FROM bins WHERE compno = 9 AND bin_location = @bin_location');
    return bin.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getBin, getBins };
