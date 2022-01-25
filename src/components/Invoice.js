import { useParams } from "react-router-dom";

export default function Invoice() {
  let params = useParams();
  return <h2>Invoice: {params.invoiceId} | {params.invoiceName.replace(/-/g, " ")}</h2>;
}
