<template>
  <button :disabled="disabled" @click='onClick' :type="nativeType" :class='classes'>
    <span v-if='icon'></span>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'WButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'md'
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
      }
    },
    computed: {
      classes () {
        return {
          'w-disabled': this.disabled,
          [`w-button-${this.type}`]: true,
          [`w-button-${this.size}`]: true
        }
      }
    },
    methods: {
      onClick (e) {
        if (!this.disabled) this.$emit('click', e)
      }
    }
  }
</script>

<style lang='less' scoped>
  @import '../../less/variable.less';

  .w-type-variables(@type, @bg-color) {
    .w-button-@{type} {
      background-color: @bg-color;
      border: none;
      color: #fff;
    }
  }
  .w-type-variables(default, @btn-default-color);
  .w-type-variables(success, @btn-success-color);
  .w-type-variables(info, @btn-info-color);
  .w-type-variables(warn, @btn-warn-color);

  .w-size-variable(@size, @width, @height, @font-size, @padding-space) {
    .w-button-@{size} {
      font-size: @font-size;
      line-height: @height;
      vertical-align: bottom;
      padding: @padding-space @padding-space*2.4;
    }
  }
  .w-size-variable(sm, @sm-width, @sm-height, @sm-font-size, @sm-padding-space);
  .w-size-variable(md, @md-width, @md-height, @md-font-size, @md-padding-space);
  .w-size-variable(lg, @lg-width, @lg-height, @lg-font-size, @lg-padding-space);

</style>

