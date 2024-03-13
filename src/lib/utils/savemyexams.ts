import type { SaveMyExamsData } from './formats'

const choices: ['A', 'B', 'C', 'D'] = ['A', 'B', 'C', 'D']

function parseQuestion(page: SaveMyExamsData['props']['pageProps']['pages'][number]) {
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
  const response = await fetch(url)
  const text = await response.text()
  const doc = (new DOMParser()).parseFromString(text, 'text/html')
  const json: SaveMyExamsData = JSON.parse(doc.getElementById('__NEXT_DATA__')?.innerHTML as string)
  const questions = json.props.pageProps.pages.map(page => parseQuestion(page))
  return questions
}