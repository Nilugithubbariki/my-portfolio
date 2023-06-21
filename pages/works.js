import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/docsapp_eyecatch.png'
import thumbWalknote from '../public/images/works/opsearch_01.png'
import thumbFourPainters from '../public/images/works/letsShop1.png'
import thumbMenkiki from '../public/images/works/notepad_01.png'
import thumbTodoApp from '../public/images/works/todoApp_01.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="docsapp" title="CryptoCurrency Tracker" thumbnail={thumbInkdrop}>
            Using this project, we can search for the most trending coins.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="googleSearch"
            title="Food Delivery"
            thumbnail={thumbWalknote}
          >
            Built a Food delivery service with Add Cart functionality.

          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="letsShop"
            title="Let's Shop"
            thumbnail={thumbFourPainters}
          >
           Built an e-commerce website with basic shopping functionalities.
          </WorkGridItem>
        </Section>


        {/* <Section delay={0.1}>
          <WorkGridItem id="notepadApp" thumbnail={thumbMenkiki} title="Notepad Clone">
            Created clone of notepad app.
          </WorkGridItem>
        </Section> */}

        {/* <Section delay={0.1}>
          <WorkGridItem id="todoApp" thumbnail={thumbTodoApp} title="Todo app">
           Todo application using Spring framework.  </WorkGridItem>
        </Section> */}


      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
