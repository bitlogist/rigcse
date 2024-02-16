<script lang="ts">
  import '../app.postcss'
  import { AppShell } from '@skeletonlabs/skeleton'
  import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton'
  import Icon from '$lib/components/Icon.svelte'

  const tiles = [
    {
      title: 'Home',
      icon: 'home',
      url: '/',
    },
  ]

  let currentTile = '/'
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <AppRail>
      <svelte:fragment slot="lead">
        <AppRailAnchor href="/" ><Icon name="menu"></Icon></AppRailAnchor>
      </svelte:fragment>
      {#each tiles as tile,i}
        <AppRailTile bind:group={currentTile} name={tile.title} value={tile.url} title={tile.title}>
          <svelte:fragment slot="lead">
            <Icon name={tile.icon}></Icon>
          </svelte:fragment>
          <span>{tile.title}</span>
        </AppRailTile>
      {/each}
      <svelte:fragment slot="trail">
        <AppRailAnchor href="https://github.com/bitlogist/rigcse" target="_blank" title="Account"><Icon name="code"></Icon></AppRailAnchor>
      </svelte:fragment>
    </AppRail>
  </svelte:fragment>
  <slot />
</AppShell>
