interface Categorys {
  name: string
  url: string
}

const HEADING: string = 'NEWS NOW'
const PrincipalCategorys: Array<Categorys> = [
  {
    name: 'Entertainment',
    url: '/entertainment',
  },
  {
    name: 'Business',
    url: '/business',
  },
  {
    name: 'General',
    url: '/general',
  },
  {
    name: 'Health',
    url: '/health',
  },
  {
    name: 'Science',
    url: '/science',
  },
  {
    name: 'Technology',
    url: '/technology',
  },
  {
    name: 'Sports',
    url: '/sports',
  },
]

export { HEADING, PrincipalCategorys }
