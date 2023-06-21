import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="CryptoCurrency Tracker">
    <Container>
      <Title>
      CryptoCurrency Tracker
      </Title>
      <P>
      Using this project, we can search for the most trending coins.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://cryptocurrency-ecru.vercel.app/">
          https://cryptocurrency-ecru.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>react.js,materialui,chart.js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/docsapp_01.png" alt="DocsApp" />
      <WorkImage src="/images/works/docsapp_02.png" alt="DocsApp" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
