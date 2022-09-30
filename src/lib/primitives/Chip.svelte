<script lang="ts">
  export let label: string;
  export let active = false;
</script>

<span class="chip" class:active on:click>
  <p>{label}</p>
</span>

<style lang="scss">
  .chip {
    background-color: var(--app-color-1);
    border-radius: 8px;
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 3px 12px;

    p {
      padding: 0;
      margin: 0;
    }

    :hover {
      cursor: pointer;
    }

    &.active {
      outline: 2px solid var(--app-color-2);
    }
  }
</style>