const DMFPDF = "/sql/SQLDMV.pdf"
const LogShippingMP = "/sql/SQLLogShipping.mp4"
const QueryOptimizePDF = "/sql/SQLQueryOptimization.pdf"
const SQLReplicationMP = "/sql/SQLReplication.mp4"
const SQL17JanPDF = "/sql/SQLServer_Jan172025.pdf"
const SQL20JanPDF = "/sql/SQLServer_Jan202025.pdf"
const SQL21JanPDF = "/sql/SQLServer_Jan212025.pdf"
const SQL22JanPDF = "/sql/SQLServer_Jan222025.pdf"
const SQL23JanPDF = "/sql/SQLServer_Jan232025.pdf"
const SQL24JanPDF = "/sql/SQLServer_Jan242025.pdf"
const SQL27JanPDF = "/sql/SQLServer_Jan272025.pdf"
const ACIDPDF = "/sql/ACID_IsolationLevel.pdf"
const SQLReminderPDF = "/sql/Reminder_Duplicate_Greatest.pdf"
const ExtendedEventPDF = "/sql/SQL_ExtendedEvents.pdf"
const SQLMonitoringPDF = "/sql/SQL_MonitoringTroubleshooting.pdf"
const SQLStatisticsPDF = "/sql/SQL_Statistics.pdf"
const PdfImage ="/sql/pdfImage.jpg"
const VideoImage ="/sql/videoImage.jpg"

const SQLData =[

{
    id:1,
    pdfLink:DMFPDF,
    description:"SQL DMF/DMA DMV (Dynamic Management View) is a system view in SQL Server that returns real-time information about the server’s health, performance, and internal state — such as CPU usage, memory grants, I/O stats, query execution, locking, and indexes. Think of DMVs as “virtual tables” that expose diagnostic data from SQL Server’s internal engine.",
    pdfimage:PdfImage
},
{
    id:2,
    pdfLink:LogShippingMP,
    description:"Log Shipping Log Shipping in SQL Server is a high-availability and disaster recovery (HA/DR) technique where transaction log backups from a primary (source) database are automatically copied and restored to one or more secondary (standby) databases on different servers.",
    pdfimage:VideoImage
},
{
    id:3,
    pdfLink:QueryOptimizePDF,
    description:"Query Optimization in SQL Server is the process of choosing the most efficient way to execute a SQL query by analyzing different possible execution plans and selecting the one that uses the least amount of resources (CPU, memory, I/O, and time).",
    pdfimage:PdfImage
},
{
    id:4,
    pdfLink:SQLReplicationMP,
    description:"SQLReplicationMP",
    pdfimage:VideoImage
},
{
    id:5,
    pdfLink:SQL17JanPDF,
    description:"SQL17JanPDF",
    pdfimage:PdfImage
},
{
    id:6,
    pdfLink:SQL20JanPDF,
    description:"SQL20JanPDF",
    pdfimage:PdfImage
},
{
    id:7,
    pdfLink:SQL21JanPDF,
    description:"SQL21JanPDF",
    pdfimage:PdfImage
},
{
    id:8,
    pdfLink:SQL22JanPDF,
    description:"SQL22JanPDF",
    pdfimage:PdfImage
},
{
    id:9,
    pdfLink:SQL23JanPDF,
    description:"SQL23JanPDF",
    pdfimage:PdfImage
},
{
    id:10,
    pdfLink:SQL24JanPDF,
    description:"SQL24JanPDF",
    pdfimage:PdfImage
},
{
    id:11,
    pdfLink:SQL27JanPDF,
    description:"SQL27JanPDF",
    pdfimage:PdfImage
},
{
    id:12,
    pdfLink:ACIDPDF,
    description:"ACIDPDF",
    pdfimage:PdfImage
},
{
    id:13,
    pdfLink:SQLReminderPDF,
    description:"SQLReminderPDF",
    pdfimage:PdfImage
},
{
    id:14,
    pdfLink:ExtendedEventPDF,
    description:"ExtendedEventPDF",
    pdfimage:PdfImage
},
{
    id:15,
    pdfLink:SQLMonitoringPDF,
    description:"SQLMonitoringPDF",
    pdfimage:PdfImage
},
{
    id:16,
    pdfLink:SQLStatisticsPDF,
    description:"SQLStatisticsPDF",
    pdfimage:PdfImage
}
]

export default SQLData;