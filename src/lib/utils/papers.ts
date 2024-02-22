import type { TreeViewNode } from '@skeletonlabs/skeleton'

type PathNode = string | PathTree
interface PathTree extends Record<string, PathNode> {}

export function createPathTree(paths: string[]): PathTree {
  paths = paths.map(path => path.replaceAll('../', '').replaceAll('static/', ''))
  const pathTree: PathTree = {}

  paths.forEach((path) => {
    const parts = path.split('/')
    let currentLevel: PathTree = pathTree
    parts.forEach(part => {
      currentLevel[part] = currentLevel[part] || {}
      currentLevel = currentLevel[part] as PathTree
    })
  })

  return pathTree
}

export function createTreeView(pathTree: PathTree, fullPath: string[] = []): TreeViewNode[] {
  const keys = Object.keys(pathTree)
  return keys.map(key => {
    let path = [...fullPath] // copy without reference
    path.push(key)
    return {
      id: key,
      content: `<a href="${path.join('/')}">${key}</a>`,
      children: createTreeView(pathTree[key] as PathTree, path),
    }
  })
}