<script lang="ts">
  import Heading from '$lib/components/Heading.svelte'
  import Layout from '$lib/components/Layout.svelte'
</script>

<Layout>
  <Heading id="past-papers">Past Papers</Heading>
  <h2 class="h2" id="format">Format</h2>
  <p>Cambridge past papers follow a <em>mostly</em> consistent naming convention. For example, we can break down the paper <code class="code">0580_w23_qp_23</code> into 6 parts.</p>
  <ul class="list-disc pl-7">
    <li>
      <code class="code">0580</code> is the <strong>subject code</strong> for IGCSE Mathematics
    </li>
    <li>
      <code class="code">w</code> is the <strong>season code</strong> for winter (october-november)
    </li>
    <li>
      <code class="code">23</code> is the <strong>year number</strong> for 2023
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
</Layout>