import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Parser } from "json2csv";

// export the report to PDF
export const exportPDF = async () => {
  const canvas = await html2canvas(document.querySelector("#chart-area"));
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF();
  pdf.addImage(imgData, "PNG", 10, 10, 180, 160);
  pdf.save("report.pdf");
};

// export the report to CSV
export const exportCSV = (droppedAd) => {
  const fields = ["Metric", "Value"];
  const data = droppedAd
    ? Object.entries(droppedAd.metrics).map(([key, value]) => ({
        Metric: `${droppedAd.adName} - ${
          key.charAt(0).toUpperCase() + key.slice(1)
        }`,
        Value: value,
      }))
    : [];

  const json2csvParser = new Parser({ fields });
  const csv = json2csvParser.parse(data);

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "report.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
