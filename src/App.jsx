import Pdf from "./components/Pdf"
import { PDFDownloadLink } from "@react-pdf/renderer"

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <div>
        <PDFDownloadLink document={<Pdf />} fileName='myDocument.pdf'>
          {
            ({blob, url, loading, error}) => (
              loading ? 'Loading document...' : <button>Download now!</button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  )
}

export default App
