import xlsx from 'xlsx';

class XlsxController {
  async import(req, res) {
    try {
      const workbook = xlsx.readFile(req.file.path);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
      for (let row of data) {
        const [column1, column2, column3] = row; // Adjust this line based on your Excel structure
        console.log(column1, column2, column3)
      }
    } catch (error) {
      if(!err.code) { err.code = 500 }
      return res.status(err.code).json({
        status: false,
        message: err.message,
        data: null
      });
    }
  }
}

export default new XlsxController;