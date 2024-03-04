import { Document, Text, Page, Image, StyleSheet, View } from "@react-pdf/renderer";
import image from '../assets/image.png'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#202020',
    color: 'white'
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  }
})

const Pdf = () => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text>Title 1</Text>
        <View style={styles.section}>
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti officiis non nesciunt vero soluta iste iure, ad saepe maiores labore at eligendi repellendus reprehenderit dicta asperiores vitae, nostrum sint mollitia sit culpa? Quia eius, error eos sequi aspernatur ipsum, blanditiis dolore quibusdam aut in cumque ducimus laborum perferendis tempora architecto.</Text>
          <Image src={image} />
        </View>
      </Page>
    </Document>
  )
}

export default Pdf
