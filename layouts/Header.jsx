import Logo from '@components/Logo/Logo'
import { SearchIcon } from '@components/SearchIcon/SearchIcon'
import { Input, Navbar, Text } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Header(props) {
  const router = useRouter()

  const [visibleLoading, setVisibleLoading] = useState(false)
  const [search, setSearch] = useState(router.query.q || '')

  return (
    <>
      <Navbar
        disableShadow
        disableBlur
        maxWidth="fluid"
        isCompact={true}
        shouldHideOnScroll
        variant="sticky"
        className="z-[300]"
        css={{
          '& .nextui-c-egxOLa': {
            bg: 'var(--nextui-colors-backgroundContrast)'
          }
        }}
      >
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
          <Link href="/" className="flex items-center text-inherit mr-5">
            <Logo width="25px" height="25px" className="mr-1" />
            <Text b color="inherit" hideIn="xs">
              XD
            </Text>
          </Link>
          <Navbar.Content hideIn="xs" variant="highlight">
            <Link href="/" passHref legacyBehavior>
              <Navbar.Link isActive={router.asPath === '/'}>Home</Navbar.Link>
            </Link>
            <Link href="/mangas" passHref legacyBehavior>
              <Navbar.Link isActive={router.asPath === '/mangas'}>
                Mangas
              </Navbar.Link>
            </Link>
            <Link href="/feedback" passHref legacyBehavior>
              <Navbar.Link isActive={router.asPath === '/feedback'}>
                Feedback
              </Navbar.Link>
            </Link>
          </Navbar.Content>
        </Navbar.Brand>

        <Navbar.Content
          css={{
            '@xsMax': {
              w: '100%',
              jc: 'space-between'
            }
          }}
        >
          <Navbar.Item
            css={{
              '@xsMax': {
                w: '100%',
                jc: 'center'
              }
            }}
          >
            <Input
              aria-label="search mangas"
              clearable
              rounded
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: '100%',
                '@xsMax': {
                  mw: '300px'
                },
                '& .nextui-input-wrapper': {
                  bg: 'var(--nextui-colors-accents1)'
                },
                '& .nextui-input-content--left': {
                  h: '100%',
                  ml: '$4',
                  dflex: 'center'
                }
              }}
              placeholder="Buscador..."
              value={search}
              onChange={(newValueInput) => {
                setSearch(newValueInput.target.value.toLowerCase())
              }}
            />
          </Navbar.Item>

          {/* <HeaderSectionLogin /> */}
        </Navbar.Content>

        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link href="/" isActive={router.asPath === '/'}>
              Home
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="/mangas" isActive={router.asPath === '/mangas'}>
              Mangas
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="/feedback" isActive={router.asPath === '/feedback'}>
              Feedback
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
