<script lang="ts">
  import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton'
</script>

<section class="page flex justify-between gap-10">
  <div use:tocCrawler={{ mode: 'generate', scrollTarget: '#page' }} class="space-y-4 w-full">
    <slot/>
  </div>
  <aside class="sticky top-10 hidden xl:block space-y-4 w-72">
    <TableOfContents>Contents</TableOfContents>
  </aside>
</section>