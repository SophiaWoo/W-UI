<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'WuiButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick (e) {
        if (!this.disabled) this.$emit('click', e)
      }
    }
  }
</script>