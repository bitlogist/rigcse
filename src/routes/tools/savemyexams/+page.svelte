<script lang="ts">
  import Heading from '$lib/components/Heading.svelte'
  import Layout from '$lib/components/Layout.svelte'
  import { fetchQuestions } from '$lib/utils/savemyexams'
  import { type AutocompleteOption, Autocomplete } from '@skeletonlabs/skeleton';

  let url = ''
  const options: AutocompleteOption<string>[] = []
  
  function onSelection(event: CustomEvent<AutocompleteOption<string>>): void {
    url = event.detail.label
  }
</script>

<Layout>
  <Heading>Save My Exams</Heading>
  <p>You can paste a Save My Exams topic question like <a href="https://www.savemyexams.com/igcse/biology/cie/23/topic-questions/1-characteristics-and-classification-of-living-organisms/1-1-characteristics-classification-and-features-of-organisms/-/multiple-choice-questions/medium/">this</a> into the input box to get free answers to any topic question.</p>
  <input class="input" type="search" name="demo" bind:value={url} placeholder="Search..." />
  <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
    <Autocomplete bind:input={url} {options} on:selection={onSelection} />
  </div>
  {#await fetchQuestions(url)}
    Loading...
  {:then questions}
    <ul>
      {#each questions as question,i}
        <li>
          <h2 class="h2 mt-4">{i + 1}</h2>
          <div class="bg-white text-black rounded p-4 my-4">{@html question.problem}</div>
          {#each question.options as option}
            <span>{@html option}</span>
          {/each}
          <div class="solution">{@html question.solution}</div>
        </li>
      {/each}
    </ul>
  {/await}
</Layout>

<style>
  .solution {
    color: white;
  }
</style>