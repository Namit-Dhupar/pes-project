import { savePDF } from '@progress/kendo-react-pdf';

class PdfService {
  createPdf = (html) => {
    savePDF(html, { 
      paperSize: 'auto',
      fileName: 'PesEnquiry.pdf',
      margin: 40
    })
  }
}

const Pdf = new PdfService();
export default Pdf;
