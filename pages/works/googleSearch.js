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
    <Layout title="OpSearch">
      <Container>
        <Title>
        Food Delivery
        </Title>
        <P>
        Built a Food delivery service with Add Cart functionality.

        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://foodproject-react.vercel.app/">
            https://foodproject-react.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js,jslibrery,html,css</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/opsearch_01.png" alt="OpSearch" />
         
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  