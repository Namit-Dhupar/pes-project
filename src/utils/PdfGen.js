import { savePDF } from '@progress/kendo-react-pdf';
import { drawDOM, exportPDF} from '@progress/kendo-drawing';

class PdfService {
  createPdf = (html) => {
    savePDF(html, { 
      paperSize: 'auto',
      fileName: "PES_Enquiry.pdf",
      margin: 40
    })
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
      })
    })
  }
}

const Pdf = new PdfService();
export default Pdf;
