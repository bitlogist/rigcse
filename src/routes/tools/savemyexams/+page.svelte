<script lang="ts">
  import Heading from '$lib/components/Heading.svelte'
  import Layout from '$lib/components/Layout.svelte'
  import { fetchQuestions } from '$lib/utils/savemyexams'
  import { onMount } from 'svelte'

  let url = 'https://www.savemyexams.com/igcse/biology/cie/23/topic-questions/1-characteristics-and-classification-of-living-organisms/1-1-characteristics-classification-and-features-of-organisms/-/multiple-choice-questions/medium/'

  onMount(async () => {
    const questions = await fetchQuestions(url)
    console.log(questions)
  })
</script>

<Layout>
  <Heading>Save My Exams</Heading>
  <p>You can paste a Save My Exams topic question like <a href="https://www.savemyexams.com/igcse/biology/cie/23/topic-questions/1-characteristics-and-classification-of-living-organisms/1-1-characteristics-classification-and-features-of-organisms/-/multiple-choice-questions/medium/">this</a> into the input box to get free answers to any topic question.</p>
</Layout>