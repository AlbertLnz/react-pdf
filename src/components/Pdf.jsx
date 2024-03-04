import { Document, Text, Page, Image } from "@react-pdf/renderer";
import image from '../assets/image.png'

const Pdf = () => {
  return (
    <Document>
      <Page>
        <Text>Title 1</Text>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti officiis non nesciunt vero soluta iste iure, ad saepe maiores labore at eligendi repellendus reprehenderit dicta asperiores vitae, nostrum sint mollitia sit culpa? Quia eius, error eos sequi aspernatur ipsum, blanditiis dolore quibusdam aut in cumque ducimus laborum perferendis tempora architecto.</Text>
        <Image src={image} />
      </Page>
    </Document>
  )
}

export default Pdf
