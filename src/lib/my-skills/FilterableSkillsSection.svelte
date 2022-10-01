<script lang="ts">
  import type { Skill } from '$lib/models/skill';
  import { scale, slide } from 'svelte/transition';
  import Chip from '../primitives/Chip.svelte';
  import ToolCard from './ToolCard.svelte';

  export let skills: Skill[];

  $: skillTypes = new Set(['all', ...skills.flatMap(skill => skill.types)]);
  $: filteredSkills = skills.filter(skill => selectedType === 'all' || skill.types.includes(selectedType));
  let selectedType: 'all' | string = 'all';
</script>

<div class="filterable-skills" transition:slide>
  <div class="chips">
    {#each Array.from(skillTypes) as type}
      <Chip label={type} on:click={() => selectedType = type} active={selectedType === type}/>
    {/each}
  </div>
  <div class="skills">
    {#each filteredSkills as skill}
    <div transition:scale={{delay: 100, duration: 100}}>
      <ToolCard  icon={skill.iconUrl} label={skill.label} inProgress={skill.inProgress} />
    </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .filterable-skills {
    display: flex;
    flex-direction: column;
    row-gap: .8em;

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: .5em;
      align-self: flex-end;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      grid-gap: 20px 32px;

      @media (max-width: 520px) {
        grid-gap: 15px;
      }
    }
  }
</style>