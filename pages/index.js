import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BioDetails } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGoogle, IoLogoInstagram, IoLogoGithub, IoLogoWebComponent } from 'react-icons/io5'
import Image from 'next/image'
import Head from 'next/head'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        "Keen to L-Earn"
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nilanchala Bariki
          </Heading>
          <p>Software Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Nilanchala Bariki, from Chilika, Odisha, is a highly skilled and motivated individual with a bachelor's degree from Utkal University.
Apart from development works, he is passionate about problem-solving with Software Developing, continuously improving his skills.He also has a strong understanding of Computer Networks and enjoys playing Cricket in his free time.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

<BioSection>
  <BioYear>Sep 2022 to Mar 2023</BioYear>
  <BioDetails>Worked as Software Developer Intern at FinacPlus in Bangalore / Bengaluru.</BioDetails>
</BioSection>

        <BioSection>
          <BioYear>Nov 2021 to Sep 2022 </BioYear>
<BioDetails > Worked as FullStack Developer Intern at Newton School.</BioDetails>
         
        </BioSection>
        <BioSection>
          <BioYear>Jun 2016 to Aug 2019</BioYear>
        <BioDetails>Completed Bsc in Utkal University with 57%</BioDetails> 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music , Cricket , Travelling
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Nilugithubbariki" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                Nilanchala Bariki
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://drive.google.com/file/d/1ZfqFo1TvpPtjBjoER8vrtnMLYmux_-fy/view" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWebComponent />}
              >
                Resume
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:niluofficially@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                niluofficially@gmail.com
              </Button>
            </Link>

          </ListItem>

        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
