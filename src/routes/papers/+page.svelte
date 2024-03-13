<script lang="ts">
  import Heading from '$lib/components/Heading.svelte'
  import Layout from '$lib/components/Layout.svelte'
  import { createPathTree, createTreeView } from '$lib/utils/papers'
  import { TreeView, TreeViewItem, RecursiveTreeView, type TreeViewNode } from '@skeletonlabs/skeleton'

  const glob = import.meta.glob('../../../static/**/*.pdf')
  const pathTree = createPathTree(Object.keys(glob))
</script>

<Layout>
  <Heading>Past Papers</Heading>
  <h2 class="h2">Format</h2>
  <p>Cambridge past papers follow a <em>mostly</em> consistent naming convention. For example, we can break down the paper <code class="code">0580_s22_qp_23</code> into 6 parts.</p>
  <ul class="list-disc pl-7">
    <li>
      <code class="code">0580</code> is the <strong>subject code</strong> for IGCSE Mathematics
    </li>
    <li>
      <code class="code">s</code> is the <strong>season code</strong> for winter (october-november)
    </li>
    <li>
      <code class="code">22</code> is the <strong>year number</strong> for 2023
    </li>
    <li>
      <code class="code">qp</code> is the <strong>document type</strong> for question paper
    </li>
    <li>
      <code class="code">2</code> is the <strong>paper number</strong> for IGCSE Mathematics (Extended)
    </li>
    <li>
      <code class="code">3</code> is the <strong>variant number</strong> for zones 5 and 6
    </li>
  </ul>
  <h2 class="h2">Download</h2>
  <p>You can use the navigation tree or download the pdf from a url. For example, <a href="/papers/0580/2022/0580_s22_qp_23.pdf" class="link">papers/0580/2022/0580_s22_qp_23.pdf</a> will fetch you the PDF for <code class="code">0580_s22_qp_23</code>.</p>
  <h2 class="h2">Navigation</h2>
  <p>Click on the drop down bars to select your subject, year, and paper.</p>
  <RecursiveTreeView nodes={createTreeView(pathTree)}/>
</Layout>