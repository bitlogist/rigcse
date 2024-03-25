import type { SaveMyExamsData } from './formats'

const choices: ['A', 'B', 'C', 'D'] = ['A', 'B', 'C', 'D']

export async function parseSitemap() {
  const urls: string[] = []
  const response = await fetch('https://www.savemyexams.com/sitemap.xml')
  const text = await response.text()
  const matches = [...text.matchAll(/(?<=<loc>)[A-z0-9_/.:-]+(multiple-choice-questions)\/(?=<\/loc>)/g)]
  matches.forEach(match => {
    const text = match[0]
    if (text.includes('igcse')) urls.push(text)
  })
  return urls
}

function parseQuestion(page: any['props']['pageProps']['posts'][number]['pages'][number]) {
  const problem = page[0].problem[0].body.replaceAll(/<span style="[#A-z0-9:;-]+">✔<\/span>/g, '<span class="material-symbols-rounded">check</span>').replaceAll(/<span style="[#A-z0-9:;-]+">(✘|X)<\/span>/g, '<span class="material-symbols-rounded">close</span>')
  const solution = page[0].solution[0].body.replaceAll(/color:[#A-z0-9]+;?/g, '')
  const correctIndex = page[0].correctChoice
  let options: [string, string, string, string] = choices.map(choice => {
    const x = page[0][`choice${choice}`]
    const option = x && x.length ? x[0].body : choice
    return option
  }) as [string, string, string, string]
  return {
    problem,
    options,
    correctIndex,
    solution,
  }
}

export async function fetchQuestions(url: string) {
  if (!url.startsWith('https://')) return []
  const response = await fetch(url)
  const text = await response.text()
  const doc = (new DOMParser()).parseFromString(text, 'text/html')
  const json: any = JSON.parse(doc.getElementById('__NEXT_DATA__')?.innerHTML as string) // using any type because sme changed their JSON structure
  let questions: any[] = []
  const data: Record<string, any>[] = json.props.pageProps.posts.map((post: any) => post.pages.map((page: any) => parseQuestion(page)))
  data.forEach(x => questions = questions.concat(x))
  return questions
}