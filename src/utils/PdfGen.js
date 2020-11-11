import { savePDF } from '@progress/kendo-react-pdf';
import { drawDOM, exportPDF} from '@progress/kendo-drawing';
import voucher_codes from 'voucher-code-generator';

class PdfService {
  constructor(){
    function getCurrentFinancialYear() {
      var fiscalyear = "";
      var today = new Date();
      if ((today.getMonth() + 1) <= 3) {
        fiscalyear = (today.getFullYear() - 1).toString().substr(-2) + "-" + today.getFullYear().toString().substr(-2)
      } else {
        fiscalyear = today.getFullYear().toString().substr(-2) + "-" + (today.getFullYear() + 1).toString().substr(-2)
      }
      return fiscalyear
    }
    this.code = voucher_codes.generate({
    length: 5,
    count: 1,
    charset: voucher_codes.charset("alphabetic"),
    prefix: "PES/",
    postfix: "/"+getCurrentFinancialYear()
  });
  }
  createPdf = (html) => {
    savePDF(html, { 
      paperSize: 'auto',
      fileName: `${this.code}.pdf`,
      margin: 40
    })
    localStorage.setItem("EnqNo", this.code);
  }
  createBase64 = (html) => {
    drawDOM(html, {
      paperSize: 'auto',
      margin: 40
    }).then((group) => {
      return exportPDF(group, {paperSize: 'auto',
      margin: 40}).then((data) => {
        var pdfData = data.split(';base64,')[1];
        localStorage.setItem("Base64", pdfData);
        localStorage.setItem("EnqNo", this.code);
      })
    })
  }
}

const Pdf = new PdfService();
export default Pdf;
