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
    <Layout title="Let's Shop">
      <Container>
        <Title>
          Let's Shop
        </Title>
        <P>
        Let's Shop is an e-commerce website with add to cart option, and buy and sell functionalities. 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/Nilugithubbariki/Ecommorceproducts.project">
            https://github.com/Nilugithubbariki/Ecommorceproducts.project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React(useState,useContext,useEffect),JavaScript,CSS,API,HTML</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/letsShop1.png" alt="LetsShop" />
        <WorkImage src="/images/works/letsShop2.png" alt="LetsShop" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  