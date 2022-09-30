<script lang="ts">
	import type { Skill } from '$lib/models/skill';
	import FilterableSkillsSection from './FilterableSkillsSection.svelte';
	import SkillSkeleton from './SkillSkeleton.svelte';

	async function getSkills(): Promise<Skill[]> {
		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/skill/all`);

		if (response.ok) {
			return await response.json();
		} else {
			throw new Error("Couldn't fetched skills");
		}
	}

	const promise = getSkills();
</script>

{#await promise}
	<div class="skills-skeleton">
		<SkillSkeleton />
		<SkillSkeleton />
		<SkillSkeleton />
		<SkillSkeleton />
		<SkillSkeleton />
	</div>
	{:then skills}
	<FilterableSkillsSection skills={skills}/>
{/await}

<style lang="scss">
	.skills-skeleton {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 20px 32px;

		@media (max-width: 520px) {
			grid-gap: 15px;
		}
	}
</style>