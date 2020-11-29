import React, { createRef, useEffect, useState } from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import '../../../styles/filepdf.scss';
import Pdf from '../../../utils/PdfGen';
import voucher_codes from 'voucher-code-generator';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles((theme) => ({
    table: {
      maxWidth: '70%',
      [theme.breakpoints.up('sm')]: {
        maxWidth: '70%'
      },
      marginTop: "5%"
    },
  }));

const bodyRef = createRef();

const Generatepdf = (props) => {
    const classes = useStyles();
    const enquiredProducts = useSelector(state => state.enquiry.products);
    const [Code, setCode] = useState('');
    const enquiredTable = [].concat.apply([], enquiredProducts.map((el) =>el.Subtype.filter(p => p.isEnquired === true))).map((pes,index) => {
      return(
        <StyledTableRow key={index}>
            <StyledTableCell component="th" scope="row">
               {index + 1}
            </StyledTableCell>
      <StyledTableCell>{pes.ItemName}</StyledTableCell>
      <StyledTableCell>
        {pes.SelectedHP ?
        <span><b>HP/kW: </b>{pes.SelectedHP}</span>
       : pes.SelectedSize ?<span><b>SIZE: </b>{pes.SelectedSize}</span> : null}
        <br/>
       {pes.SelectedMOC ?
        <span><b>MOC: </b>{pes.SelectedMOC}</span>: null}
        <br/>
        {pes.ItemMessage ?
        <span><b>OTHER DETAILS: </b>{pes.ItemMessage}</span> : null}
      </StyledTableCell>
        </StyledTableRow>
      )
    });
      
   const getDate = () => {
      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth()+1;
      const date = d.getDate();
      const fulldate = date+'-'+month+'-'+year
      return fulldate
    }

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
    
    useEffect(() => {
    const makeGeneratable = props.makeGeneratable;
    const makeGeneratableUri = props.makeGeneratableUri;
    if(props.generate === true){
      Pdf.createPdf(bodyRef.current);
      makeGeneratable();
    }
    else if(props.generateUri === true){
      Pdf.createBase64(bodyRef.current);
      makeGeneratableUri();
    }
    }, [props.generate, props.makeGeneratable, props.generateUri, props.makeGeneratableUri])
    
    useEffect(()=>{
      const code = voucher_codes.generate({
        length: 5,
        count: 1,
        charset: voucher_codes.charset("alphabetic"),
        prefix: "PES/",
        postfix: "/"+getCurrentFinancialYear()
      });
      setCode(code);
    }, [])
  
    return (
      <Container ref={bodyRef}>
        <div id="page_1">
        <div id="p1dimg1">
          <img alt="pespdf" src="data:image/jpg;base64,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ssjIw5xuZFzzx2NelnTLFooYjZ25jg5iQxAiP/dHb8KkNpbmXzTBGZCQS+0ZyM4OfbJ/OiwHlV14v1S7FjcQ3zwQT3l6nly3MdqVVRGVRndSAVJYdOakm1+/HiPyG1YC0WztHUNq8UQywO9g5TEucdsfhmvT3sLSQ5e1hY7i3zRg8nqfrwKX7Fa5H+jw8DA+QcD0oA82g1bW/wDhL0WS8uYLFtamthcSzhoWVScQeXt+ViPusSOlW/BWrXs/iSe0udRmvQ9s8hdZ/Mj3CTHzRlQ0D4ONnTg+lehGGMggouCdx46n1pRGikkKoJ6kDrRYDmtN1vW7nxpqOl3WkeTpkEe6G8w3zn5cDPQ5yx46Y71jW2os/ia4Go65fWuoJqpt7WwjBKSW/G3MeOVYZJk7eoxXoFN8td4faNw745pgebaTqt5Ld6TINVvZdbuL5o9R06QnZDF82793j92FG3DcZ981k6Tq3iE2lja6hqV8rPo91dRXiI0pZZI4yhKjl5I2DjGCcY9a9f2Lu3YGfXvSbEUDgAL046UgPIrHU79LNXS9vntrTVrKW4nivJriIxFW34Zhv28KWQkgZrVs9beDU7PULu/uhpsmrX+2R3co0WzCcd1z07DtivSQAOnel2jFAHnd3cQQeJrzWLWe/ntU0n+0IE+1z+U8xkZQAmcYPyjbjHPSslX1+Lw3eaJdvqkF609pcQ3UjEyASSosmCpI2q+4gZ+62CBXrWBRgUwPKorfVdS8Pa9dalHexalBqcYWOKaVVXPkrJtCnlDhiOoGTj1p/iixm0zxHbjT01GVYIoRDbE3Db/3jFjFKrEBhn5t46Y6jp6nijFKwAKKKKYBQaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAiitoIJZ5YolR53EkrAcuwUKCffaqj8BUtFFAGfeaDpOoX0N9eadbT3UIAjlkjBYAHIGe4BJIz0JyK0KKKACobW1gsrdbe2iSKFc7UQYAycn9SamooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q==" id="p1img1" /></div>
        <div className="dclr" />
        <table cellPadding={0} cellSpacing={0} className="t0">
          <tbody><tr>
    <td className="tr0 td0"><p className="p0 ft0">Ref. No. : <nobr>{Code}</nobr></p></td>
              <td className="tr0 td1"><p className="p0 ft0">Date: <strong>{getDate()}</strong></p></td>
            </tr>
          </tbody></table>
        <table cellPadding={0} cellSpacing={0} className="t1">
          <tbody><tr>
              <td className="tr1 td2"><p className="p0 ft0">Kind Attn</p></td>
              <td className="tr1 td3"><p className="p3 ft0">:</p></td>
              <td className="tr1 td4"><p className="p4 ft3">Respected Sir</p></td>
            </tr>
            <tr>
              <td className="tr2 td2"><p className="p0 ft0">Sub</p></td>
              <td className="tr2 td3"><p className="p5 ft0">:</p></td>
              <td className="tr2 td4"><p className="p6 ft3">Enquiry for the following products</p></td>
            </tr>
            <tr>
              <td className="tr0 td2"><p className="p0 ft0">Dear Sir,</p></td>
              <td className="tr0 td3"><p className="p0 ft4">&nbsp;</p></td>
              <td className="tr0 td4"><p className="p0 ft4">&nbsp;</p></td>
            </tr>
          </tbody></table>

        <p className="p2 ft0"> We are pleased to submit our enquiry for the products below :-</p>
        <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S. No</StyledTableCell>
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell>Configuration</StyledTableCell>            
            </TableRow>
          </TableHead>
          <TableBody>
            {enquiredTable}
          </TableBody>
        </Table>  
      </TableContainer>
        <table cellPadding={0} cellSpacing={0} className="t2">
          <tbody>
            <tr>
              <td colSpan={5} className="tr8 td36"><p className="p0 ft3">Client Information</p></td>
              <td className="tr8 td1"><p className="p0 ft4">&nbsp;</p></td>
              <td className="tr8 td37"><p className="p0 ft4">&nbsp;</p></td>
              <td className="tr8 td2"><p className="p0 ft4">&nbsp;</p></td>
              <td className="tr8 td33"><p className="p0 ft4">&nbsp;</p></td>
              <td className="tr8 td38"><p className="p0 ft4">&nbsp;</p></td>
            </tr>
            <tr>
              <td colSpan={3} className="tr9 td39"><p className="p0 ft0">Name</p></td>
              <td className="tr9 td26"><p className="p14 ft0">:</p></td>
              <td colSpan={5} className="tr9 td40"><p className="p8 ft0">{props.firstName+ " "+props.lastName}</p></td>
              <td className="tr9 td38"><p className="p0 ft4">&nbsp;</p></td>
            </tr>
            <tr>
              <td colSpan={3} className="tr10 td39"><p className="p0 ft0">Company Name</p></td>
              <td className="tr10 td26"><p className="p14 ft0">:</p></td>
              <td colSpan={3} className="tr10 td41"><p className="p8 ft0">{props.Company}</p></td>
              <td className="tr10 td2"><p className="p0 ft4">&nbsp;</p></td>
              <td className="tr10 td33"><p className="p0 ft4">&nbsp;</p></td>
              <td className="tr10 td38"><p className="p0 ft4">&nbsp;</p></td>
            </tr>
            <tr>
              <td colSpan={3} className="tr10 td39"><p className="p0 ft0">Phone Number</p></td>
              <td className="tr10 td26"><p className="p14 ft0">:</p></td>
    <td colSpan={5} className="tr10 td40"><p className="p8 ft0">{props.Phone}</p></td>
              <td className="tr10 td38"><p className="p0 ft4">&nbsp;</p></td>
            </tr>
            <tr>
              <td colSpan={3} className="tr10 td39"><p className="p0 ft0">E-Mail Address</p></td>
              <td className="tr10 td26"><p className="p14 ft0">:</p></td>
    <td className="tr10 td42"><p className="p8 ft0">{props.Email}</p></td>
            </tr>
          </tbody></table>
      </div>
      </Container>
    )
}

export default Generatepdf;
