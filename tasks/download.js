import fs from 'fs'

// inclusive bounds for paper year
const START_YEAR = 20
const END_YEAR = 22

const codes = {
  '0452': 'Accounting',
  '0455': 'Economics',
  '0478': 'Computer Science',
  '0500': 'English - First Language',
  '0580': 'Mathematics',
  '0610': 'Biology',
  '0620': 'Chemistry',
  '0625': 'Physics',
  '0654': 'Sciences - Co-ordinated (Double)',
}

const seasons = {
  'm': [2],
  's': [1, 2, 3],
  'w': [1, 2, 3],
}

const timer = ms => new Promise(res => setTimeout(res, ms))

async function download(subject, year, season, document, paper, variant) {
  const paperCode = `${subject}_${season}${year}_${document}_${paper}${variant}`
  const url = `https://papers.gceguide.com/Cambridge IGCSE/${codes[subject]} (${subject})/20${year}/${paperCode}.pdf`
  try {
    const response = await fetch(url.replaceAll(' ', '%20'))
    const responseType = response.headers.get('content-type')
    if (responseType === 'application/pdf') {
      const arrayBuffer = await response.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      if (!fs.existsSync(`static/papers/${subject}`)) fs.mkdirSync(`static/papers/${subject}`)
      if (!fs.existsSync(`static/papers/${subject}/20${year}`)) fs.mkdirSync(`static/papers/${subject}/20${year}`)
      fs.writeFileSync(`static/papers/${subject}/20${year}/${paperCode}.pdf`, buffer)
    }
  } catch (e) {
    console.log(e)
    console.log(paperCode)
  }
}

async function downloadAllPapers() {
  for (const subject of Object.keys(codes)) {
    for (let year = START_YEAR; year <= END_YEAR; year++) {
      Object.entries(seasons).forEach(([season, variants]) => {
        variants.forEach(variant => {
          for (let i = 1; i <= 6; i++) {
            download(subject, year, season, 'qp', i, variant)
            download(subject, year, season, 'ms', i, variant)
          }
        })
      })
      await timer(500)
    }
  }
}

downloadAllPapers()