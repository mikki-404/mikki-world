import React, {useState} from "react";
import {Document, Page} from "react-pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
//import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


export default function AllPagesPDFContainer(props) {

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    const {pdf} = props;
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        /*<div>
            <p className="article-metadata">{pageNumber} / {numPages}</p>
            <Document
                file={pdf}
                options={{workerSrc: "/pdf.worker.js"}}
                fillWidth
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1}/>
                ))}
            </Document>
        </div>*/
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <div style={{ height: "720px" }}>
                <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
            </div>
        </Worker>
    );
}