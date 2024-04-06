<script lang="ts">
  import '../app.postcss'
  import { goto } from '$app/navigation'
  import { AppShell } from '@skeletonlabs/skeleton'
  import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton'
  import Icon from '$lib/components/Icon.svelte'
  import { page } from '$app/stores'

  const tiles = [
    {
      title: 'Home',
      icon: 'home',
      url: '/',
    },
    {
      title: 'Papers',
      icon: 'article',
      url: '/papers',
    },
    {
      title: 'Tools',
      icon: 'construction',
      url: '/tools',
    },
    {
      title: 'Resources',
      icon: 'book',
      url: '/resources',
    },
  ]

  let currentTile = '/' + $page.url.pathname.split('/')[1]

  function onClick(url: string) {
    currentTile = url
    console.log(currentTile)
    goto(currentTile)
  }
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <AppRail>
      <svelte:fragment slot="lead">
        <AppRailAnchor href="/" ><Icon name="menu"></Icon></AppRailAnchor>
      </svelte:fragment>
      {#each tiles as tile,i}
        <AppRailTile bind:group={currentTile} name={tile.title} value={tile.url} title={tile.title} on:click={e => onClick(tile.url)}>
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
